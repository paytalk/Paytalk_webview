import React from "react";
import * as c from "../style/ChatSideStyle"

const ChatSide = ({position}) => {
    return(
        <c.ChatSideWrap position={position}>
            <c.ChatSideArea>
                <c.Title>미디어</c.Title>
                <c.MediaBox></c.MediaBox>
                <c.MediaBox></c.MediaBox>
                <c.Gubun></c.Gubun>
                <c.Title>업체 정보</c.Title>
                <c.Info>
                    <p><span>업체명</span> 블루레이커스</p>
                    <p><span>영업시간</span> 10:00 ~ 22:00</p>
                    <p><span>주소</span> 서울특별시 서초구 매헌로 24길</p>
                    <p><span>카테고리</span> 쇼핑 &rt; 종합몰/마트/백화점</p>
                    <p><span>웹사이트</span> https://www.naver.com</p>
                    <p><span>전화번호</span> 010-1234-1234</p>
                </c.Info>
                <c.Gubun></c.Gubun>
                <c.Top>
                <c.Title>상품</c.Title>
                <c.Icon></c.Icon>
                </c.Top>
                <c.ItemUl>
                    {/* <c.ItemLi>
                        <c.ItemImg></c.ItemImg>
                        <c.ItemInfo>레노버 아이디어패드 Slim3-15ITL 5D</c.ItemInfo>
                        <c.ItemCost><span>매월</span>12,000원</c.ItemCost>
                    </c.ItemLi>
                    <c.ItemLi>
                        <c.ItemImg></c.ItemImg>
                        <c.ItemInfo>레노버 아이디어패드 Slim3-15ITL 5D</c.ItemInfo>
                        <c.ItemCost><span>매월</span>12,000원</c.ItemCost>
                    </c.ItemLi>
                    <c.ItemLi>
                        <c.ItemImg></c.ItemImg>
                        <c.ItemInfo>레노버 아이디어패드 Slim3-15ITL 5D</c.ItemInfo>
                        <c.ItemCost><span>매월</span>12,000원</c.ItemCost>
                    </c.ItemLi>
                    <c.ItemLi>
                        <c.ItemImg></c.ItemImg>
                        <c.ItemInfo>레노버 아이디어패드 Slim3-15ITL 5D</c.ItemInfo>
                        <c.ItemCost><span>매월</span>12,000원</c.ItemCost>
                    </c.ItemLi> */}
                    <c.ItemLi>
                        <c.ItemImg></c.ItemImg>
                    </c.ItemLi>
                    <c.ItemLi>
                        <c.ItemImg></c.ItemImg>
                    </c.ItemLi>
                    <c.ItemLi>
                        <c.ItemImg></c.ItemImg>
                    </c.ItemLi>
                    <c.ItemLi>
                        <c.ItemImg></c.ItemImg>
                    </c.ItemLi>
                </c.ItemUl>
            </c.ChatSideArea>
        </c.ChatSideWrap>
    )
}

export default ChatSide;