import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";

export const ChatTemplateWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 2;
    background-color: #fff;
`
export const ChatTemplateArea = styled.div`
    width: 100%;
    height: 100%;
`
export const Top = styled.div`
    width: 100%;
    height: 6.25vh;
    display: flex;
    padding: 1.5vh 3vw;
    justify-content: space-between;
`
export const BackBtn = styled(BiArrowBack)`
    font-size: 4vh;
    
    color: #ccc;
`
export const MenuBtn = styled(BiMenu)`
    font-size: 4vh;
    color: #ccc;
`
export const Name = styled.div`
    font-size: 3vh;
`

export const ChatArea = styled.div`
    width: 100%;
    height: 87.5vh;
    background-color: #cfd8dc;
`
export const ChatInputArea = styled.div`
    width: 100%;
    height: 6.25vh;
    background-color: #ccc;
`

export const ChatSample = styled.div`
    text-align: ${(props) => props.text};
    padding-top: 2vh;
    padding-left: 3.3333vw;
    padding-right: 3.3333vw;

`
export const ChatName = styled.div`
    font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 3.333vw;
        line-height: 15px;
        color: #181818;
        transform: translate(10.8889vw,-3.5vh);
`
export const ChatProfile = styled.div`
    width: 8.8889vw;
    height: 4.0000vh;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #F8F8F8;
    
`
export const Chat = styled.div`
    width: 56.6667vw;
    height: 14.0000vh;
    background-color: #F8F8F8;
    border-radius: 16px;
    transform: translate(8.8889vw,-2.3vh);
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
    line-height: 140%;
/* or 20px */
    padding-top: 1vh;
    padding-left: 2.2222vw;

    color: #181818;
`