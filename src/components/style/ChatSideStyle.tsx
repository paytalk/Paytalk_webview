import styled from "styled-components";
import { HiChevronRight } from "react-icons/hi";
export const Gubun = styled.div`
    width: 100%;
    height: 0.9804vh;
    background: #eeeeee;
`;

export const ChatSideWrap = styled.div<{ position: any }>`
    position: fixed;
    width: 72.2222vw;
    height: 87.5vh;
    background-color: #fff;
    z-index: 999;
    overflow: scroll;
    top: 6.1vh;
    right: ${props => props.position};
    transition: all 0.5s linear;
`;
export const ChatSideArea = styled.div``;
export const Title = styled.div`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 3.3333vw;
    color: #666666;
    padding: 2vh 3.3333vw 1vh 3.3333vw;
`;

export const MediaBox = styled.div`
    width: 64.4444vw;
    height: 6vh;
    background: #eeeeee;
    border-radius: 8px;
    margin-left: 3.3333vw;
    margin-bottom: 1vh;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    line-height: 6vh;
    text-align: center;
    color: #666666;
    &:nth-child(3) {
        margin-bottom: 2vh;
    }
`;
export const Info = styled.div`
    margin-left: 3.3333vw;
    span {
        display: inline-block;
        width: 13.3333vw;
        margin-right: 2.2222vw;
        color: #bcbcbc;
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 400;
        font-size: 3.0556vw;
        transform: translateY(0.4vh);
    }
    p {
        margin-bottom: 1vh;
        color: #666666;
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 700;
        font-size: 3.0556vw;
    }
    p:last-child {
        margin-bottom: 2vh;
    }
`;
export const ItemUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 3.3333vw;
`;
export const Top = styled.div`
    display: flex;

    justify-content: space-between;
`;
export const Icon = styled(HiChevronRight)`
    font-size: 4.3333vw;
    color: #bcbcbc;
    margin: 2vh 3.3333vw 2vh 0;
`;
// export const ItemLi = styled.li`
//     width: 31.1111vw;
//     height: 24.0000vh;
// `
// export const ItemImg = styled.div`
//     width: 31.1111vw;
//     height: 14.0000vh;
//     border: 1px solid #ccc;
//     border-radius: 16px;
// `
export const ItemLi = styled.li`
    width: 15.1111vw;
    height: 24vh;
`;
export const ItemImg = styled.div`
    width: 15.1111vw;
    height: 15.1111vw;
    border: 1px solid #ccc;
    border-radius: 16px;
    img {
        width: 15.1111vw;
        height: 15.1111vw;
    }
`;
export const ItemInfo = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 3.3333vw;
    margin: 1vh 0;
`;
export const ItemCost = styled.div`
    text-align: right;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 3.3333vw;
    span {
        font-weight: 400;
    }
`;
