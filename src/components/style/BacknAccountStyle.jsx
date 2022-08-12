import styled from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 3;
    background-color: #fff;
`
export const BankAccountUl = styled.div`
    margin-top: 2vh;
`
export const BankAccountLi = styled.div`
    width: 91.1111vw;
    height: 33.3333vw;
    background: #f8f8f8;
    border-radius: 8px;
    padding: 2vh 4.4444vw;
    margin: 0 auto 1vh auto;
`
export const BankAccountName = styled.div`
    display: inline-block;
    width: 64.4444vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 4.4444vw;
    color: #666666;
    margin-bottom: 1vh;
`
export const BasicAccount = styled.div`
    display: inline-block;
    width: 17.7778vw;
    height: 6.6667vw;
    background: #5C63E5;
    border-radius: 8px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.3333vw;
    line-height: 6.6667vw;
    text-align: center;
    color: #FFFFFF;
    transform: translateY(-1vh);
`
export const BankAccountNo = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 4.4444vw;
    color: #666666;
    margin-bottom: 2vh;
`
export const BankAccountAmount = styled.div`
    text-align: right;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 6.6667vw;
    color: #000000;
`
export const Btn = styled.div`
    position: absolute;
    bottom: 1vh;
    left: 50%;
    transform: translateX(-50%);
    width: 91.1111vw;
    height: 13.3333vw;
    background: #5C63E5;
    border-radius: 8px;
    p{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 13.3333vw;
    text-align: center;
    }
color: #FFFFFF;
`

export const SubScribeCycle = styled.div`
    position: absolute;
    bottom: ${(props) => (props.up)};
    transition: all 0.5s linear;
    z-index: 999;
    width: 100%;
    height: 64.3333vw;
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
    height: 13.3333vw;
    background-color: ${props => props.check == 'checked' ? '#5C63E5' : '#EEEEEE'};
    text-align: center;
    border-radius: 8px;
    padding-top: 1vh;
    margin-bottom: 1vh;
    p{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    margin: 1vh 0;
    padding-left: 4.4444vw;
    
    color: ${props => props.check == 'checked' ? '#FFF' : '#BCBCBC'};
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
