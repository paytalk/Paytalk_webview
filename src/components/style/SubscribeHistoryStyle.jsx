import styled from "styled-components"

export const Gubun = styled.div`
    width: 100%;
    height: 1vh;
    background: #EEEEEE;
    margin: 2vh 0;
`

export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 3;
    background-color: #fff;
`
export const Top = styled.div`
    display: flex;
    margin: 2vh 4.4444vw;
    justify-content: space-between;
`
export const The = styled.div`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    display: flex;
    align-items: center;
    text-align: right;
    color: #BCBCBC;

`
export const Title = styled.div`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #181818;
`
export const SubscribedItemBox = styled.div`
    width: 95.6666vw;
    overflow: scroll;

`
export const SubscribedUl = styled.ul`
    display: inline-flex;
    justify-content: space-between;
    overflow: scroll;
    padding: 0 4.4444vw;
`
export const SubscribedLi = styled.li`
    margin-right: 4.4444vw;
    &:last-child{
        margin-right: 0;
    }
`
export const SubscribedImg = styled.div`
    width: 28.8889vw;
    height: 28.8889vw;
    border: 1px solid #ccc;
    background-color: #ccc;
    border-radius: 16px;
    img{
        width: 28.8889vw;
        height: 28.8889vw;
    }
`
export const SubscribedName = styled.div`
    width: 28.8889vw;
    height: 11.1111vw;
    word-break: keep-all;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    color: #181818;
    margin: 1vh 0;
`
export const SubscribedPrice = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    color: #181818;
    text-align: right;
`