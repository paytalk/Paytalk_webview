import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style/SubscribeDetailStyle";


const SubscribeDetail = () => {

    const nav = useNavigate();

    return(
        <s.SubscribeWrap>
            <s.SubscribeArea>
                <s.Button onClick={()=>nav(-1)}></s.Button>
                <h1>사용자님은 의류 서비스에<br/>구독을 많이 하셨네요! 👕</h1>
                <s.SubscribeUl>
                    <s.SubscribeLi>
                        <p>넷플릭스</p>
                    </s.SubscribeLi>
                    <s.SubscribeLi>
                        <p>넷플릭스</p>
                    </s.SubscribeLi>
                    <s.SubscribeLi>
                        <p>넷플릭스</p>
                    </s.SubscribeLi>
                    <s.SubscribeLi>
                        <p>넷플릭스</p>
                    </s.SubscribeLi>
                </s.SubscribeUl>
            </s.SubscribeArea>
        </s.SubscribeWrap>
    )
}

export default SubscribeDetail;