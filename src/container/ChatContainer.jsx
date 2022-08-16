import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from "./style/ChatContainerStyle"
import { chat_room_list } from "../Data/chat_room_list";
import ChatTemplate from "../components/chat/ChatTemplate";
const BaseURL = 'https://paytalk.github.io/Paytalk_webview';
const ChatContainer = () =>{

    const [chatDetail , setChatDetail] = useState(false);
    const [chatNum , setChatNum] = useState(-1);
    const nav = useNavigate();

    return(
        <c.ChatContainerWrap>
            <c.ChatContainerArea>
                <c.ChatContainerTitle><h1>채팅</h1></c.ChatContainerTitle>
                <c.ChatListArea>
                    <c.ChatListUl>
                        {chat_room_list.data.map((index,key)=>
                        <c.ChatListLi onClick={()=>{
                            setChatDetail(true)
                            setChatNum(key)
                            }}>
                        <c.ChatProfile>
                            <img src={`${BaseURL}`+index.profile_img} alt="프로필" />
                        </c.ChatProfile>
                        <c.ChatInfo>
                        <c.ChatName>{index.chat_name}</c.ChatName>
                        <c.ChatMem></c.ChatMem>
                        <c.ChatPrev>{index.new_msg}</c.ChatPrev>
                        </c.ChatInfo>
                    </c.ChatListLi>
                        )}
                        <c.ChatListLi onClick={()=>{
                            nav('/chat/Detail')
                            }}>
                        <c.ChatProfile>
                            <img src={`${BaseURL}`+'/img/SalesDetail/블루비즈.png'} alt="프로필" />
                        </c.ChatProfile>
                        <c.ChatInfo>
                        <c.ChatName>주식회사 소셜</c.ChatName>
                        <c.ChatMem></c.ChatMem>
                        <c.ChatPrev>주식회사 소셜님께 400,000원 송금이 완료되었습니다</c.ChatPrev>
                        </c.ChatInfo>
                    </c.ChatListLi>
                    </c.ChatListUl>
                </c.ChatListArea>
            </c.ChatContainerArea>
            {chatDetail ? <ChatTemplate setChatDetail={setChatDetail} ChatName={chat_room_list.data[chatNum].chat_name} chat = {chat_room_list.data[chatNum].new_msg}/> : ""}
        </c.ChatContainerWrap>
    )
}

export default ChatContainer;