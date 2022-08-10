import styled from "styled-components";


export const StoreRecommendBox = styled.div`
    height: 63.6667vw;
    padding: 1.9608vh 0 0 4.4444vw;
    width: 100%;
    
    p{
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
    }
`
export const StoreRecommendItemBox = styled.div`
    width: 100vw;
    overflow: scroll;
`
export const StoreRecommendUl = styled.ul`
    
    height: 56.6667vw;
    display: inline-flex;
    justify-content: space-between;
    
    
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
    height: 28.8889vw;
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