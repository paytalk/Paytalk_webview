import React from "react";
import { useNavigate } from "react-router-dom";
import ItemTop from "../../common/ItemTop";
import * as r from "../style/RemittanceCompleteStyle";

const RemittanceComplete = () => {
    const nav = useNavigate();
    return (
        <r.ExchangeCompleteWrap>
            <ItemTop />
            <r.Title>
                <p>B Pay로 1,000,000원</p>
                <p>송금이 완료되었습니다</p>
            </r.Title>
            <r.ExchangeInfoBox>
                <div>
                    <p>송금금액</p>
                    <span>1,000,000원</span>
                </div>
                <div>
                    <p>잔액</p>
                    <span>1,000,000원</span>
                </div>
            </r.ExchangeInfoBox>
            <r.Btn onClick={() => nav("/more")}>
                <p>확인</p>
            </r.Btn>
        </r.ExchangeCompleteWrap>
    );
};

export default RemittanceComplete;
