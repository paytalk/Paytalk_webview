import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemTop from "../../common/ItemTop";
import * as e from "../style/ExChangeStyle";
import { Account } from "../../Data/account_info";

const ExChange = () => {
    const [modal , setModal] = useState(false);
    const [check , setCheck] = useState(0);
    const nav = useNavigate();
    return(
        <e.ExchangeWrap>
            <ItemTop title='환전하기' />
            <e.Title>얼마나 환전하시겠어요?</e.Title>
            <e.InputBox type='text' placeholder="1,000,000원"></e.InputBox>
            <e.balance>환전 가능한 B Pay 2,000,000원</e.balance>
            <e.Gubun></e.Gubun>
            <e.Title>어느계좌로 돈을 받으시겠어요?</e.Title>
            <e.Bankaccount>
                <e.BankAccountInfo>
                    <p>{Account.data[0].account_name}</p>
                    <p>{Account.data[0].account_no}</p>
                </e.BankAccountInfo>
                <e.Chip>기본계좌</e.Chip>
            </e.Bankaccount>
            <e.ChangeBankAccount onClick={()=>setModal(true)}>
                다른계좌 선택
            </e.ChangeBankAccount>
            <e.ExchangeCost>
                <div><p>환전금액</p><span>1,000,000원</span></div>
                <div><p style={{color : '#FF0000'}}>수수료</p><span style={{color : '#FF0000'}}>10,000원</span></div>
                <hr/>
                <div><p>환전금액</p><span>990,000원</span></div>
            </e.ExchangeCost>
            <e.Btn onClick={()=>nav('/exchange/complete')}><p>확인</p></e.Btn>
            <e.ItemDetailBg visi ={modal ? "1" : "0"} display={modal ? "4" : "-1"} onClick={()=>setModal(false)}></e.ItemDetailBg>

                <e.SubScribeCycle up ={modal ? "0" : "-100%"}>
                    <e.SubOption>계좌선택</e.SubOption>
                    <e.SubOptionUl>
                        {Account.data.map((index,key)=>
                        <e.SubOptionLi onClick={()=>setCheck(key)} check = {check === key ? "checked" : "" }>
                            <p>{index.account_name}</p>
                            <p>{index.account_no}</p>
                        </e.SubOptionLi>
                        )}
                    </e.SubOptionUl>
                <e.Btn onClick={()=>setModal(false)}><p>확인</p></e.Btn>
                </e.SubScribeCycle>
        </e.ExchangeWrap>
    )
}

export default ExChange;