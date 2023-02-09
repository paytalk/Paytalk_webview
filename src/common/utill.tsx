type ScrollElement = HTMLElement | Window;
const defaultRoot = window;
const overflowStylePatterns = ["scroll", "auto", "overlay"];

function isElement(node: Element) {
    const ELEMENT_NODE_TYPE = 1;
    return node.nodeType === ELEMENT_NODE_TYPE;
}
export function getScrollParent(
    el: Element,
    root: ScrollElement | null | undefined = defaultRoot
): Window | Element | null | undefined {
    let node = el;

    while (node && node !== root && isElement(node)) {
        if (node === document.body) {
            return root;
        }
        const { overflowY } = window.getComputedStyle(node);
        if (
            overflowStylePatterns.includes(overflowY) &&
            node.scrollHeight > node.clientHeight
        ) {
            return node;
        }
        node = node.parentNode as Element;
    }
    return root;
}

export const sleep = (time: number) =>
    new Promise(resolve => {
        setTimeout(resolve, time);
    });
