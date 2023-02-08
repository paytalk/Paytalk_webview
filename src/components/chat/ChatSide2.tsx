import React from "react";
import * as c from "../style/ChatSideStyle";
import { Chat_drawer_Data } from "../../Data/chat_\bdrawer_info";
const BaseURL = "https://paytalk.github.io/Paytalk_webview";

const ChatSide2 = ({ position }: any) => {
    return (
        <c.ChatSideWrap position={position}>
            <c.ChatSideArea>
                <c.Title>미디어</c.Title>
                <c.MediaBox>사진,동영상</c.MediaBox>
                <c.MediaBox>파일</c.MediaBox>
                <c.Gubun></c.Gubun>
                <c.Title>업체 정보</c.Title>
                <c.Info>
                    <p>
                        <span>업체명</span> 주식회사소셜
                    </p>
                    <p>
                        <span>영업시간</span>{" "}
                        {Chat_drawer_Data.data.running_time}
                    </p>
                    <p>
                        <span>주소</span> {Chat_drawer_Data.data.address}
                    </p>
                    <p>
                        <span>카테고리</span> {Chat_drawer_Data.data.category}
                    </p>
                    <p>
                        <span>웹사이트</span> {Chat_drawer_Data.data.store_url}
                    </p>
                    <p>
                        <span>전화번호</span> {Chat_drawer_Data.data.phone_num}
                    </p>
                </c.Info>
                <c.Gubun></c.Gubun>

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
            </c.ChatSideArea>
        </c.ChatSideWrap>
    );
};

export default ChatSide2;
