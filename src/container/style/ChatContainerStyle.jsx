import styled from "styled-components";


export const ChatContainerWrap = styled.div`
    width: 100%;
    height: 100vh;
`

export const ChatContainerArea = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 480px;
    background-color: #fff;
`
export const ChatContainerTitle = styled.div`
    padding-left: 4.444vw;
    height: 7vh;
    border-bottom: 1px solid #ccc;
    h1{
        font-size: 7vw;
        line-height: 7vh;
    }
`
export const ChatListArea = styled.div`
    width: 100%;
    height: 86.75vh;
    overflow: scroll;
    
`

export const ChatListUl = styled.ul`
    width: 100%;
    height: 100%;
`

export const ChatListLi = styled.li`
    display: flex;
    width: 100%;
    height: 19.4444vw;
    border-bottom: 1px solid #EEE;
    padding: 1.5vh 4.4444vw;
`

export const ChatProfile = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border-radius: 17px;
`
export const ChatInfo = styled.div`
    
    padding-left: 5vw;
`
export const ChatName = styled.p`
    padding-top: 0.8vh; 
    display: inline-block;
    font-size: 4vw;
`
export const ChatMem = styled.span`
    display: inline-block;
    font-size: 3.5vw;
    padding-top: 0vh; 
    padding-left: 2vw;
    color: #ccc;
    transform: translateY(-1vw);
`
export const ChatPrev =styled.p`
    display: block;
    font-size: 2.5vw;
    padding: 0.5vh 0;
    color: #ccc;
`