import styled from "styled-components";
import { HiChevronLeft } from "react-icons/hi";

export const Top = styled.div`
    width: 100%;
    height: 6.25vh;
    display: flex;
    padding: 1.5vh 3vw;
    justify-content: space-between;
`
export const BackBtn = styled(HiChevronLeft)`
    font-size: 4vh;
    
    color: #7D7D7D;
`

export const ExchangeCompleteWrap = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 3;
    background-color: #fff;
`
export const Title = styled.div`
    margin: 1vh 0 8.8889vw 4.4444vw;
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 6.6667vw;
        line-height: 140%;
        color: #181818;
    }
`
export const ExchangeInfoBox = styled.div`
    width: 91.1111vw;
    height: 40.0000vw;
    margin: 0 auto;
    background: #F8F8F8;
    border-radius: 8px;
    padding: 0 4.444vw;
    div{
        display: flex;
        justify-content: space-between;
        margin: 1.5vh 0;
    }
    p{
        width: 44.4444vw;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
    }
    span{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 4.444vw;
        line-height: 140%;
        text-align: right;
        color: #000000;
    }
`
export const Btn = styled.div`
    position: absolute;
    bottom: 1vh;
    left: 50%;
    transform: translateX(-50%);
    width: 91.1111vw;
    height: 13.3333vw;
    background: #5C63E5;
    border-radius: 8px;
    p{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 13.3333vw;
    text-align: center;
    }
color: #FFFFFF;
`