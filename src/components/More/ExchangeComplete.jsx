import React from "react";
import { useNavigate } from "react-router-dom";
import * as e from "../style/ExChangeCompleteStyle"

const ExchangeComplete = ({FormInput,Commission,Exchange,setComplete}) => {
    const nav = useNavigate();
    return(
        <e.ExchangeCompleteWrap>
            <e.Top>
                    <e.BackBtn onClick={()=>
                        setComplete(false)}></e.BackBtn>
                </e.Top>
            <e.Title>
                <p>홍길동님 계좌로</p>
                <p>환전이 완료되었습니다</p>
            </e.Title>
            <e.ExchangeInfoBox>
                <div><p>환전금액</p><span>{FormInput}</span></div>
                <div><p>수수료</p><span>{Commission}</span></div>
                <div><p>총 환전액</p><span>{Exchange}</span></div>
                <div><p>잔액</p><span>1,000,000원</span></div>
            </e.ExchangeInfoBox>
            <e.Btn onClick={()=>nav('/more')}><p>확인</p></e.Btn>
        </e.ExchangeCompleteWrap>
    )
}

export default ExchangeComplete;