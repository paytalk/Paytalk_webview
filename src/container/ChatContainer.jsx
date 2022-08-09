import React from "react";
import { useNavigate } from "react-router-dom";
import * as c from "./style/ChatContainerStyle"

const ChatContainer = () =>{

    const nav = useNavigate();

    return(
        <c.ChatContainerWrap>
            <c.ChatContainerArea>
                <c.ChatContainerTitle><h1>채팅</h1></c.ChatContainerTitle>
                <c.ChatListArea>
                    <c.ChatListUl>
                        <c.ChatListLi onClick={()=>nav(`/chat/1`)}>
                            <c.ChatProfile></c.ChatProfile>
                            <c.ChatInfo>
                            <c.ChatName>넷플릭스</c.ChatName>
                            <c.ChatMem>9</c.ChatMem>
                            <c.ChatPrev>결제가 완료되었습니다</c.ChatPrev>
                            </c.ChatInfo>
                        </c.ChatListLi>
                        <c.ChatListLi>
                            <c.ChatProfile></c.ChatProfile>
                            <c.ChatInfo>
                            <c.ChatName>넷플릭스</c.ChatName>
                            <c.ChatPrev>결제가 완료되었습니다</c.ChatPrev>
                            </c.ChatInfo>
                        </c.ChatListLi><c.ChatListLi>
                            <c.ChatProfile></c.ChatProfile>
                            <c.ChatInfo>
                            <c.ChatName>넷플릭스</c.ChatName>
                            <c.ChatPrev>결제가 완료되었습니다</c.ChatPrev>
                            </c.ChatInfo>
                        </c.ChatListLi><c.ChatListLi>
                            <c.ChatProfile></c.ChatProfile>
                            <c.ChatInfo>
                            <c.ChatName>넷플릭스</c.ChatName>
                            <c.ChatPrev>결제가 완료되었습니다</c.ChatPrev>
                            </c.ChatInfo>
                        </c.ChatListLi><c.ChatListLi>
                            <c.ChatProfile></c.ChatProfile>
                            <c.ChatInfo>
                            <c.ChatName>넷플릭스</c.ChatName>
                            <c.ChatPrev>결제가 완료되었습니다</c.ChatPrev>
                            </c.ChatInfo>
                        </c.ChatListLi>
                    </c.ChatListUl>
                </c.ChatListArea>
            </c.ChatContainerArea>
        </c.ChatContainerWrap>
    )
}

export default ChatContainer;