import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as s from "./style/StoreStyle";
import * as r from "../components/style/RecommendSectionStyle";
import { Data } from "../Data/Store_Main1";
import { Data2 } from "../Data/Store_Main2";
import Banner from "../Resource/Images/롤링배너.svg";
import BottomBanner from "../Resource/Images/3_크리에이터 신청.svg";
import PullToRefresh from "../common/PullToRefresh";
import Img from "../Resource/Images/Img1.svg";
import Img2 from "../Resource/Images/Img2.svg";
import Img3 from "../Resource/Images/Img3.svg";
import Img4 from "../Resource/Images/Img4.svg";
import { sleep } from "../utill";
import SlickSlider from "../common/SlickSlider";

const category = [
    { title: "키즈", img: "/img/Rectangle 2959.png" },
    { title: "시니어", img: "/img/Rectangle 2960.png" },
    { title: "보험", img: "/img/Rectangle 2961.png" },
    { title: "학원", img: "/img/Rectangle 2962.png" },
    { title: "생필품", img: "/img/Rectangle 2963.png" },
    { title: "반려동물", img: "/img/Rectangle 2964.png" },
    { title: "헬스케어", img: "/img/Rectangle 2965.png" },
    { title: "기부", img: "/img/Rectangle 2966.png" }
];

const BaseURL = "https://paytalk.github.io/Paytalk_webview";

const StoreContainer = () => {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setScrollY(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const mutate = async () => {
        await sleep(2000);
    };

    return (
        <>
            <PullToRefresh onRefresh={mutate}>
                <s.StoreContainerWrap>
                    <s.StoreContainerArea>
                        <s.StoreContainerTitle
                            onClick={() => console.log(scrollY)}
                        >
                            스토어
                        </s.StoreContainerTitle>
                        <SlickSlider />
                        {/* <RecommendSection
            title={Data.data.market1_title}
            data={Data.data.product}
            ></RecommendSection> */}
                        <r.StoreRecommendBox>
                            <r.Title>
                                <p>지금 뜨는 상품 🔥</p>
                            </r.Title>
                            <r.StoreRecommendItemBox>
                                <r.StoreHotUl>
                                    {/* {Data.data.product.map(index => (
                                        <r.StoreHotLi>
                                            <r.StoreHotImg>
                                                <img src={} alt="이미지" />
                                            </r.StoreHotImg>
                                            <r.StoreHotTitle>
                                                KAIST Plus_프리미엄 인지검사 /
                                                컨설팅 구독권
                                            </r.StoreHotTitle>
                                            <r.StoreHotSeller>
                                                S Meta Math 본점 원장선생님
                                            </r.StoreHotSeller>
                                        </r.StoreHotLi>
                                    ))} */}
                                    <r.StoreHotLi>
                                        <r.StoreHotImg>
                                            <img src={Img2} alt="이미지" />
                                        </r.StoreHotImg>
                                        <r.StoreHotTitle>
                                            본수업(영태대비3회 포함) 피닉스30권,
                                            스피킹 20권, 시험정보...
                                        </r.StoreHotTitle>
                                        <r.StoreHotSeller>
                                            Sadie
                                        </r.StoreHotSeller>
                                    </r.StoreHotLi>
                                    <r.StoreHotLi>
                                        <r.StoreHotImg>
                                            <img src={Img2} alt="이미지" />
                                        </r.StoreHotImg>
                                        <r.StoreHotTitle>
                                            KAIST Plus_프리미엄 인지검사 /
                                            컨설팅 구독권
                                        </r.StoreHotTitle>
                                        <r.StoreHotSeller>
                                            Sadie
                                        </r.StoreHotSeller>
                                    </r.StoreHotLi>
                                    <r.StoreHotLi>
                                        <r.StoreHotImg>
                                            <img src={Img3} alt="이미지" />
                                        </r.StoreHotImg>
                                        <r.StoreHotTitle>
                                            KAIST Plus_프리미엄 인지검사 /
                                            컨설팅 구독권
                                        </r.StoreHotTitle>
                                        <r.StoreHotSeller>
                                            S Meta Math 본점 원장선생님
                                        </r.StoreHotSeller>
                                    </r.StoreHotLi>
                                    <r.StoreHotLi>
                                        <r.StoreHotImg>
                                            <img src={Img4} alt="이미지" />
                                        </r.StoreHotImg>
                                        <r.StoreHotTitle>
                                            KAIST Plus_프리미엄 인지검사 /
                                            컨설팅 구독권
                                        </r.StoreHotTitle>
                                        <r.StoreHotSeller>
                                            S Meta Math 본점 원장선생님
                                        </r.StoreHotSeller>
                                    </r.StoreHotLi>
                                </r.StoreHotUl>
                            </r.StoreRecommendItemBox>
                        </r.StoreRecommendBox>

                        {/* <RecommendSection
            title={Data2.data.market2_title}
            data={Data2.data.product}
            ></RecommendSection> */}
                        <r.StoreRecommendBox>
                            <r.Title>
                                <p>페이톡 학원 인기 강의 🍭</p>
                            </r.Title>
                            <r.StoreRecommendItemBox>
                                <r.StoreRecommendUl>
                                    {Data.data.product.map(index => (
                                        <r.StoreRecommendLi>
                                            <r.StoreRecommendImg>
                                                <img src={Img} alt="이미지" />
                                            </r.StoreRecommendImg>
                                            <r.StoreRecommendClipArea>
                                                <r.StoreRecommendClip>
                                                    NEW
                                                </r.StoreRecommendClip>
                                            </r.StoreRecommendClipArea>
                                            <r.StoreRecommendTitle>
                                                4세 Gate_C.Gate_Feedback+#1
                                                (단편) + 커리제공 (얼리버드)
                                            </r.StoreRecommendTitle>
                                            <r.StoreRecommendCostArea>
                                                <r.StoreRecommendFakeCost>
                                                    880,000원
                                                </r.StoreRecommendFakeCost>
                                                <r.StoreRecommendDisCount>
                                                    16%
                                                </r.StoreRecommendDisCount>
                                                <r.StoreRecommendCost>
                                                    739,200원
                                                </r.StoreRecommendCost>
                                            </r.StoreRecommendCostArea>
                                        </r.StoreRecommendLi>
                                    ))}
                                </r.StoreRecommendUl>
                            </r.StoreRecommendItemBox>
                        </r.StoreRecommendBox>
                        <s.BottomBannerArea>
                            <s.BottomBanner>
                                <img src={BottomBanner} />
                            </s.BottomBanner>
                        </s.BottomBannerArea>
                    </s.StoreContainerArea>
                </s.StoreContainerWrap>
            </PullToRefresh>
        </>
    );
};

export default StoreContainer;
