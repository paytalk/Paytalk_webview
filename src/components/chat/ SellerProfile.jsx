import React, { useState } from "react";
import * as s from "../style/SellerProfileStyle";
import { Store_head } from "../../Data/store_header";
import { Store_info } from "../../Data/store_info";
import { Store_noti } from "../../Data/store_notification";
import { Store_review } from "../../Data/store_review";
import { Chat_drawer_Data } from "../../Data/chat_\bdrawer_info";

const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const SellerProfile = ({position,OnClick}) =>{
    const [pin,setPin] = useState(0);
    function click(e) {
        OnClick();
      }
    return(
        <s.SellerProfileWrap   position ={position}>
            <s.BackIcon onClick={click}></s.BackIcon>
            <s.SellerProfileTop>
                <s.SellerProfile>
                    <img src={Store_head.data.profile_img} alt="이미지" />
                </s.SellerProfile>
                <s.SellerName>
                    <p>{Store_head.data.name}</p>
                    <p>리뷰 {Store_head.data.review_cnt}</p>
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
                    {Store_noti.data.map((index)=>
                    <s.NoticeLi><h3>{index.review_title}</h3><p>{index.review_lastModified}</p></s.NoticeLi>
                    )}
                </s.ContentBoxUl> : pin == 2 ? <s.InfoBox>
                    <s.InfoTitle>기본정보</s.InfoTitle>
                    <s.BasicInfo>
                        <p><span>영업시간</span>{Store_info.data.base_info.running_time}</p>
                        <p><span>웹사이트</span>{Store_info.data.base_info.store_url}</p>
                        <p><span>전화번호</span>{Store_info.data.base_info.phone_num}</p>
                    </s.BasicInfo>
                <s.Gubun></s.Gubun>
                    <s.InfoTitle>소셜 계정</s.InfoTitle>
                    <s.SnsLink>
                        <s.Sns>
                            <s.SnsImg></s.SnsImg>
                            <s.SnsText>{Store_info.data.social_sns.instagram_id}</s.SnsText>
                        </s.Sns>
                        <s.Sns>
                            <s.SnsImg></s.SnsImg>
                            <s.SnsText>{Store_info.data.social_sns.urls.url}</s.SnsText>
                        </s.Sns>
                    </s.SnsLink>
                <s.Gubun></s.Gubun>
                <s.InfoTitle>사업자 등록정보</s.InfoTitle>
                <s.CompanyInfo>
                    <p><span>법인명</span>{Store_info.data.seller_info.corporate_name}</p>
                    <p><span>사업자 등록번호</span>{Store_info.data.seller_info.seller_num}</p>
                    <p><span>업태</span>{Store_info.data.seller_info.business_status}</p>
                    <p><span>주소</span>{Store_info.data.seller_info.address}</p>
                </s.CompanyInfo>
                </s.InfoBox> : <s.ContentBoxUl>
                    {
                        Store_review.data.map((index)=>
                        <s.ReviewLi>
                        <s.ReviewImg>
                            <img src={`${BaseURL}`+index.review_img} alt="이미지"/>
                        </s.ReviewImg>
                        <s.ReviewerNick><p><span>{index.review_userId}</span>{index.review_lastModified}</p></s.ReviewerNick>
                        <s.ReviewTitle>{index.review_title}</s.ReviewTitle>
                        <s.ReviewText>{index.review_description}</s.ReviewText>
                    </s.ReviewLi>
                        )
                    }
                    
                </s.ContentBoxUl>}
                
                
            </s.ContentBox>
        </s.SellerProfileWrap>
    )
}

export default SellerProfile;