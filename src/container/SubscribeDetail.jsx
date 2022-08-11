import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style/SubscribeDetailStyle";


const SubscribeDetail = () => {

    const nav = useNavigate();

    return(
        <s.SubscribeWrap>
            <s.SubscribeArea>
                <s.Button onClick={()=>nav(-1)}></s.Button>
                <h1>사용자님은 의료서비스에<br/>구독을 많이 하셨네요</h1>
                <s.FilterArea>
                    <s.Filter><p>최근 출금 순</p></s.Filter>
                    <s.Total><p>3개 / 총액 40,000원</p></s.Total>
                </s.FilterArea>
                <s.SubscribeUl>
                    <s.SubscribeLi onClick={()=>nav('/subscribe/1')}>
                        <s.ImgArea></s.ImgArea>
                        <s.InfoArea>
                            <s.Title>레노버 아이디어패드 Slim3-15ITL 5D WIN10 16GB램</s.Title>
                            <s.Chips>
                                <s.Chip>매월 15일</s.Chip>
                                <s.Chip>D - 17</s.Chip>
                                <s.Chip>7개월 구독중</s.Chip>
                            </s.Chips>
                            <s.cost><p><span>매월</span>12,000원</p></s.cost>
                        </s.InfoArea>
                    </s.SubscribeLi>
                    <s.SubscribeLi>
                        <s.ImgArea></s.ImgArea>
                        <s.InfoArea>
                            <s.Title>레노버 아이디어패드 Slim3-15ITL 5D WIN10 16GB램</s.Title>
                            <s.Chips>
                                <s.Chip>매월 15일</s.Chip>
                                <s.Chip>D - 17</s.Chip>
                                <s.Chip>7개월 구독중</s.Chip>
                            </s.Chips>
                            <s.cost><p><span>매월</span>12,000원</p></s.cost>
                        </s.InfoArea>
                    </s.SubscribeLi>
                    <s.SubscribeLi>
                        <s.ImgArea></s.ImgArea>
                        <s.InfoArea>
                            <s.Title>레노버 아이디어패드 Slim3-15ITL 5D WIN10 16GB램</s.Title>
                            <s.Chips>
                                <s.Chip>매월 15일</s.Chip>
                                <s.Chip>D - 17</s.Chip>
                                <s.Chip>7개월 구독중</s.Chip>
                            </s.Chips>
                            <s.cost><p><span>매월</span>12,000원</p></s.cost>
                        </s.InfoArea>
                    </s.SubscribeLi>
                </s.SubscribeUl>
            </s.SubscribeArea>
        </s.SubscribeWrap>
    )
}

export default SubscribeDetail;