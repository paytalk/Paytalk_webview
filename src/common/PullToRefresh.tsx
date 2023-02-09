import { useDrag } from "@use-gesture/react";
import { useEffect, useRef, useState } from "react";
import { sleep, getScrollParent } from "./utill";
import * as S from "./PullToRefreshStyle";
import { ReactNode } from "react";
type PullStatus = "pulling" | "canRelease" | "refreshing" | "complete";

type PullToRefreshProps = {
    onRefresh?: () => Promise<any>;
    pullingText?: ReactNode;
    canReleaseText?: ReactNode;
    refreshingText?: ReactNode;
    completeText?: ReactNode;
    completeDelay?: number;
    headHeight?: number;
    threshold?: number;
    disabled?: boolean;
    children?: React.ReactNode;
};
// https://mobile.ant.design/components/pull-to-refresh
export const PullToRefresh = ({
    headHeight = 60,
    threshold = 60,
    onRefresh,
    disabled = false,
    completeDelay = 300,
    children,
    ...restProps
}: PullToRefreshProps) => {
    const [status, setStatus] = useState<PullStatus>("pulling");
    const requestRef = useRef<number>(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const headRef = useRef<HTMLDivElement>(null);
    const pullingRef = useRef(false);

    useEffect(() => {
        return () => {
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const slideDown = (height: number, cb?: () => void) => {
        requestAnimationFrame(function animate() {
            const currentHeight = headRef.current!.clientHeight;
            if (currentHeight > height) {
                const decreasing = currentHeight - height > 20 ? 5 : 1;
                headRef.current!.style.height = `${
                    currentHeight - decreasing
                }px`;
                requestRef.current = requestAnimationFrame(animate);
            }

            if (currentHeight === height) {
                if (cb) {
                    cb();
                }
            }
        });
    };

    const slideUp = (height: number, cb?: () => void) => {
        requestAnimationFrame(function animate() {
            const currentHeight = headRef.current!.clientHeight;
            if (currentHeight > height) {
                headRef.current!.style.height = `${currentHeight - 1}px`;
                requestRef.current = requestAnimationFrame(animate);
            }

            if (currentHeight === height) {
                if (cb) {
                    cb();
                }
            }
        });
    };

    async function doRefresh() {
        slideDown(headHeight);
        setStatus("refreshing");
        try {
            await onRefresh?.();
            setStatus("complete");
        } catch (e) {
            slideDown(0, () => {
                setStatus("pulling");
            });
            setStatus("pulling");
            throw e;
        }
        if (completeDelay > 0) {
            await sleep(completeDelay);
        }

        slideDown(0, () => {
            setStatus("pulling");
        });
        setStatus("pulling");
    }

    useDrag(
        state => {
            if (status === "refreshing" || status === "complete") return;

            const { event } = state;

            if (state.last) {
                pullingRef.current = false;
                if (status === "canRelease") {
                    doRefresh();
                } else {
                    slideUp(0);
                }
                return;
            }

            const [, y] = state.movement;
            // 첫 이벤트 시점에 pullToRefresh 발동이 가능한지 체크한다.
            // 스크롤이 최상단에 존재해야만(scrollTop=0) pullToRefresh 의 발동 조건이다.
            if (state.first && y > 0) {
                const { target } = state.event;
                if (!target || !(target instanceof Element)) return;
                let scrollParent = getScrollParent(target);
                while (true) {
                    // for 중첩 스크롤 영역
                    if (!scrollParent) return;
                    const scrollTop = getScrollTop(scrollParent);
                    if (scrollTop > 0) {
                        return;
                    }
                    if (scrollParent instanceof Window) {
                        break;
                    }
                    scrollParent = getScrollParent(
                        scrollParent.parentNode as Element
                    );
                }
                pullingRef.current = true;
                // eslint-disable-next-line no-inner-declarations
                function getScrollTop(element: Window | Element) {
                    return "scrollTop" in element
                        ? element.scrollTop
                        : element.scrollY;
                }
            }

            if (!pullingRef.current) return;

            if (event.cancelable) {
                event.preventDefault();
            }
            event.stopPropagation();

            if (y < headHeight) {
                headRef.current!.style.height = `${y}px`;
            } else {
                headRef.current!.style.height = `${
                    headHeight + (y - headHeight) * 0.25
                }px`;
            }
            setStatus(y > threshold ? "canRelease" : "pulling");
        },
        {
            pointer: { touch: true },
            axis: "y",
            target: elementRef,
            enabled: !disabled,
            eventOptions: { passive: false }
        }
    );

    return (
        <S.Wrapper ref={elementRef}>
            <S.Head ref={headRef}>
                <S.HeadContent height={headHeight}>
                    <span className="loader"></span>
                </S.HeadContent>
            </S.Head>
            <div>{children}</div>
        </S.Wrapper>
    );
};

export default PullToRefresh;
