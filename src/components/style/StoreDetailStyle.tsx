import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const StoreDetailWrap = styled.div`
    position: absolute;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;
`;

export const StoreTop = styled.div`
    height: 17vh;
`;

export const StoreDetailFlex = styled.div`
    padding: 2.9412vh 4.4444vw 0 4.4444vw;
    display: flex;
    justify-content: space-between;
    height: 7.8824vh;
`;
export const StoreSelectBox = styled.div`
    width: auto;
    height: 5vh;
    border: 1px solid #bcbcbc;
    border-radius: 8px;
    line-height: 5vh;
    padding: 0vh 2.1111vw;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    text-align: center;
    color: #181818;
    &:last-child {
        margin-right: 4.4444vw;
    }
`;

export const StoreDetailTitle = styled.h1`
    font-size: 6.6667vw;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    span {
        font-size: 6.6667vw;
        margin-right: 2.2222vw;
    }
    &.none {
        display: none;
    }
`;

export const SearchArea = styled.div`
    width: 92%;
    height: 5.8824vh;
    opacity: 1;
    display: block;
    background: #f8f8f8;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    &.none {
        opacity: 0;
        display: none;
    }

    input {
        width: 92%;
        height: 5.8824vh;
        opacity: 1;
        display: block;
        background: #f8f8f8;
        border: 1px solid #eeeeee;
        border-radius: 8px;
        font-size: 6.6667vw;
    }

    transition: all 1s linear;
`;

export const SearchIcon = styled(HiSearch)`
    font-size: 6.6667vw;
`;

export const ItemArea = styled.div`
    width: 100%;
    height: 74.75vh;
    background-color: #fff;
    padding: 2.9412vh 4.4444vw 0 4.4444vw;
    overflow: scroll;
`;
export const ItemUl = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ItemLi = styled.li`
    width: 44.4444vw;
    height: 71.1111vw;
`;

export const ImgArea = styled.div`
    width: 100%;
    height: 44.4444vw;
    border: 1px solid #ccc;
    border-radius: 16px;
    img {
        width: 100%;
        height: 44.444vw;
    }
`;
export const TextArea = styled.div`
    height: 11.1111vw;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    word-break: keep-all;
    margin: 1vh 1vw;
`;
export const CostArea = styled.div`
    font-size: 5vw;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    text-align: right;
    span {
        font-weight: 400;
        font-size: 3.8889vw;
    }
`;
