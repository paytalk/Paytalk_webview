import styled from "styled-components";
import {HiChevronLeft} from "react-icons/hi"
export const BackIcon = styled(HiChevronLeft)`
    position: absolute;
    top: 2.5vh;
    margin-left: 4.444vw;
    font-size: 7.0000vw;
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

export const Gubun = styled.div`
    width: 100%;
    height: 0.9804vh;
    background: #EEEEEE;
`
export const PayCompleteWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 6;
    background-color: #fff;
    top: 0;
`

export const CompleteTitle =styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 900;
    font-size: 6.6667vw;
    margin: 2vh 0 0 4.4444vw;
`

export const ItemArea = styled.div`
    display: flex;
    margin: 2vh 4.4444vw 2vh 4.4444vw;
    justify-content: space-between;
`
export const ImgArea = styled.div`
    width: 22.2222vw;
    height: 22.2222vw;
    border-radius: 16px;
    background-color: #181818;
    img{
        width: 22.2222vw;
        height: 22.2222vw;
    }
`
export const TextArea = styled.div`
    width: 64.4444vw;
    word-break: keep-all;
    p:nth-child(1){
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
    }
    p:nth-child(2){
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        margin-top: 2vh;
        text-align: right;
        font-size: 3.8889vw;
        color: #666666;
    }
    span{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 5vw;
        color: #000;
    }
`

export const PayMentHistory = styled.div`
    margin: 2vh 0 0 4.4444vw;
`
export const PayMentHistoryTitle = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    
`
export const PayMentHistoryDetail = styled.div`
    
    span{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 4.4444vw;
        color: #666666;
        
    }
    span::after{
        content: "";
        display: inline-block;
        width: 1px;
        height: 15px;
        background-color: rgba(0, 0, 0, 0.2);
        margin: 0 2.2222vw 4px 4.4444vw;
        vertical-align: bottom;
    }
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
        color: #181818;
        margin-bottom: 1vh;
        margin-top: 2vh;
    }
`

export const Btn =styled.div`
    position: absolute;
    width: 91.1111vw;
    bottom: 1vh;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    background-color: #5C63E5;
    color: #fff;
    height: 6.0000vh;
    margin-right: 2.2222vw;
    border-radius: 8px;
    border: 1px solid #ccc;

    line-height: 6vh;
    text-align: center;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5vw;
`