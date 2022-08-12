import React from "react";
import { useNavigate } from "react-router-dom";
import ItemTop from "../common/ItemTop";
import * as m from "./style/MoreContainerStyle";

const MoreContainer = () => {
    const nav = useNavigate();
    return(
        <m.MoreContainerWrap>
            <m.MoreContainerArea>
            <m.ItemDetailTop>더 보기</m.ItemDetailTop>
                <m.UserProfileArea>
                    <m.UserProfile></m.UserProfile>
                    <m.UserText>
                        <h3>홍길동</h3>
                        <p>ygh522@gmail.com</p>
                    </m.UserText>
                    <m.Edit>편집</m.Edit>
                </m.UserProfileArea>
                <m.Bpay>
                    <m.Top onClick={()=>nav('/BPoint')}>B Pay<m.Right color="#fff" size='5vw'></m.Right></m.Top>
                    <m.Balance><p><span>잔액</span>2,000,000원</p></m.Balance>
                </m.Bpay>
                <m.ButtonArea>
                        <m.Btn onClick={()=>nav('/exchange')}>환전</m.Btn>
                        <m.Btn onClick={()=>nav('/remittance')}>송금</m.Btn>
                    </m.ButtonArea>
                <m.Gubun></m.Gubun>
                <m.MoreTitle>결제관리</m.MoreTitle>
                <m.MoreUl>
                    <m.MoreLi onClick={()=>nav('/credit')}>신용 및 체크카드<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                    <m.MoreLi onClick={()=>nav('/bankaccount')}>은행 계좌<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                </m.MoreUl>
                <m.Gubun></m.Gubun>
                <m.MoreTitle>상품관리</m.MoreTitle>
                <m.MoreUl>
                    <m.MoreLi onClick={()=>nav('/like')}>찜<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                    <m.MoreLi onClick={()=>nav('/subscribe')}>내 구독<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                    <m.MoreLi onClick={()=>nav('/subscribehistory')}>구독했던 상품<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                </m.MoreUl>
                <m.Gubun></m.Gubun>
                <m.MoreTitle>서비스</m.MoreTitle>
                <m.MoreUl>
                    <m.MoreLi>알림<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                    <m.MoreLi>개인정보 처리방침<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                    <m.MoreLi>서비스 이용 약관<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                    <m.MoreLi>버전정보<m.Right color="#BCBCBC" size='5vw'></m.Right></m.MoreLi>
                    <m.MoreLi>로그아웃</m.MoreLi>
                </m.MoreUl>
            </m.MoreContainerArea>
        </m.MoreContainerWrap>
    )
}

export default MoreContainer;