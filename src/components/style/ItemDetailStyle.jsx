import styled from "styled-components";


export const ItemDetailWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 3;
    background-color: #fff;
    &.dark{
        background-color: #000;
    }
`
export const ItemDetailBg = styled.div`
    position: absolute;
    bottom: 0;
    opacity: ${(props)=>(props.visi)};
    overflow: hidden;
    width: 100%;
    height: 100vh;
    z-index: ${(props)=>(props.display)};
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(3px);
    transition: all 0.2s linear;
`

export const ItemArea = styled.div`
    padding: 0 4.4444vw;
`

export const ImgArea = styled.div`
    width: 91.1111vw;
    height: 41.0000vh;
    margin: 2vh 0 0 0;
    border: 1px solid #ccc;
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
`



export const ItemTitle = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5.0000vw;
    padding: 2.0000vh 4.4444vw 0 0;
`
export const Cost = styled.div`
        margin-top: 1vh;
        text-align: right;
        p{
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 700;
            color: #000;
            font-size: 5.0000vw;
        }
    span{
        
        font-weight: 400;
        font-size: 3.8889vw;
        color: #666666;
    }
`
export const BtnArea = styled.div`
    position: absolute;
    bottom: 1vh;
    display: flex;
    justify-content: space-between;
`

export const Btn = styled.div`
    width: 44.4444vw;
    height: 6.0000vh;
    margin-right: 2.2222vw;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: ${(props)=>(props.bgColor)};
    color: #fff;
    p{
        line-height: 6vh;
        text-align: center;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 5vw;
    }
`
export const SubScribeCycle = styled.div`
    position: absolute;
    bottom: ${(props) => (props.up)};
    transition: all 0.5s linear;
    z-index: 999;
    width: 100%;
    height: 50%;
    background-color: #fff;
    padding: 0 4.4444vw;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
border-radius: 16px 16px 0px 0px;
    ${Btn}{
        position: absolute;
        width: 91.1111vw;
        bottom: 1vh;
    }
`
export const SubOption = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    padding: 2vh 0;
`

export const SubOptionUl = styled.ul`

`

export const SubOptionLi = styled.li`
    width: 91.1111vw;
    height: 6.0000vh;
    background-color: ${props => props.check == 'checked' ? '#5C63E5' : '#EEEEEE'};
    border-radius: 8px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    margin-bottom: 2vh;
    line-height: 6vh;
    padding-left: 4.4444vw;
    color: ${props => props.check == 'checked' ? '#FFF' : '#BCBCBC'};
`

export const SubText = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
    color: #BCBCBC;
`
export const SubCost = styled.div`
    margin-top: 2.5vh;
    p{
        text-align: right;
        color: #181818;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 5.5556vw;
    }
    
    span{
        
        font-weight: 400;
        font-size: 3.8889vw;
        color: #666666;

    }
`