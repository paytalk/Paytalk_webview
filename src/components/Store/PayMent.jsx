import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemTop from "../../common/ItemTop";
import * as p from "../style/PayMentStyle";

const Payment = () => {

    const [checked, setChecked] = useState(0);
    const nav = useNavigate();

    return(
        <p.PayMentWrap>
            <ItemTop title='결제하기' />
            <p.address>배송지</p.address>
            <p.addressBox>배송지를 등록해주세요</p.addressBox>
            <p.Gubun></p.Gubun>
            <p.PayMent>결제수단</p.PayMent>
            <p.Bpay>
                <p.CheckBox onClick={()=>setChecked(0)} checked = {checked === 0 ? "checked" : ""}></p.CheckBox>
                <p.PayTitle checked = {checked === 0 ? "checked" : ""}>B Pay</p.PayTitle>
                <p.PayBox bgColor="#5C63E5">
                    <p>잔액 <span>2,000,000원</span></p>
                    <p>결제금액 <span className="bold">15,000원</span></p>
                </p.PayBox>
            </p.Bpay>
            <p.CreditCard>
            <p.CheckBox onClick={()=>setChecked(1)} checked = {checked === 1 ? "checked" : ""}></p.CheckBox>
                <p.PayTitle checked = {checked === 1 ? "checked" : ""}>카드결제</p.PayTitle>
                <p.PayBox bgColor="#F8F8F8"></p.PayBox>
            </p.CreditCard>
            <p.Cost><span>결제금액</span><span>15,000원</span></p.Cost>
            <p.Gubun></p.Gubun>
            <p.ItemArea>
                <p.ImgArea></p.ImgArea>
                <p.TextArea>
                    <p>레노버 아이디어패드 Slim3-15ITL 5D WIN10 16GB램</p>
                    <p>매월 <span>12,000원</span></p>
                </p.TextArea>
            </p.ItemArea>
            <p.Btn onClick={()=>nav('/store/PayComplete')}>결제하기</p.Btn>
        </p.PayMentWrap>
    )
}

export default Payment;