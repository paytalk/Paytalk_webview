import styled from "styled-components";

export const ContainerWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    
`

export const ContainerArea = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 480px;
    background-color: #fff;
    margin: 0 auto;
`
export const MainTitle = styled.div`
    padding: 3.5vh 4.444vw 3.5vh 4.4444vw;
    
    p{
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 700;
        font-size: 6vw;
    }
`

export const BoxArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 4.4444vw;
`
export const LeftBoxArea = styled.div`
    width: 54%;
    height: 39vh;
    background-color: #5D5FEE;
    
    box-shadow: 4px 4px 4px #ccc;
    border-radius: 14px;
    p:nth-child(1){
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 700;
        padding-top: 3vh;
        padding-left: 4.444vw;
        font-size: 6vw;
        color: #fff;
    }
    p:nth-child(2){
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 700;
        padding-top: 1vh;
        padding-left: 4.444vw;
        font-size: 4vw;
        color: #fff;
    }
    img{
        position: relative;
        width: 20%;
        top: 23vh;
        left: 50%;
        background-color: rgba(255,255,255,0.5);
        border-radius: 50%;
    }
`
export const RightBoxArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 42%;
    height: 40vh;
    padding-bottom:10px;
    padding-right: 4.4444vw;
`
export const ContentBox = styled.div`
    width: 100%;
    height: 19vh;
    border-radius: 14px;
    box-shadow: 4px 4px 4px #ccc;
    background-color: #fff;
    border: 1px solid #f3f3f3;
    p{
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 700;
        padding-top: 2vh;
        padding-left: 3.444vw;
        font-size: 4vw;
    }

`
export const Banner = styled.div`
    margin: 2vh 4.444vw 0 4.4444vw;
    width: 90%;
    height: 18vh;
    box-shadow: 4px 4px 4px #ccc;
    background-color: #fff;
    border: 1px solid #f3f3f3;
    border-radius: 14px;
    p{
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 700;
        padding-top: 2vh;
        padding-left: 3.444vw;
        font-size: 4vw;
    }
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 4.4444vw;
    ${ContentBox}{
        width: 48%;
        margin-top: 20px;
        margin-bottom: 10px;
        height: 10vh;
        p{
            font-family: 'Spoqa Han Sans Neo';
            font-weight: 700;
            padding-top: 2vh;
            padding-left: 3.444vw;
            font-size: 4vw;
        }
    }
`