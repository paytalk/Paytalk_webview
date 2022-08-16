import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style/SubscribeDetailStyle";
import { subscribe_over } from "../Data/my_subscribe_overview";

const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const SubscribeDetail = () => {

    const nav = useNavigate();

    return(
        <s.SubscribeWrap>
            <s.SubscribeArea>
                <s.Button onClick={()=>nav(-1)}></s.Button>
                <h1>사용자님은 의료서비스에<br/>구독을 많이 하셨네요</h1>
                <s.FilterArea>
                    <s.Filter><p>최근 출금 순</p></s.Filter>
                    <s.Total><p>{subscribe_over.total_amount}</p></s.Total>
                </s.FilterArea>
                <s.ItemArea>
                <s.SubscribeUl>
                    {subscribe_over.data.map((index)=>
                    <s.SubscribeLi onClick={()=>nav('/subscribe/1')}>
                    <s.ImgArea>
                        <img src={`${BaseURL}`+index.image} alt='이미지' />
                    </s.ImgArea>
                    <s.InfoArea>
                        <s.Title>{index.name}</s.Title>
                        <s.Chips>
                            <s.Chip>매월 15일</s.Chip>
                            <s.Chip>D - 17</s.Chip>
                            <s.Chip>7개월 구독중</s.Chip>
                        </s.Chips>
                        <s.cost><p>{index.price}</p></s.cost>
                    </s.InfoArea>
                </s.SubscribeLi>
                    )}
                </s.SubscribeUl>
                </s.ItemArea>
            </s.SubscribeArea>
        </s.SubscribeWrap>
    )
}

export default SubscribeDetail;