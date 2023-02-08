import styled from "styled-components";

export const Gubun = styled.div`
    width: 100%;
    height: 1vh;
    background: #eeeeee;
    margin: 2vh 0;
`;

export const ExchangeWrap = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 3;
    background-color: #fff;
`;

export const Title = styled.div`
    margin-left: 4.4444vw;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    color: #181818;
    margin-top: 2vh;
`;
export const InputBox = styled.input`
    margin-top: 1.5vh;
    margin-left: 4.4444vw;
    width: 91.1111vw;
    height: 15.5556vw;
    background: #f8f8f8;
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: right;
    color: #000000;
    outline: 1px solid #f8f8f8;
    padding: 0 4.4444vw;
    &:focus {
        outline: 1px solid #5c63e5;
    }
`;
export const balance = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
    color: #bcbcbc;
    text-align: right;
    padding-right: 4.4444vw;
    margin-top: 1vh;
`;

export const Bankaccount = styled.div`
    display: flex;
    justify-content: space-between;
    width: 91.1111vw;
    height: 26.6667vw;
    border: 1px solid #5c63e5;
    background: #f8f8f8;
    border-radius: 8px;
    margin: 1.5vh auto 0 auto;
    padding: 2vh 4.4444vw;
`;
export const BankAccountInfo = styled.div`
    p:nth-child(1) {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
        line-height: 140%;
        color: #000000;
        margin-bottom: 1vh;
    }
    p:nth-child(2) {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 5.5556vw;
        line-height: 140%;
        color: #000000;
    }
`;
export const Chip = styled.div`
    width: 17.7778vw;
    height: 6.6667vw;
    background: #5c63e5;
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 3.3333vw;
    text-align: center;
    color: #ffffff;
    line-height: 6.6667vw;
`;
export const ChangeBankAccount = styled.div`
    width: 91.1111vw;
    height: 11.1111vw;
    background: #f8f8f8;
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 4.4444vw;
    line-height: 11.1111vw;
    text-align: center;
    color: #666666;
    margin: 1vh auto 0 auto;
`;
export const ExchangeCost = styled.div`
    margin: 13.3333vw 4.4444vw 0 4.4444vw;
    div {
        display: flex;
        justify-content: space-between;
        margin: 1.5vh 0;
    }
    p {
        width: 44.4444vw;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
    }
    span {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 4.444vw;
        line-height: 140%;
        text-align: right;
        color: #000000;
    }
`;
export const Btn = styled.div`
    position: absolute;
    bottom: 1vh;
    left: 50%;
    transform: translateX(-50%);
    width: 91.1111vw;
    height: 13.3333vw;
    background: #5c63e5;
    border-radius: 8px;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 13.3333vw;
        text-align: center;
    }
    color: #ffffff;
`;

export const SubScribeCycle = styled.div<{ up: any }>`
    position: absolute;
    bottom: ${props => props.up};
    transition: all 0.5s linear;
    z-index: 999;
    width: 100%;
    height: 70%;

    background-color: #fff;
    padding: 0 4.4444vw;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    border-radius: 16px 16px 0px 0px;
    ${Btn} {
        position: absolute;
        width: 91.1111vw;
        bottom: 1vh;
    }
`;
export const SubOption = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    padding: 2vh 0;
`;

export const SubOptionUl = styled.ul``;

export const SubOptionLi = styled.li<{ check: any }>`
    width: 91.1111vw;
    height: 22.2222vw;
    background-color: ${props =>
        props.check == "checked" ? "#5C63E5" : "#EEEEEE"};
    border-radius: 8px;
    padding-top: 1vh;
    margin-bottom: 1vh;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
        margin: 1vh 0;
        padding-left: 4.4444vw;

        color: ${props => (props.check == "checked" ? "#FFF" : "#BCBCBC")};
    }
`;
export const ItemDetailBg = styled.div<{ visi: any; display: any }>`
    position: absolute;
    bottom: 0;
    opacity: ${props => props.visi};
    overflow: hidden;
    width: 100%;
    height: 100vh;
    z-index: ${props => props.display};
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    transition: all 0.2s linear;
`;
