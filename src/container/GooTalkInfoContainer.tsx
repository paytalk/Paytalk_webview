import React from "react";
import ItemTop from "../common/ItemTop";
import * as g from "./style/GooTalkInfoContainerStyle";
import { Subscribe_de } from "../Data/my_subscribe_detail";

const GooTalkInfoContainer = () => {
    return (
        <g.GooTalkInfoWrap>
            <ItemTop title="구독 정보" />
            <g.Flex justify="">
                <g.ImgArea>
                    <img
                        src={Subscribe_de.data.subscribing_product.image}
                        alt="이미지"
                    />
                </g.ImgArea>
                <g.InfoArea>
                    <g.Title>
                        {Subscribe_de.data.subscribing_product.name}
                    </g.Title>

                    <g.cost>
                        <p>{Subscribe_de.data.subscribing_product.price}</p>
                    </g.cost>
                </g.InfoArea>
            </g.Flex>
            <g.Gubun></g.Gubun>
            <g.GooTalkTitle>결제정보</g.GooTalkTitle>
            <g.PayMentInfo>
                <p>
                    <span>카드정보</span>
                    {Subscribe_de.data.pay_info.card_info}
                </p>
                <p>
                    <span>결제일</span>
                    {Subscribe_de.data.pay_info.pay_day_by_month}
                </p>
                <p>
                    <span>결제기간</span>
                    {Subscribe_de.data.pay_info.pay_date}
                </p>
                <p>
                    <span>할부</span>
                    {Subscribe_de.data.pay_info.installment}
                </p>
            </g.PayMentInfo>
            <g.Gubun></g.Gubun>
            <g.GooTalkTitle>업체정보</g.GooTalkTitle>
            <g.CompanyInfo>
                <p>
                    <span>업체명</span>
                    {Subscribe_de.data.seller_info.name}
                </p>
                <p>
                    <span>사업자 등록번호</span>
                    {Subscribe_de.data.seller_info.seller_num}
                </p>
                <p>
                    <span>업태</span>소매 / 도매
                </p>
                <p>
                    <span>주소</span>
                    {Subscribe_de.data.seller_info.address}
                </p>
            </g.CompanyInfo>
            <g.Gubun></g.Gubun>
            <g.Flex justify="space-between">
                <g.GooTalkTitle>현재회차</g.GooTalkTitle>
                <g.Remaining>3 / 12</g.Remaining>
            </g.Flex>
            <g.ProgressBar>
                <g.Progress></g.Progress>
            </g.ProgressBar>
            <g.Gubun></g.Gubun>
            <g.ImgBox>
                <img
                    src={Subscribe_de.data.product_detail_image}
                    alt="이미지"
                />
            </g.ImgBox>
        </g.GooTalkInfoWrap>
    );
};

export default GooTalkInfoContainer;
