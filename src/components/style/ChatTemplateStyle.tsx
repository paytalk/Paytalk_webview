import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";

export const ChatTemplateWrap = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    overflow: hidden;
    background-color: #b6c8d7;
`;
export const ChatTemplateArea = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const Top = styled.div`
    width: 100%;
    height: 6.25vh;
    display: flex;
    padding: 1.5vh 3vw;
    justify-content: space-between;
`;
export const BackBtn = styled(BiArrowBack)`
    font-size: 4vh;

    color: #7d7d7d;
`;
export const MenuBtn = styled(BiMenu)`
    font-size: 4vh;
    color: #7d7d7d;
`;
export const Name = styled.div`
    font-size: 3vh;
    color: #7d7d7d;
`;

export const History = styled.div<{ height: any; overflow: any; bgColor: any }>`
    width: 100%;
    height: ${props => props.height};
    overflow: ${props => props.overflow};
    background-color: ${props => props.bgColor};
    position: absolute;
    z-index: 888;
    p {
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 700;
        font-size: 3.8889vw;
        color: #666666;
        text-align: center;
        line-height: 5vh;
    }
    transition: all 0.5s linear;
`;
export const HistoryDetail = styled.div`
    width: 91.1111vw;
    height: 4vh;
    background-color: #bcbcbc;
    border-radius: 16px;
    margin: 1vh auto 0 auto;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    color: #ffffff;
    text-align: center;
    line-height: 4vh;
`;
export const HistoryItemUl = styled.ul`
    margin-top: 2vh;
`;
export const HistoryItemLi = styled.li<{ height: any }>`
    margin: 0 auto 1vh auto;
    width: 91.1111vw;
    height: ${props => props.height};
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #eeeeee;
    overflow: hidden;
`;
export const ItemTitle = styled.div`
    display: flex;
    margin: 0 4.4444vw;
    justify-content: space-between;
    p {
        font-family: "Spoqa Han Sans Neo";
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
        color: #181818;
    }
`;
export const ItemThe = styled(HiChevronDown)`
    font-size: 8.4444vw;
    margin-top: 0.3vh;
    color: #666666;
`;
export const cost = styled.div`
    margin: 0 4.4444vw;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #666666;
`;
export const ItemDetail = styled.div`
    border-top: 1px solid #ccc;
    margin-top: 2.2vh;
    padding-left: 4.4444vw;
    p {
        margin-top: 1.8vh;
        line-height: 3.0556vw;
        margin-bottom: 1vh;
        font-size: 3.0556vw;
        text-align: left;
        font-weight: 700;
    }
    span {
        display: inline-block;
        width: 13.3333vw;
        font-weight: 400;
        margin-right: 2.2222vw;
    }
`;

export const ChatArea = styled.div`
    width: 100%;
    height: 82.5vh;
    margin-top: 5vh;
    background-color: #cadeef;
`;
export const ChatInputArea = styled.div`
    display: flex;
    width: 100%;
    height: 6.25vh;
    background-color: #ccc;
`;
export const ChatInputBox = styled.input`
    padding-left: 4.444vw;
    width: 87%;
    outline: none;
    border: none;
    height: 6.25vh;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
`;
export const ChatSend = styled.div`
    width: 13%;
    height: 100%;
    background-color: #5c63e5;
    img {
        width: 50%;
        margin: 3.8889vw;
    }
`;

export const ChatSample = styled.div<{ text: any }>`
    text-align: ${props => props.text};
    padding-top: 2vh;
    padding-left: 3.3333vw;
    padding-right: 3.3333vw;
`;
export const ChatName = styled.div`
    position: absolute;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 3.333vw;
    line-height: 15px;
    color: #181818;
    transform: translate(10.8889vw, -3.5vh);
`;
export const ChatProfile = styled.div`
    width: 8.8889vw;
    height: 8.8889vw;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f8f8f8;
    img {
        width: 8.8889vw;
        height: 8.8889vw;
    }
`;
export const Chat = styled.div`
    position: absolute;
    width: 56.6667vw;
    height: auto;
    background-color: #f8f8f8;
    border-radius: 16px;
    transform: translate(8.8889vw, -0.7vh);
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
    line-height: 140%;
    padding: 1vh 2.2222vw;
    word-break: keep-all;

    color: #181818;
`;
