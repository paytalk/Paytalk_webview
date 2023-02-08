import styled from "styled-components";

export const StoreContainerWrap = styled.div`
    height: 100vh;
    overflow: scroll;
    position: relative;
    width: 100%;
    z-index: 0;
    background-color: #fff;
`;

export const StoreContainerArea = styled.div``;

export const StoreContainerTitle = styled.h1`
    font-size: 6.6667vw;
    margin: 2.9412vh 0 0 4.4444vw;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
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
    padding: 0.9804vh 0 1.9608vh 0;
`;
export const Gubun = styled.div`
    width: 100%;
    height: 0.9804vh;
    background: #eeeeee;
`;
