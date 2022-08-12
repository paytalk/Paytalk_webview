import React, { useState } from "react";
import ItemTop from "../../common/ItemTop";
import { Account } from "../../Data/account_info";
import * as b from "../style/BacknAccountStyle"

const BankAccount = () => {

    const [modal , setModal] = useState(false);
    const [check , setCheck] = useState(0);

    return(
        <b.Wrap>
        <ItemTop title='은행 계좌'/>
        <b.BankAccountUl>
            {Account.data.map((index)=>
            <b.BankAccountLi onClick={()=>setModal(true)
                }>
                <b.BankAccountName>{index.account_name}</b.BankAccountName>
                {index.defalut ? <b.BasicAccount>기본계좌</b.BasicAccount> : ""}
                <b.BankAccountNo>{index.account_no}</b.BankAccountNo>
                <b.BankAccountAmount>{index.amount}</b.BankAccountAmount>
            </b.BankAccountLi>
            )}
        </b.BankAccountUl>
        <b.Btn><p>계좌 추가</p></b.Btn>
        <b.ItemDetailBg visi ={modal ? "1" : "0"} display={modal ? "4" : "-1"} onClick={()=>setModal(false)}></b.ItemDetailBg>
        <b.SubScribeCycle up ={modal ? "0" : "-100%"}>
                    <b.SubOption>계좌선택</b.SubOption>
                    <b.SubOptionUl>
                        <b.SubOptionLi onClick={()=>setModal(false)} check={'checked'}><p>기본계좌로 선택하기</p></b.SubOptionLi>
                        <b.SubOptionLi onClick={()=>setModal(false)} check={'checked'}><p>계좌 삭제하기</p></b.SubOptionLi>
                        <b.SubOptionLi onClick={()=>setModal(false)}><p>취소</p></b.SubOptionLi>
                    </b.SubOptionUl>
                </b.SubScribeCycle>
        </b.Wrap>
    )
}

export default BankAccount;