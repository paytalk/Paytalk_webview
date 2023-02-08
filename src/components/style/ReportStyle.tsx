import styled from "styled-components";

export const Gubun = styled.div`
    width: 100%;
    height: 0.9804vh;
    background: #eeeeee;
`;

export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 3;
    background-color: #fff;
    overflow: scroll;
`;
export const Title = styled.div`
    margin: 2vh 4.4444vw;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 6.6667vw;
        line-height: 140%;
        color: #181818;
    }
    span {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 6.6667vw;
        line-height: 140%;
        color: #5c63e5;
    }
`;
export const GraphArea = styled.div`
    display: flex;
    margin: 0 4.4444vw 2vh 4.4444vw;
    justify-content: space-between;
`;
export const GraphBox = styled.div`
    width: 8.8889vw;
    height: 37.7778vw;
    background: #eeeeee;
    border-radius: 8px;
    transform: rotate(180deg);
`;
export const FillGraphBox = styled.div<{ height: any }>`
    position: relative;

    width: 8.8889vw;
    height: ${props => props.height};
    border-radius: 8px;
    background-color: #5c63e5;
`;
export const SubTitle = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    color: #181818;
    padding-left: 4.4444vw;
    margin-bottom: 2vh;
`;
export const SubscribeItem = styled.div`
    display: flex;
    margin: 0 4.4444vw 1vh 4.4444vw;
`;
export const Img = styled.div`
    width: 13.3333vw;
    height: 13.3333vw;
    border-radius: 8px;
    margin-right: 4.4444vw;
    img {
        width: 13.3333vw;
        height: 13.3333vw;
    }
`;
export const Name = styled.div`
    width: 43.4444vw;
    height: 13.3333vw;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    color: #181818;
    margin-right: 2.4444vw;
    padding-right: 5.4444vw;
    word-break: keep-all;
`;
export const PayDay = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 3.8889vw;
    color: #666666;
    text-align: right;
    margin-right: 4.4444vw;
`;
export const GraphImg = styled.div`
    width: 100%;
    padding: 0 4.4444vw;

    img {
        display: table;
        width: 80.5556vw;
        height: 80.5556vw;
        margin: 0 auto;
    }
    div {
        position: absolute;
        left: 50%;
        width: 40vw;
        height: 40vw;
        background-color: #fff;
        transform: translate(-50%, -60vw);
        border-radius: 50%;
    }
`;
export const Item = styled.div`
    display: flex;
    margin: 0 4.4444vw 1vh 4.4444vw;
    &:last-child {
        margin: 0 4.4444vw 5vh 4.4444vw;
    }
`;

export const Circle = styled.div<{ bgColor: any }>`
    width: 6.6667vw;
    height: 6.6667vw;
    margin-right: 4.4444vw;
    border-radius: 50%;
    background-color: ${props => props.bgColor};
`;
export const ItemName = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35.5556vw;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 4.4444vw;
    }
`;
