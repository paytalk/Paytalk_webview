import React from "react";
import { useNavigate } from "react-router-dom";
import ItemTop from "../../common/ItemTop";
import * as r from "../style/RemittanceStyle";

const Remittance = () => {
    const nav = useNavigate();
    return (
        <r.RemittanceWrap>
            <ItemTop title="송금하기" />
            <r.Title>얼마나 송금하시겠어요?</r.Title>
            <r.InpuBox
                placeholder="원"
                type="number"
                pattern="[0-9]*"
                inputMode="numeric"
            ></r.InpuBox>
            <r.Remainder>남은 B Pay 2,000,000원</r.Remainder>
            <r.Btn onClick={() => nav("/remittance/complete")}>
                <p>확인</p>
            </r.Btn>
        </r.RemittanceWrap>
    );
};

export default Remittance;
