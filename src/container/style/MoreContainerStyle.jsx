import styled from "styled-components";
import {HiChevronRight} from "react-icons/hi"

export const Gubun = styled.div`
    width: 100%;
    height: 1vh;
    background: #EEEEEE;
    margin: 2vh 0;
`

export const MoreContainerWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 0;
    overflow: hidden;
    background-color: #fff;
`

export const MoreContainerArea = styled.div`
    width: 100%;
    height: 91.5vh;
    overflow: scroll;
    max-width: 480px;
    background-color: #fff;
`
export const ItemDetailTop = styled.div`
    width: 100%;
    height: 8.25vh;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    line-height: 8.25vh;
    text-align: center;
    border-bottom: 1px solid #EEEEEE;;
`
export const UserProfileArea = styled.div`
    display: flex;
    margin-top: 1vh;
    margin-left: 4.4444vw;
    margin-bottom: 2vh;
    margin-right: 4.4444vw;
    justify-content: space-between;
`
export const UserProfile = styled.div`
    width: 17.7778vw;
    height: 17.7778vw;
    border-radius: 24px;
    background-color: #ccc;
    margin-right: 4.4444vw;
    img{
        width: 17.7778vw;
    }
`
export const UserText = styled.div`
    margin-top: 1.5vh;
    width: 58.4444vw;
    h3{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        margin-bottom: 1vh;
    }
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #666666;
    }
`
export const Edit = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #BCBCBC;
    margin-top: 1.5vh;
    text-align: right;
`

export const Bpay = styled.div`
    margin: 0 auto;
    width: 91.1111vw;
    height: 26.6667vw;
    background-color: #5C63E5;
    border-radius: 9px;
    padding: 4.4444vw;
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5vw;
    color: #FFFFFF;
`
export const Right = styled(HiChevronRight)`
font-size: ${(props)=>(props.size)};
color: ${(props)=>(props.color)};
`
export const Balance = styled.div`
    text-align: right;
    span{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 3.8889vw;
        color: #FFFFFF;
        margin-right: 4.8888vw;
    }
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 5vw;
        color: #FFFFFF;
        margin: 2vh 0;
    }
`
export const ButtonArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1vh 4.4444vw 0 4.4444vw;
`
export const Btn = styled.div`
    width: 44.4444vw;
    height: 11.1111vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5vw;
    line-height: 11.1111vw;
    text-align: center;
    color: #fff;
    background-color: #666666;
    border-radius: 8px;
`
export const MoreTitle = styled.div`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
    color: #000;
    margin-left: 4.4444vw;
`
export const MoreUl = styled.ul`
    
`
export const MoreLi = styled.li`
    display: flex;
    justify-content: space-between;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5.0000vw;
    color: #181818;
    border-bottom: 1px solid #EEEEEE;
    padding: 1.5vh 4.4444vw 1.5vh 4.4444vw;
`