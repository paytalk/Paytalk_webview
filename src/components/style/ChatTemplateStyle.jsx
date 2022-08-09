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