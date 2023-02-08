import styled from "styled-components";
import { HiChevronLeft } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
export const BackIcon = styled(HiChevronLeft)`
    position: absolute;
    top: 2.5vh;
    margin-left: 4.444vw;
    font-size: 7vw;
`;

export const ItemDetailTop = styled.div`
    width: 100%;
    height: 8.25vh;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    line-height: 8.25vh;
    text-align: center;
    border-bottom: 1px solid #eeeeee;
`;
export const Gubun = styled.div`
    width: 100%;
    height: 0.9804vh;
    background: #eeeeee;
`;

export const PayMentWrap = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 5;
    background-color: #fff;
`;
export const address = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    margin-left: 4.4444vw;
    margin-top: 1vh;
`;
export const addressBox = styled.div`
    width: 91.1111vw;
    height: 6vh;
    background: #f8f8f8;
    border-radius: 9px;
    margin: 1vh auto 2vh auto;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 4.4444vw;
    color: #bcbcbc;
    text-align: center;
    line-height: 6vh;
`;
export const PayMent = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    margin-left: 4.4444vw;
    margin-top: 2vh;
`;
export const Bpay = styled.div``;

export const CheckBox = styled.div<{ checked: any }>`
    display: inline-block;
    width: 6.6667vw;
    height: 6.6667vw;
    background: ${props =>
        props.checked === "checked" ? "#5C63E5" : "#BCBCBC"};
    border-radius: 9px;
    margin: 1vh 2.2222vw 0 4.4444vw;
    padding: 1vw;
`;
export const CheckIcon = styled(HiCheck)`
    text-align: center;
    font-size: 4.4444vw;
    color: #fff;
`;
export const PayTitle = styled.div<{ checked: any }>`
    display: inline-block;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5vw;
    color: ${props => (props.checked === "checked" ? "#5C63E5" : "#BCBCBC")};
    transform: translateY(-0.6vh);
`;
export const PayBox = styled.div<{ bgColor: any }>`
    width: 91.1111vw;
    height: 22.2222vw;
    background: ${props => props.bgColor};
    border-radius: 9px;
    margin: 0 auto 1vh auto;
    text-align: right;
    padding: 2vh 4.4444vw 0 0;
    p {
        margin-bottom: 1vh;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 3.8889vw;
        color: ${props => props.color};
    }
    span {
        margin-left: 12vw;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 3.8889vw;
        color: ${props => props.color};
    }
    span.bold {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 5vw;
        color: #ffffff;
    }
`;
export const CreditCard = styled.div`
    ${PayBox} {
        width: 91.1111vw;
        height: 27.4444vw;
        padding-left: 4.4444vw;
        p {
            text-align: left;
            font-family: "Pretendard";
            font-style: normal;
            font-weight: 700;
            font-size: 18px;

            color: #666666;
        }
        p:last-child {
            text-align: right;
            font-family: "Pretendard";
            font-style: normal;
            font-weight: 400;
            font-size: 3.8889vw;
        }
    }
`;
export const Cost = styled.div`
    margin: 1vh 4.444vw 2vh 0;
    text-align: right;
    span:nth-child(1) {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 3.8889vw;
        color: #666666;
    }
    span:nth-child(2) {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 5vw;
        color: #666666;
        margin-left: 11vw;
    }
`;
export const ItemArea = styled.div`
    display: flex;
    margin: 2vh 4.4444vw 0 4.4444vw;
    justify-content: space-between;
`;
export const ImgArea = styled.div`
    width: 22.2222vw;
    height: 22.2222vw;
    border-radius: 16px;
    background-color: #181818;
    img {
        width: 22.2222vw;
        height: 22.2222vw;
    }
`;
export const TextArea = styled.div`
    width: 64.4444vw;
    p:nth-child(1) {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
        word-break: keep-all;
    }
    p:nth-child(2) {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        margin-top: 2vh;
        text-align: right;
        font-size: 3.8889vw;
        color: #666666;
    }
    span {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 5vw;
        color: #000;
    }
`;
export const Btn = styled.div`
    position: absolute;
    width: 91.1111vw;
    bottom: 1vh;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    background-color: #5c63e5;
    color: #fff;
    height: 6vh;
    margin-right: 2.2222vw;
    border-radius: 8px;
    border: 1px solid #ccc;

    line-height: 6vh;
    text-align: center;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5vw;
`;
