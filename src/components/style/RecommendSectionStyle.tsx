import styled from "styled-components";

export const StoreRecommendBox = styled.div`
    width: 100%;
    overflow: hidden;
    p {
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
    }
`;
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0rem 0 0 1.6rem;
    &:nth-child(1) {
        margin: 4rem 0 0 1.6rem;
    }
    span {
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 700;
        font-size: 3.8889vw;
        color: #bcbcbc;
    }
`;
export const StoreRecommendItemBox = styled.div`
    width: 95.6666vw;
    overflow: scroll;
`;
export const StoreRecommendUl = styled.ul`
    display: inline-flex;
    justify-content: space-between;
`;
export const StoreHotLi = styled.li`
    width: 16.8rem;
    height: 16rem;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    margin-left: 1.6rem;
`;
export const StoreHotImg = styled.div`
    width: 100%;
    height: 9.6rem;
    border-radius: 8px;
    img {
        width: 100%;
        border-radius: 8px;
    }
`;
export const StoreHotTitle = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */
    word-break: keep-all;
    /* Gray99 */
`;
export const StoreHotSeller = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    /* identical to box height, or 127% */

    /* Gray60 */
    margin-top: 0.6rem;
    color: #929292;
`;
export const StoreRecommendLi = styled.li`
    width: 20rem;
    height: 28.8rem;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    margin-left: 1.6rem;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    &:last-child {
        margin-right: 4.4444vw;
    }
`;
export const StoreRecommendImg = styled.div`
    width: 20rem;
    height: 12.8rem;

    border-radius: 16px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.8rem 0.8rem 0 0;
    }
`;
export const StoreRecommendClipArea = styled.div`
    display: flex;
    margin-top: 2rem;
    margin-left: 1.6rem;
`;
export const StoreRecommendClip = styled.div`
    width: auto;
    height: 1.8rem;
    padding: 0 0.6rem;
    line-height: 1.8rem;
    font-size: 1.1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    background: #50d2ba;
    color: #fff;
    border-radius: 2px;
`;
export const StoreRecommendTitle = styled.h2`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.8rem;
    word-break: keep-all;
    margin: 0.8rem 1.6rem 2rem 1.6rem;
`;
export const StoreRecommendCostArea = styled.div`
    padding: 0 1.6rem;
`;
export const StoreRecommendFakeCost = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height, or 117% */

    text-decoration-line: line-through;

    /* Gray40 */

    color: #bcbcbc;
`;
export const StoreRecommendDisCount = styled.div`
    display: inline;
    margin-right: 0.8rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height, or 120% */

    color: #ff0000;
`;
export const StoreRecommendCost = styled.div`
    display: inline;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height, or 120% */

    color: #000000;
`;
