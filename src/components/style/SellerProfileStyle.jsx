import styled from 'styled-components'
import {HiArrowNarrowLeft} from 'react-icons/hi'

export const Gubun = styled.div`
    width: 100%;
    height: 1vh;
    background: #EEEEEE;
`

export const SellerProfileWrap = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    z-index: 999;
    bottom: ${(props)=>(props.position)};
    transition: all 0.5s linear;
`

export const BackIcon = styled(HiArrowNarrowLeft)`
    color: #666666;
    font-size: 8.4444vw;
    margin: 2.6250vh 0 0 5.8333vw;
`
export const SellerProfileTop = styled.div`
    display: flex;
    margin: 2vh 2.2222vw 2vh 4.4444vw;
    height: 16.6667vw;
`
export const SellerProfile = styled.div`
    width: 15.5556vw;
    height: 15.5556vw;
    border-radius: 16px;
    
    img{
        width: 15.5556vw;
        object-fit: fill;
    }
`
export const SellerName = styled.div`
    margin-left: 4.4444vw;
    margin-right: 18vw;
    padding-top: 1vh;
    p:nth-child(1){
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #181818;
    }
    p:nth-child(2){
        margin-top: 1vh;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        word-spacing: 2vw;
        color: #666666;
    }
`

export const Btn = styled.div`
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    background-color: #5C63E5;
    border-radius: 8px;
    margin-top: 1vh;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    line-height: 8.8889vw;
    text-align: center;
    margin-right: 2.222vw;
    color: #FFFFFF;
`

export const SellerTab = styled.div`
    
`
export const SellerTabUl = styled.ul`
    display: flex;
    border-top: 1px solid #EEEEEE ;
    border-bottom: 1px solid #EEEEEE ;
`
export const SellerTabLi = styled.li`
    padding: 1vh 0;
    width: 25.0000vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: ${props=> props.pin == 'pin' ? '700' : '400'};;
    font-size: 14px;
    line-height: 17px;
    color: ${props=> props.pin == 'pin' ? '#000' : '#666666'};
    text-align: center;
    border-bottom: ${props=> props.pin == 'pin' ? '2px solid #000' : 'none'};
`
export const ContentBox = styled.div`
    width: 100%;
    height: 75vh;
    background: #fff;
    overflow: scroll;
    
`
export const ContentBoxUl = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2vh 4.4444vw 0 4.4444vw;
`

export const ContentBoxLi = styled.li`
    width: 44.4444vw;
`

export const ContentImg = styled.div`
    width: 44.4444vw;
    height: 44.4444vw;
    border: 1px solid #ccc;
    border-radius: 16px;
    img{
        width: 44.4444vw;
        height: 44.4444vw;
    }
`

export const ContentTitle = styled.div`
    height: 11.1111vw;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    color: #181818;
    margin: 1vh 0;
`
export const ContentCost = styled.div`
    text-align: right;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 4.0000vw;
    color: #181818;
    margin-bottom: 2vh;
    span{
        margin-right: 1vw;
        font-weight: 400;
        font-size: 3.8889vw;
        color: #666666;
    }
`
export const NoticeLi = styled.li`
    width: 91.1111vw;
    height: 15.5556vw;
    background: #F8F8F8;
    border-radius: 8px;
    margin-bottom: 1vh;
    display: flex;
    justify-content: space-between;
    padding: 0 4.4444vw;
    h3{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 3.8889vw;
        line-height: 15.5556vw;
        color: #181818;
    }
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 3.3333vw;
        line-height: 15.5556vw;
        color: #666666;
    }
`
export const InfoBox = styled.div`
    
`
export const InfoTitle = styled.div`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
    color: #666666;
    margin: 2vh 4.4444vw 2vh 4.4444vw;
`
export const BasicInfo = styled.div`
    margin: 2vh 4.4444vw 1vh 4.4444vw;
    span{
        width: 13.3333vw;
        margin-right: 2.2222vw;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        display: inline-flex;
        color: #BCBCBC;
    }
    p{
        margin-bottom: 1vh;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        color: #666666;
    }
`
export const SnsLink = styled.div`
    margin-bottom: 2vh;
    margin-left: 4.4444vw;
`
export const Sns = styled.div`
    
`
export const SnsImg = styled.div`
    display: inline-block;
    width: 5.5556vw;
    height: 5.5556vw;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 2.7778vw;
    margin-bottom: 1vh;
`
export const SnsText = styled.div`
    margin-bottom: 1vh;
    display: inline-block;
    transform: translateY(-0.5vh);
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 3.0556vw;
    color: #666666;
`
export const CompanyInfo = styled.div`
    margin: 2vh 4.4444vw 1vh 4.4444vw;
    span{
        width: 13.3333vw;
        margin-right: 2.2222vw;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        display: inline-flex;
        color: #BCBCBC;
        word-break: keep-all;
    }
    p{
        margin-bottom: 1vh;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        color: #666666;
    }
`
export const ReviewLi = styled.li`
    
`
export const ReviewImg = styled.div`
    width: 91.1111vw;
    height: 53.3333vw;
    border: 1px solid #ccc;
    background-color: #ccc;
    border-radius: 8px;
    img{
        width: 91.1111vw;
        height: 53.3333vw;
    }
`

export const ReviewTitle = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    line-height: 19px;
    color: #181818;
    margin: 2.2222vw 0;
`

export const ReviewText = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
    line-height: 17px;
    color: #666666;
    padding-bottom: 2.4444vw;
    margin-bottom: 2.2222vw;
    border-bottom: 1px solid #EEEEEE;
`

export const ReviewerNick = styled.div`
    margin-top: 2.2222vw;
    p{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 3.3333vw;
    display: flex;
    align-items: center;

    color: #666666;
    }
    
    span{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 3.3333vw;
        color: #666666;
    }
    span::after{
        content: "";
        display: inline-block;
        width: 1px;
        height: 10px;
        background-color: rgba(0, 0, 0, 0.2);
        margin: 0 2.4444vw 4px 2.4444vw;
        vertical-align: bottom;
    }
`