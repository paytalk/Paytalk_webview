import React from "react";
import ItemTop from "../../common/ItemTop";
import * as c from "../style/CreditStyle"
import { Card } from "../../Data/card_info";

const Credit = () => {
    return(
        <c.Wrap>
            <ItemTop title='신용 및 체크카드'/>
            <c.CardUl>
                {
                    Card.data.map((index)=>
                    <c.CardLi>
                        <c.CardName>{index.card_company} {index.card_name}</c.CardName>
                        <c.CardNo>{index.card_no}</c.CardNo>
                    </c.CardLi>
                    )
                }
            </c.CardUl>
            <c.Btn><p>카드 추가</p></c.Btn>
        </c.Wrap>
    )
}

export default Credit;