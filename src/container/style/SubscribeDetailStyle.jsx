import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";

export const SubscribeWrap = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
`
export const SubscribeArea = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 480px;
    margin: 0 auto;
    padding-top: 2vh;
    h1{
    padding-left: 4.444vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;



color: #181818;
    }
`
export const Button =styled(BiChevronLeft)`
    margin-left: 2.444vw;
    margin-bottom: 1vh;
    font-size: 9vw;
`

export const FilterArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2vh 4.4444vw 2vh 4.4444vw;
`

export const Filter = styled.div`
    width: 33.3333vw;
    height: 11.1111vw;
    background: #FFFFFF;
    border: 1px solid #BCBCBC;
    border-radius: 8px;
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 3.8889vw;
        text-align: center;
        line-height: 11.1111vw;
        color: #181818;
    }
`
export const Total = styled.div`
    width: 53.3333vw;
    height: 11.1111vw;
    background: #F8F8F8;
    border-radius: 8px;
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
        line-height: 11.1111vw;
        text-align: center;
        color: #000000;
    }
`

export const SubscribeUl = styled.ul`
    background-color: #f8f8f8;
    border-top: 1px solid #eeeeee;
    height: 80vh;
    overflow: scroll;
`
export const SubscribeLi = styled.li`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    padding: 2vh 4.4444vw 0 4.4444vw;
`
export const ImgArea = styled.div`
    width: 22.2222vw;
    height: 22.2222vw;
    background-color: #ccc;
    border-radius: 16px;
`
export const InfoArea = styled.div`
    margin-left: 4.4444vw;
`
export const Title = styled.div`
    width: 64.4444vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #181818;
`
export const Chips = styled.div`
    display: flex;
    justify-content: right;
    margin-top: 1.5000vh;
`
export const Chip = styled.div`
    width: auto;
    height: 6.6667vw;
    background: #EEEEEE;
    border-radius: 8px;
    padding: 0.5vh 2.2222vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.3333vw;
    color: #666666;
    margin-right: 4.4444vw;
    &:last-child{
        margin-right: 0;
    }
`
export const cost = styled.div`
    text-align: right;
    margin-top: 1vh;
    margin-bottom: 1vh;
    span{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 3.8889vw;
        color: #666666;
        margin-right: 4.4444vw;
    }
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 5.0000vw;
        color: #181818;
    }
`
