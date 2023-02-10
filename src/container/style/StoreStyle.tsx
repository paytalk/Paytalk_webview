import styled from "styled-components";

export const StoreContainerWrap = styled.div`
    height: auto;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: 0;
    background-color: #fff;
`;

export const StoreContainerArea = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

export const StoreContainerTitle = styled.h1`
    font-size: 1.8rem;
    height: 5.8rem;
    line-height: 5.8rem;
    margin-left: 1.6rem;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
`;
export const StoreBanner = styled.div`
    width: 100%;

    img {
        width: 100%;
    }
`;
export const StoreContainerCategory = styled.p`
    display: inline-block;
    font-size: 4.4444vw;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    margin: 2.9412vh 0 0 4.4444vw;
`;
export const StoreContainerThe = styled.p`
    display: none;
    font-size: 4.4444vw;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    color: #666666;
    margin-left: 50%;
    opacity: 0;
`;
export const StoreCategoryBox = styled.div`
    margin-top: 2.9412vh;
    padding: 0 4.4444vw;
`;
export const StoreCategoryUl = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const StoreCategoryLi = styled.li`
    width: 21.1111vw;
    height: 32.2222vw;
`;
export const StoreCategoryImg = styled.div`
    width: 21.1111vw;
    height: 21.1111vw;
    border-radius: 16px;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;
export const StoreCategoryTitle = styled.p`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
`;
export const BottomBannerArea = styled.div`
    width: 100%;
    height: 13.2rem;
    padding: 0 1.6rem;
    margin: 3.6rem 0 2.1rem 0;
`;
export const BottomBanner = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
    }
`;
