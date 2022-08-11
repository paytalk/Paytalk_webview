import React from "react";
import ItemTop from "../common/ItemTop";
import * as m from "./style/MoreContainerStyle";

const MoreContainer = () => {
    return(
        <m.MoreContainerWrap>
            <ItemTop title='더 보기'/>
            <m.MoreContainerArea>
                <m.UserProfileArea>
                    <m.UserProfile></m.UserProfile>
                    <m.UserText>
                        <h3>홍길동</h3>
                        <p>ygh522@gmail.com</p>
                    </m.UserText>
                </m.UserProfileArea>
                <m.Bpay>
                    <m.Top>B Pay</m.Top>
                    <m.Balance><p><span>잔액</span>2,000,000원</p></m.Balance>
                    <m.ButtonArea>
                        <m.Btn>환전</m.Btn>
                        <m.Btn>송금</m.Btn>
                    </m.ButtonArea>
                </m.Bpay>
                <m.Gubun></m.Gubun>
                <m.MoreTitle>결제관리</m.MoreTitle>
                <m.MoreUl>
                    <m.MoreLi>신용 및 체크카드</m.MoreLi>
                    <m.MoreLi>은행 계좌</m.MoreLi>
                </m.MoreUl>
                <m.Gubun></m.Gubun>
                <m.MoreTitle>통계</m.MoreTitle>
                <m.MoreUl>
                    <m.MoreLi>소비분석</m.MoreLi>
                </m.MoreUl>
                <m.Gubun></m.Gubun>
                <m.MoreTitle>상품관리</m.MoreTitle>
                <m.MoreUl>
                    <m.MoreLi>찜</m.MoreLi>
                    <m.MoreLi>내 구톡</m.MoreLi>
                    <m.MoreLi>구톡했던 상품</m.MoreLi>
                </m.MoreUl>
                <m.Gubun></m.Gubun>
                <m.MoreTitle>서비스</m.MoreTitle>
                <m.MoreUl>
                    <m.MoreLi>알림</m.MoreLi>
                    <m.MoreLi>개인정보 처리방침</m.MoreLi>
                    <m.MoreLi>서비스 이용 약관</m.MoreLi>
                    <m.MoreLi>버전정보</m.MoreLi>
                    <m.MoreLi>로그아웃</m.MoreLi>
                </m.MoreUl>
            </m.MoreContainerArea>
        </m.MoreContainerWrap>
    )
}

export default MoreContainer;