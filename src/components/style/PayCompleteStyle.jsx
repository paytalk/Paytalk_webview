import styled from "styled-components";



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
    z-index: 3;
    background-color: #fff;
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
    height: 10.0000vh;
    border-radius: 16px;
    background-color: #181818;
`
export const TextArea = styled.div`
    width: 64.4444vw;
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