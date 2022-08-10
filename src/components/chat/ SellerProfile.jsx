import React, { useState } from "react";
import * as s from "../style/SellerProfileStyle";

const SellerProfile = ({position,OnClick}) =>{
    const [pin,setPin] = useState(0);
    function click(e) {
        OnClick();
      }
    return(
        <s.SellerProfileWrap   position ={position}>
            <s.BackIcon onClick={click}></s.BackIcon>
            <s.SellerProfileTop>
                <s.SellerProfile></s.SellerProfile>
                <s.SellerName>
                    <p>넷플릭스</p>
                    <p>리뷰 999+</p>
                </s.SellerName>
                <s.Btn width = "8.8889vw" height = "8.8889vw"></s.Btn>
                <s.Btn width = "22.2222vw" height = "8.8889vw">문의하기</s.Btn>
            </s.SellerProfileTop>
            <s.SellerTab>
                <s.SellerTabUl>
                    <s.SellerTabLi pin = {pin == 0 ? "pin" : ""} onClick={()=>setPin(0)}>상품</s.SellerTabLi>
                    <s.SellerTabLi pin = {pin == 1 ? "pin" : ""} onClick={()=>setPin(1)}>소식</s.SellerTabLi>
                    <s.SellerTabLi pin = {pin == 2 ? "pin" : ""} onClick={()=>setPin(2)}>정보</s.SellerTabLi>
                    <s.SellerTabLi pin = {pin == 3 ? "pin" : ""} onClick={()=>setPin(3)}>리뷰</s.SellerTabLi>
                </s.SellerTabUl>
            </s.SellerTab>
            <s.ContentBox>
                {pin == 0 ? <s.ContentBoxUl>
                    <s.ContentBoxLi>
                        <s.ContentImg></s.ContentImg>
                        <s.ContentTitle>레노버 아이디어패드 Slim3-15ITL 5D WIN10</s.ContentTitle>
                        <s.ContentCost><span>매월</span>12,000원</s.ContentCost>
                    </s.ContentBoxLi>
                    <s.ContentBoxLi>
                        <s.ContentImg></s.ContentImg>
                        <s.ContentTitle>레노버 아이디어패드 Slim3-15ITL 5D WIN10</s.ContentTitle>
                        <s.ContentCost><span>매월</span>12,000원</s.ContentCost>
                    </s.ContentBoxLi>
                    <s.ContentBoxLi>
                        <s.ContentImg></s.ContentImg>
                        <s.ContentTitle>레노버 아이디어패드 Slim3-15ITL 5D WIN10</s.ContentTitle>
                        <s.ContentCost><span>매월</span>12,000원</s.ContentCost>
                    </s.ContentBoxLi>
                    <s.ContentBoxLi>
                        <s.ContentImg></s.ContentImg>
                        <s.ContentTitle>레노버 아이디어패드 Slim3-15ITL 5D WIN10</s.ContentTitle>
                        <s.ContentCost><span>매월</span>12,000원</s.ContentCost>
                    </s.ContentBoxLi>
                    <s.ContentBoxLi>
                        <s.ContentImg></s.ContentImg>
                        <s.ContentTitle>레노버 아이디어패드 Slim3-15ITL 5D WIN10</s.ContentTitle>
                        <s.ContentCost><span>매월</span>12,000원</s.ContentCost>
                    </s.ContentBoxLi>
                    <s.ContentBoxLi>
                        <s.ContentImg></s.ContentImg>
                        <s.ContentTitle>레노버 아이디어패드 Slim3-15ITL 5D WIN10</s.ContentTitle>
                        <s.ContentCost><span>매월</span>12,000원</s.ContentCost>
                    </s.ContentBoxLi>
                    <s.ContentBoxLi>
                        <s.ContentImg></s.ContentImg>
                        <s.ContentTitle>레노버 아이디어패드 Slim3-15ITL 5D WIN10</s.ContentTitle>
                        <s.ContentCost><span>매월</span>12,000원</s.ContentCost>
                    </s.ContentBoxLi>
                </s.ContentBoxUl> : pin == 1 ? <s.ContentBoxUl>
                    <s.NoticeLi><h3>상품 임시 품절안내</h3><p>22.07.01</p></s.NoticeLi>
                    <s.NoticeLi><h3>상품 임시 품절안내</h3><p>22.07.01</p></s.NoticeLi>
                    <s.NoticeLi><h3>상품 임시 품절안내</h3><p>22.07.01</p></s.NoticeLi>
                    <s.NoticeLi><h3>상품 임시 품절안내</h3><p>22.07.01</p></s.NoticeLi>
                    <s.NoticeLi><h3>상품 임시 품절안내</h3><p>22.07.01</p></s.NoticeLi>
                    <s.NoticeLi><h3>상품 임시 품절안내</h3><p>22.07.01</p></s.NoticeLi>
                </s.ContentBoxUl> : pin == 2 ? <s.InfoBox>
                    <s.InfoTitle>기본정보</s.InfoTitle>
                    <s.BasicInfo>
                        <p><span>영업시간</span>10:00 ~ 22:00</p>
                        <p><span>웹사이트</span>https://www.naver.com</p>
                        <p><span>전화번호</span>010-1234-1234</p>
                    </s.BasicInfo>
                <s.Gubun></s.Gubun>
                    <s.InfoTitle>소셜 계정</s.InfoTitle>
                    <s.SnsLink>
                        <s.Sns>
                            <s.SnsImg></s.SnsImg>
                            <s.SnsText>@blue_lakers</s.SnsText>
                        </s.Sns>
                        <s.Sns>
                            <s.SnsImg></s.SnsImg>
                            <s.SnsText>블루레이커스 홍보 블로그</s.SnsText>
                        </s.Sns>
                        <s.Sns>
                            <s.SnsImg></s.SnsImg>
                            <s.SnsText>https://www.naver.com</s.SnsText>
                        </s.Sns>
                    </s.SnsLink>
                <s.Gubun></s.Gubun>
                <s.InfoTitle>사업자 등록정보</s.InfoTitle>
                <s.CompanyInfo>
                    <p><span>법인명</span>NetFlix</p>
                    <p><span>사업자 등록번호</span>123456-123456</p>
                    <p><span>업태</span>소매/도매</p>
                    <p><span>주소</span>서울특별시 서초구 매헌로 24길</p>
                </s.CompanyInfo>
                </s.InfoBox> : <s.ContentBoxUl>
                    <s.ReviewLi>
                        <s.ReviewImg></s.ReviewImg>
                        <s.ReviewerNick><p><span>ygh****</span>2022.08.01</p></s.ReviewerNick>
                        <s.ReviewTitle>맥북너무좋아요</s.ReviewTitle>
                        <s.ReviewText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum est elementum massa, quis quis a sed elit condimentum.</s.ReviewText>
                    </s.ReviewLi>
                    <s.ReviewLi>
                        <s.ReviewImg></s.ReviewImg>
                        <s.ReviewerNick><p><span>ygh****</span>2022.08.01</p></s.ReviewerNick>
                        <s.ReviewTitle>맥북너무좋아요</s.ReviewTitle>
                        <s.ReviewText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum est elementum massa, quis quis a sed elit condimentum.</s.ReviewText>
                    </s.ReviewLi>
                    <s.ReviewLi>
                        <s.ReviewImg></s.ReviewImg>
                        <s.ReviewerNick><p><span>ygh****</span>2022.08.01</p></s.ReviewerNick>
                        <s.ReviewTitle>맥북너무좋아요</s.ReviewTitle>
                        <s.ReviewText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum est elementum massa, quis quis a sed elit condimentum.</s.ReviewText>
                    </s.ReviewLi>
                </s.ContentBoxUl>}
                
                
            </s.ContentBox>
        </s.SellerProfileWrap>
    )
}

export default SellerProfile;