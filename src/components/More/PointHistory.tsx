import React from "react";
import ItemTop from "../../common/ItemTop";
import * as p from "../style/PointHistoryStyle";

const PointHistory = () => {
    return (
        <p.PointHistoryWrap>
            <ItemTop title="포인트 내역" />
            <p.Bpay>
                <p.Top>B Pay</p.Top>
                <p.Balance>
                    <p>
                        <span>잔액</span>2,000,000원
                    </p>
                </p.Balance>
            </p.Bpay>
            <p.Gubun></p.Gubun>
            <p.Date>2022.08.18</p.Date>
            <p.History>
                <p>
                    <span>포인트 충전</span>+1,000,000
                </p>
                <p style={{ color: "#FF0000" }}>
                    <span>포인트 사용</span>-30,000
                </p>
                <p style={{ color: "#FF0000" }}>
                    <span>포인트 사용</span>-30,000
                </p>
            </p.History>
            <p.Gubun></p.Gubun>
            <p.Date>2022.08.17</p.Date>
            <p.History>
                <p>
                    <span>포인트 충전</span>+1,000,000
                </p>
                <p style={{ color: "#FF0000" }}>
                    <span>포인트 사용</span>-30,000
                </p>
                <p style={{ color: "#FF0000" }}>
                    <span>포인트 사용</span>-30,000
                </p>
            </p.History>
            <p.Gubun></p.Gubun>
        </p.PointHistoryWrap>
    );
};

export default PointHistory;
