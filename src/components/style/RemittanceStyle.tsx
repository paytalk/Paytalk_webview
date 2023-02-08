import styled from "styled-components";

export const RemittanceWrap = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 3;
    background-color: #fff;
`;
export const Title = styled.div`
    margin-top: 2vh;
    margin-left: 4.4444vw;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    line-height: 140%;
    color: #181818;
`;
export const InpuBox = styled.input`
    margin-left: 4.4444vw;
    margin-top: 2vh;
    padding: 0 4.4444vw;
    width: 91.1111vw;
    height: 15.5556vw;
    background: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    line-height: 15.5556vw;
    text-align: right;
    color: #000000;
    &:focus {
        outline: 1px solid #5c63e5;
    }
`;
export const Remainder = styled.div`
    margin: 1vh 4.4444vw 0 0;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: right;
    color: #bcbcbc;
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
