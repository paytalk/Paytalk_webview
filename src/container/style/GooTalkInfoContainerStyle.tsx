import styled from "styled-components";

export const Gubun = styled.div`
    width: 100%;
    height: 1vh;
    background: #eeeeee;
    margin: 2vh 0;
`;
export const Flex = styled.div<{ justify: any }>`
    display: flex;
    justify-content: ${props => props.justify};
`;

export const GooTalkInfoWrap = styled.div`
    width: 100%;
    height: 99vh;
    position: absolute;
    z-index: 3;
    background-color: #fff;
    overflow: scroll;
`;

export const GooTalkTitle = styled.div`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #666666;
    margin-left: 4.4444vw;
`;
export const ImgArea = styled.div`
    width: 22.2222vw;
    height: 22.2222vw;
    background-color: #ccc;
    border-radius: 16px;
    margin-left: 4.4444vw;
    margin-top: 2vh;
    img {
        width: 22.2222vw;
        height: 22.2222vw;
    }
`;
export const InfoArea = styled.div`
    margin-left: 4.4444vw;
    margin-top: 2vh;
`;
export const Title = styled.div`
    width: 64.4444vw;
    height: 11.1111vw;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #181818;
`;

export const cost = styled.div`
    text-align: right;
    margin-top: 2vh;

    span {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 3.8889vw;
        color: #666666;
        margin-right: 4.4444vw;
    }
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 5vw;
        color: #181818;
    }
`;

export const PayMentInfo = styled.div`
    margin-left: 4.4444vw;
    span {
        display: inline-block;
        width: 20vw;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 3.3333vw;
        color: #666666;
    }
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 3.3333vw;
        color: #181818;
        margin-top: 1vh;
    }
`;

export const CompanyInfo = styled.div`
    margin-left: 4.4444vw;
    span {
        display: inline-flex;
        width: 13.3333vw;
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 400;
        font-size: 3.0556vw;
        color: #bcbcbc;
        word-break: keep-all;
        margin-right: 4.4444vw;
    }
    p {
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 700;
        font-size: 3.0556vw;
        color: #666666;
        margin-top: 1vh;
    }
`;
export const Remaining = styled.div`
    margin-right: 4.4444vw;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #181818;
`;
export const ProgressBar = styled.div`
    margin: 1vh auto 0 auto;
    width: 91.1111vw;
    height: 6.6667vw;
    background: #eeeeee;
    border-radius: 16px;
`;
export const Progress = styled.div`
    width: 30%;
    height: 100%;
    background-color: #5d5fee;
`;
export const ImgBox = styled.div`
    width: 91.1111vw;
    height: 91.1111vw;
    margin: 0 auto;
    background-color: #ccc;
    border-radius: 16px;
    img {
        width: 91.1111vw;
    }
`;
