import styled from 'styled-components'
import {HiArrowNarrowLeft} from 'react-icons/hi'

export const SellerProfileWrap = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    z-index: 999;
    bottom: ${(props)=>(props.position)};
    transition: all 0.5s linear;
`

export const BackIcon = styled(HiArrowNarrowLeft)`
    color: #666666;
    font-size: 8.4444vw;
    margin: 2.6250vh 0 0 5.8333vw;
`
export const SellerProfileTop = styled.div`
    display: flex;
    margin: 2vh 2.2222vw 2vh 4.4444vw;
`
export const SellerProfile = styled.div`
    width: 15.5556vw;
    height: 7.0000vh;
    border-radius: 16px;
    background:#D9D9D9;
`
export const SellerName = styled.div`
    margin-left: 4.4444vw;
    margin-right: 18vw;
    padding-top: 1vh;
    p:nth-child(1){
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #181818;
    }
    p:nth-child(2){
        margin-top: 1vh;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        word-spacing: 2vw;
        color: #666666;
    }
`

export const Btn = styled.div`
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    background-color: #5C63E5;
    border-radius: 8px;
    margin-top: 1vh;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    line-height: 4vh;
    text-align: center;
    margin-right: 2.222vw;
    color: #FFFFFF;
`

export const SellerTab = styled.div`
    
`
export const SellerTabUl = styled.ul`
    display: flex;
    
    border-top: 1px solid #EEEEEE ;
    border-bottom: 1px solid #EEEEEE ;
`
export const SellerTabLi = styled.li`
    padding: 1vh 0;
    width: 25.0000vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #666666;
    text-align: center;
    &:hover, &:checked{
        color: #000;
        border-bottom: 2px solid #000;
    }
`