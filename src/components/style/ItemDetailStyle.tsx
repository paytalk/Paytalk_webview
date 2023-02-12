import styled from "styled-components";
import { HiChevronLeft } from "react-icons/hi";

export const BackIcon = styled(HiChevronLeft)`
    position: absolute;
    top: 1.4rem;
    margin-left: 4.444vw;
    font-size: 2.4rem;
`;

export const ItemDetailTop = styled.div`
    width: 100%;
    height: 5.6rem;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 5.6rem;
    /* Gray99 */

    color: #1a1a1a;
    text-align: center;
`;

export const ItemDetailWrap = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 4;
    background-color: #fff;
    &.dark {
        background-color: #000;
    }
`;
export const ItemDetailBg = styled.div<{ visi: any; display: any }>`
    position: absolute;
    bottom: 0;
    opacity: ${props => props.visi};
    overflow: hidden;
    width: 100%;
    height: 100vh;
    z-index: ${props => props.display};
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    transition: all 0.2s linear;
`;

export const ItemArea = styled.div`
    padding: 0 4.4444vw;
`;

export const ImgArea = styled.div`
    width: 91.1111vw;
    height: 91.1111vw;
    margin: 2vh 0 0 0;
    border: 1px solid #ccc;
    border-radius: 16px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.4) 100%
    );
    img {
        width: 91.1111vw;
        height: 91.1111vw;
    }
`;

export const ItemTitle = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5vw;
    padding: 2vh 4.4444vw 0 4.4444vw;
    word-break: keep-all;
`;
export const Cost = styled.div`
    margin-top: 1vh;
    text-align: right;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        color: #000;
        font-size: 5vw;
    }
    span {
        font-weight: 400;
        font-size: 3.8889vw;
        color: #666666;
    }
`;
export const BtnArea = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1vh;
    display: flex;
    justify-content: space-between;
`;

export const Btn = styled.div<{ bgColor: any; color: any }>`
    width: 44.4444vw;
    height: 4.8rem;
    margin-right: 2.2222vw;
    border-radius: 8px;
    background-color: ${props => props.bgColor};
    color: #fff;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 4.8rem;
        text-align: center;

        /* Main Blue */

        color: ${props => props.color};
    }
`;
export const SubScribeCycle = styled.div<{ up: any }>`
    position: absolute;
    bottom: ${props => props.up};
    transition: all 0.5s linear;
    z-index: 999;
    width: 100%;
    height: 50%;
    background-color: #fff;
    padding: 0 4.4444vw;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    border-radius: 16px 16px 0px 0px;
    ${Btn} {
        position: absolute;
        width: 91.1111vw;
        bottom: 1vh;
    }
`;
export const SubOption = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 5.5556vw;
    padding: 2vh 0;
`;

export const SubOptionUl = styled.ul``;

export const SubOptionLi = styled.li<{ check: any }>`
    width: 91.1111vw;
    height: 6vh;
    background-color: ${props =>
        props.check == "checked" ? "#5C63E5" : "#EEEEEE"};
    border-radius: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 4.4444vw;
    margin-bottom: 2vh;
    line-height: 6vh;
    padding-left: 4.4444vw;
    color: ${props => (props.check == "checked" ? "#FFF" : "#BCBCBC")};
`;

export const SubText = styled.p`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 3.8889vw;
    color: #bcbcbc;
`;
export const SubCost = styled.div`
    margin-top: 2.5vh;
    p {
        text-align: right;
        color: #181818;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 5.5556vw;
    }

    span {
        font-weight: 400;
        font-size: 3.8889vw;
        color: #666666;
    }
`;

export const MobileView = styled.div`
    width: 100%;
    height: 100vh;
`;

export const MobileTimeArea = styled.div`
    width: 100%;
    height: 2.8rem;
    img {
        object-fit: cover;
    }
`;

export const MobileHeader = styled.div`
    width: 100%;
    height: 5.6rem;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 5.6rem;
    color: #000;
    text-align: center;
`;
export const MobileBody = styled.div`
    width: 100%;
    height: 85vh;
    overflow: scroll;
`;

export const ThumbImgArea = styled.div`
    width: 100%;
    height: 24rem;
    img {
        width: 100%;
        height: 24rem;
        object-fit: cover;
    }
`;
export const ProductInfo = styled.div`
    padding: 1.6rem;
`;
export const ProductName = styled.div`
    height: 2.4rem;
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const ProductPrice = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    margin-top: 1.6rem;
`;
export const DisCountAmount = styled.span`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    color: #ff0000;
`;
export const FakePrice = styled.span`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    text-decoration-line: line-through;

    /* Gray40 */

    color: #bcbcbc;
    margin: 0 0.7rem;
`;
export const RealPrice = styled.span`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    /* identical to box height, or 100% */

    /* Gray99 */

    color: #1a1a1a;
`;
export const ProductNav = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 4.8rem;
    z-index: 999;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`;
export const ProductNavUl = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
export const ProductNavLi = styled.li`
    width: 50%;
    text-align: center;
    line-height: 4.6rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    color: #666666;
    &.checked {
        font-weight: 700;
        color: #5d5eee;
        border-bottom: 4px solid #5d5eee;
    }
`;

export const ProductDetail = styled.div`
    padding: 1.6rem;
    height: auto;
    white-space: pre;
    p {
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        padding-bottom: 1.6rem;
        margin-bottom: 1.6rem;
        color: #181818;
        border-bottom: 1px solid #bcbcbc;
    }
    p.desc {
        width: 90%;
        text-overflow: clip;
        word-wrap: break-word;
        white-space: pre-line;
        border: none;
        font-size: 1.4rem;
    }
    font-style: normal;
    font-weight: 900;
    font-size: 1.4rem;
    img {
        display: block;
        width: 100%;
        margin: 2rem 0;
        object-fit: contain;
    }
`;
