import styled from "styled-components";

export const Gubun = styled.div`
    width: 100%;
    height: 0.9804vh;
    background: #EEEEEE;
`

export const Wrap = styled.div`
width: 100%;
height: 100vh;
position: absolute;
z-index: 3;
background-color: #fff;
overflow: scroll;
`
export const Title = styled.div`
    margin: 2vh 4.4444vw;
    p{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 6.6667vw;
    line-height: 140%;
    color: #181818;
    }
    span{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 6.6667vw;
    line-height: 140%;
    color:#5C63E5;
    }
`
export const GraphArea = styled.div`
    display: flex;
    margin: 0 4.4444vw 2vh 4.4444vw;
    justify-content: space-between;
`
export const GraphBox = styled.div`
    width: 8.8889vw;
    height: 37.7778vw;
    background: #EEEEEE;
    border-radius: 8px;
    transform: rotate(180deg);
`
export const FillGraphBox = styled.div`
    position: relative;
    
    width: 8.8889vw;
    height: ${(props)=>(props.height)};
    border-radius: 8px;
    background-color: #5C63E5;
`
export const SubTitle = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #181818;
    padding-left: 4.4444vw;
    margin-bottom: 2vh;
`
export const SubscribeItem = styled.div`
    display: flex;
    margin: 0 4.4444vw;
`
export const Img = styled.div`
    width: 13.3333vw;
    height: 13.3333vw;
    margin-right: 4.4444vw;
`
export const Name = styled.div`
    width: 42.4444vw;
    height: 13.3333vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    color: #181818;
    margin-right: 2.4444vw;
    padding-right: 5.4444vw;
    word-break: keep-all;
`
export const PayDay = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    color: #666666;
    text-align: right;
    margin-right: 4.4444vw;
`