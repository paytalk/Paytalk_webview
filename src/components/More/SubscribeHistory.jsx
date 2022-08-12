import React from "react";
import ItemTop from "../../common/ItemTop";
import { subscribedData } from "../../Data/more_subscribed";
import * as s from "../style/SubscribeHistoryStyle"

const SubscribeHistory = () => {
    return(
        <s.Wrap>
        <ItemTop title='구독했던 상품'/>
        <s.Top>
            <s.Title>{subscribedData.data[0].content_title_1}</s.Title>
            <s.The>더 보기</s.The>
        </s.Top>
            <s.SubscribedItemBox>
                <s.SubscribedUl>
                    {subscribedData.data[0].product_1.map((index)=>
                    <s.SubscribedLi>
                        <s.SubscribedImg></s.SubscribedImg>
                        <s.SubscribedName>{index.name}</s.SubscribedName>
                        <s.SubscribedPrice>{index.price}</s.SubscribedPrice>
                    </s.SubscribedLi>
                    )}
                </s.SubscribedUl>
            </s.SubscribedItemBox>
            <s.Gubun></s.Gubun>
            <s.Top>
            <s.Title>{subscribedData.data[1].content_title_2}</s.Title>
            <s.The>더 보기</s.The>
        </s.Top>
            <s.SubscribedItemBox>
                <s.SubscribedUl>
                    {subscribedData.data[1].product_2.map((index)=>
                    <s.SubscribedLi>
                        <s.SubscribedImg></s.SubscribedImg>
                        <s.SubscribedName>{index.name}</s.SubscribedName>
                        <s.SubscribedPrice>{index.price}</s.SubscribedPrice>
                    </s.SubscribedLi>
                    )}
                </s.SubscribedUl>
            </s.SubscribedItemBox>
            <s.Gubun></s.Gubun>
        </s.Wrap>
    )
}

export default SubscribeHistory ;