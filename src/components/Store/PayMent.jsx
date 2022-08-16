import React from "react";
import { useState } from "react";
import * as p from "../style/PayMentStyle";
import PayComplete from "./PayComplete";

const Payment = ({setNext,title,price,img}) => {

    const [checked, setChecked] = useState(0);
    const [Complete,setComplete] = useState(false);
    return(
        <>
        <p.PayMentWrap>
            <p.BackIcon onClick={()=>setNext(false)}></p.BackIcon>
            <p.ItemDetailTop>결제하기</p.ItemDetailTop>
            <p.address>배송지</p.address>
            <p.addressBox>배송지를 등록해주세요</p.addressBox>
            <p.Gubun></p.Gubun>
            <p.PayMent>결제수단</p.PayMent>
            <p.Bpay>
                <p.CheckBox onClick={()=>setChecked(0)} checked = {checked === 0 ? "checked" : ""}>
                    <p.CheckIcon></p.CheckIcon>
                </p.CheckBox>
                <p.PayTitle checked = {checked === 0 ? "checked" : ""}>B Pay</p.PayTitle>
                <p.PayBox color="#fff" bgColor="#5C63E5">
                    <p>잔액 <span>2,000,000원</span></p>
                    <p>결제금액 <span>{price}</span></p>
                </p.PayBox>
            </p.Bpay>
            <p.CreditCard>
            <p.CheckBox onClick={()=>setChecked(1)} checked = {checked === 1 ? "checked" : ""}>
            <p.CheckIcon></p.CheckIcon>
            </p.CheckBox>
                <p.PayTitle checked = {checked === 1 ? "checked" : ""}>카드결제</p.PayTitle>
                <p.PayBox color="#666666" bgColor="#F8F8F8">
                    <p>우리은행</p>
                    <p>1002-****-****-216107</p>
                    <p>결제금액 <span>{price}</span></p>
                </p.PayBox>
            </p.CreditCard>
            <p.Cost><span>결제금액</span><span>{price}</span></p.Cost>
            <p.Gubun></p.Gubun>
            <p.ItemArea>
                <p.ImgArea>
                    <img src={img} alt='이미지' />
                </p.ImgArea>
                <p.TextArea>
                    <p>{title}</p>
                    <p>{price}</p>
                </p.TextArea>
            </p.ItemArea>
            <p.Btn onClick={()=>setComplete(true)}>결제하기</p.Btn>
        </p.PayMentWrap>
        {Complete ? <PayComplete title={title} price = {price} img = {img} setComplete={setComplete}/> : ""}
        </>
    )
}

export default Payment;