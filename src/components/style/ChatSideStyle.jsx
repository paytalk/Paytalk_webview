import styled from "styled-components";

export const ChatSideWrap = styled.div`
    position: fixed;
    width: 80%;
    height: 87.5vh;
    background-color: #fff;
    z-index: 999;
    top: 6.1vh;
    right: ${(props)=>(props.position)};
    transition: all 0.5s linear;
`
export const ChatSideArea = styled.div`
    
`