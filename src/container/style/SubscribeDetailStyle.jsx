import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";

export const SubscribeWrap = styled.div`
    width: 100%;
    height: 100vh;
`
export const SubscribeArea = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    padding-top: 2vh;
    h1{
    padding-left: 4.444vw;
    font-size: 4.5vw;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    }
`
export const Button =styled(BiChevronLeft)`
    margin-left: 2.444vw;
    margin-bottom: 1vh;
    font-size: 9vw;
`

export const SubscribeUl = styled.ul`
    
`
export const SubscribeLi = styled.li`
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid #ccc;
    p{
        line-height: 10vh;
        font-size: 20px;
    }
`

