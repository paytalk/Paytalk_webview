import styled from "styled-components";

export const ContainerWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    @media screen and (min-width: 514px) {
        display: none;
    }
`;
export const ContainerWrapPC = styled.div`
    display: none;
    @media screen and (min-width: 514px) {
        display: block;
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: #fff;
        z-index: 999;
        h1 {
            font-size: 8vw;
            line-height: 100vh;
            text-align: center;
        }
    }
`;
export const ContainerArea = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 480px;
    background-color: #fff;
    margin: 0 auto;
`;
export const MainTitle = styled.div`
    padding: 3.5vh 4.444vw 3.5vh 4.4444vw;

    p {
        font-family: "Spoqa Han Sans Neo";
        font-weight: 700;
        font-size: 6vw;
    }
`;

export const BoxArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 4.4444vw;
`;
export const LeftBoxArea = styled.div`
    width: 44.4444vw;
    height: 41vh;
    background-color: #5d5fee;

    box-shadow: 4px 4px 4px #ccc;
    border-radius: 14px;
    p:nth-child(1) {
        font-family: "Spoqa Han Sans Neo";
        font-weight: 700;
        padding-top: 3vh;
        padding-left: 4.444vw;
        font-size: 6vw;
        color: #fff;
    }
    p:nth-child(2) {
        font-family: "Spoqa Han Sans Neo";
        font-weight: 700;
        padding-top: 1vh;
        padding-left: 4.444vw;
        font-size: 4vw;
        color: #fff;
    }
    img {
        position: relative;
        top: 15vh;
        left: 20vw;
    }
`;
export const RightBoxArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 44.4444vw;
    height: 41vh;
    padding-bottom: 10px;
    padding-right: 4.4444vw;
`;
export const ContentBox = styled.div<{ left: any }>`
    width: 100%;
    height: 19vh;
    border-radius: 14px;
    box-shadow: 4px 4px 4px #ccc;
    background-color: #fff;
    border: 1px solid #f3f3f3;

    padding: 2vh 4.444vw;
    p {
        font-family: "Spoqa Han Sans Neo";
        font-weight: 700;
        font-size: 4vw;
        margin-bottom: 8.6111vw;
    }
    img {
        position: relative;
        bottom: 0;
        left: ${props => props.left};
        transform: translateY(-0.6vh);
    }
`;
export const Banner = styled.div`
    margin: 2vh 4.444vw 0 4.4444vw;
    width: 90%;
    height: 18vh;
    box-shadow: 4px 4px 4px #ccc;
    background-color: #fff;
    background-image: url("https://paytalk.github.io/Paytalk_webview/img/Rectangle 2921.png");
    background-size: cover;
    border: 1px solid #f3f3f3;
    border-radius: 14px;
    p {
        color: #fff;
        font-family: "Spoqa Han Sans Neo";
        font-weight: 700;
        padding-top: 2vh;
        padding-left: 3.444vw;
        font-size: 4vw;
    }
`;

export const Flex = styled.div<{ left: any }>`
    display: flex;
    justify-content: space-between;
    padding: 0 4.4444vw;
    ${ContentBox} {
        width: 48%;
        margin-top: 20px;
        margin-bottom: 10px;
        height: 10vh;
        p {
            font-family: "Spoqa Han Sans Neo";
            font-weight: 700;
            padding-top: 2vh;
            padding-left: 3.444vw;
            font-size: 4vw;
            margin-bottom: 0;
        }
        img {
            position: relative;
            bottom: 0;
            left: ${props => props.left};
            transform: translateY(-5vw);
        }
    }
`;
export const ModalBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 3;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
`;
export const Modal = styled.div`
    position: absolute;
    width: 64.4444vw;
    height: 31.1111vw;
    background: #ffffff;
    border-radius: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
        text-align: center;
        color: #000000;
        line-height: 25.1111vw;
    }
`;

export const Btn = styled.div`
    position: absolute;
    width: 20vw;
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
