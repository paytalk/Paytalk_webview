import styled from "styled-components";
import { HiArrowDown } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { HiBan } from "react-icons/hi";

export const HistoryUl = styled.ul`
    
`
export const HistoryLi1 = styled.li`
    width: 91.1111vw;
    height: 22.2222vw;
    background-color: #ffffff;
    border-radius : 8px;
    border: 1px solid #EEEEEE;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 1vh;
    margin-top: 2vh;
    padding: 1vh 4.4444vw;
`
export const Img = styled.div`
    width: 11.1111vw;
    height: 11.1111vw;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: inline-block;
    margin-right: 4.4444vw;
`
export const Name = styled.div`
    display: inline-block;
    p{
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 3.8889vw;
        color: #181818;
    }
    span{
        font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 3.3333vw;
    color: #666666;
    margin-left: 1.2222vw;
    }
`
export const HistoryLi2 = styled.li`
    margin: 0 auto;
    width: 91.1111vw;
    height: 42.2222vw;
    background-color: #ffffff;
    border-radius : 8px;
    border: 1px solid #EEEEEE;
    overflow: hidden;
    margin-bottom: 1vh;
    padding: 1vh 4.4444vw;
    display: flex;
    justify-content: space-between;
`
export const cost = styled.div`
    text-align: right;
    transform: translateY(-1.5vh);
    p{
        text-align: right;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 3.8889vw;
        color: #BCBCBC;
    }
    span{
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 3.8889vw;
        color: #5D5FEE;
    }
`
export const DownIcon = styled(HiArrowDown)`
    font-size: 3.8889vw;
    transform: translateX(3.5vw);
    margin: 2vh 0;
`
export const StatusArea =styled.div`
    display: flex;
    margin-top: 3vh;
    justify-content: space-between;
    margin-bottom: 4vh;
`
export const Status = styled.div`
    span{
        font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;
margin-top: 1vh;
color: #BCBCBC;
    }
`
export const XIcon = styled(HiX)`
    display: block;
    width: 6.6667vw;
    height: 6.6667vw;
    background-color: ${(props)=>(props.bgColor)};
    border-radius: 50%;
    color: #fff;
`
export const CheckIcon = styled(HiCheck)`
    display: block;
    width: 6.6667vw;
    height: 6.6667vw;
    background-color: ${(props)=>(props.bgColor)};
    border-radius: 50%;
    color: #fff;
`
export const Ban = styled(HiBan)`
    display: block;
    width: 6.6667vw;
    height: 6.6667vw;
    background-color: ${(props)=>(props.bgColor)};
    border-radius: 50%;
    color: #fff;
`
export const Item =styled.div`
    
`
export const ImgArea = styled.div`
    
`
export const InfoArea = styled.div`

`