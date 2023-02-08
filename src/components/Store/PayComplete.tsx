import React from "react";
import { useNavigate } from "react-router-dom";
import ItemTop from "../../common/ItemTop";
import * as p from "../style/PayCompleteStyle";

const PayComplete = ({ setComplete, title, price, img }: any) => {
    const nav = useNavigate();

    return (
        <p.PayCompleteWrap>
            <p.BackIcon onClick={() => setComplete(false)}></p.BackIcon>
            <p.ItemDetailTop>상품상세</p.ItemDetailTop>
            <p.CompleteTitle>결제가 완료되었습니다</p.CompleteTitle>
            <p.ItemArea>
                <p.ImgArea>
                    <img src={img} alt="이미지" />
                </p.ImgArea>
                <p.TextArea>
                    <p>{title}</p>
                    <p>{price}</p>
                </p.TextArea>
            </p.ItemArea>
            <p.Gubun></p.Gubun>
            <p.PayMentHistory>
                <p.PayMentHistoryTitle>결제 내역</p.PayMentHistoryTitle>
                <p.PayMentHistoryDetail>
                    <p>
                        <span>사업자 명</span>(주)블루레이커스
                    </p>
                    <p>
                        <span>사업자</span>123-45-12345
                    </p>
                    <p>
                        <span>주소</span>서울 서초구 매헌로 16
                    </p>
                    <p>
                        <span>전화번호</span>02-1234-5678
                    </p>
                    <p>
                        <span>대표자</span>홍길동
                    </p>
                    <p>
                        <span>결제일</span>2022.01.25 14:00
                    </p>
                    <p>
                        <span>금액</span>매월 15,000원
                    </p>
                    <p>
                        <span>결제수단</span>신용카드
                    </p>
                    <p>
                        <span>결제종류</span>우리카드
                    </p>
                    <p>
                        <span>카드번호</span>1234-****-****-1234
                    </p>
                    <p>
                        <span>할부개월</span>일시불
                    </p>
                </p.PayMentHistoryDetail>
            </p.PayMentHistory>

            <p.Btn onClick={() => nav("/subscribe")}>확인</p.Btn>
        </p.PayCompleteWrap>
    );
};

export default PayComplete;
