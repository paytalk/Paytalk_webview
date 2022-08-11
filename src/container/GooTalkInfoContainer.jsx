import React from "react";
import ItemTop from "../common/ItemTop";
import * as g from "./style/GooTalkInfoContainerStyle";

const GooTalkInfoContainer = () => {
    return(
        <g.GooTalkInfoWrap>
        <ItemTop title='구톡 정보'/>
        <g.Flex>
        <g.ImgArea></g.ImgArea>
                        <g.InfoArea>
                            <g.Title>레노버 아이디어패드 Slim3-15ITL 5D WIN10 16GB램</g.Title>
                            
                            <g.cost><p><span>매월</span>12,000원</p></g.cost>
                        </g.InfoArea>
        </g.Flex>
        <g.Gubun></g.Gubun>
        <g.GooTalkTitle>결제정보</g.GooTalkTitle>
        <g.PayMentInfo>
            <p><span>카드정보</span>신한은행 1002-936-216107</p>
            <p><span>결제일</span>매월 15일</p>
            <p><span>결제기간</span>2022.07.01</p>
            <p><span>할부</span>무이자 할부 / 6개월</p>
        </g.PayMentInfo>
        <g.Gubun></g.Gubun>
        <g.GooTalkTitle>업체정보</g.GooTalkTitle>
        <g.CompanyInfo>
            <p><span>업체명</span>(주)네이버</p>
            <p><span>사업자 등록번호</span>123456-123456</p>
            <p><span>업태</span>소매/도매</p>
            <p><span>주소</span>서울특별시 서초구 매헌로 24길</p>
        </g.CompanyInfo>
        <g.Gubun></g.Gubun>
        <g.Flex justify = 'space-between'>
        <g.GooTalkTitle>현재회차</g.GooTalkTitle>
        <g.Remaining>3 / 12</g.Remaining>
        </g.Flex>
        <g.ProgressBar>
            <g.Progress></g.Progress>
        </g.ProgressBar>
        <g.Gubun></g.Gubun>
        <g.ImgBox>

        </g.ImgBox>
        </g.GooTalkInfoWrap>
    )
}

export default GooTalkInfoContainer;