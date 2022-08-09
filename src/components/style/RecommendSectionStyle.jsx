import styled from "styled-components";


export const StoreRecommendBox = styled.div`
    height: 29.4118vh;
    padding: 1.9608vh 0 0 4.4444vw;
    p{
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
    }
`
export const StoreRecommendUl = styled.ul`
    height: 23.5294vh;
    display: flex;
    justify-content: space-between;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`
export const StoreRecommendLi = styled.li`
    width: 28.8889vw;
    height: 100%;
    padding-top: 1.9608vh;
    margin-right: 2.2222vw;
    
    &:last-child{
        margin-right: 4.4444vw;
    }
`
export const StoreRecommendImg = styled.div`
    width: 28.8889vw;
    height: 12.7451vh;
    border: 1px solid #ccc;
    border-radius: 16px;
`
export const StoreRecommendTitle = styled.h2`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    margin-top: 0.9804vh;
    word-break: keep-all;
`
export const StoreRecommendCost = styled.h3`
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 3.8889vw;
        margin-top: 0.9804vh;
        text-align: right;
    span{
        font-weight: 400;
        font-size: 3.3333vw;
        color: #666666;
    }
`