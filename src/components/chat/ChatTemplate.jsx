import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from '../style/ChatTemplateStyle';
import ChatSide from "./ChatSide";


const ChatTemplate = () => {
    const nav = useNavigate();
    const [side,setSide] = useState(false);
    const [modal,setModal] = useState(false);
    return(
        <c.ChatTemplateWrap>
            <c.ChatTemplateArea>
                <c.Top>
                    <c.BackBtn onClick={()=>nav(-1)}></c.BackBtn>
                    <c.Name>넷플릭스</c.Name>
                    <c.MenuBtn onClick={()=>setSide(!side)}></c.MenuBtn>
                </c.Top>
                <c.ChatArea>
                    <c.ChatSample text ='left'>
                        <c.ChatProfile onClick={()=>setModal(true)}></c.ChatProfile>
                        <c.ChatName>넷플릭스</c.ChatName>
                        <c.Chat>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum id id in turpis. Volutpat in lacus senectus a mauris libero dictum nulla.</c.Chat>
                    </c.ChatSample>
                    <c.ChatSample text ='left'>
                    <c.ChatProfile></c.ChatProfile>
                    <c.ChatName>넷플릭스</c.ChatName>
                        <c.Chat>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum id id in turpis. Volutpat in lacus senectus a mauris libero dictum nulla.</c.Chat>
                    </c.ChatSample>
                </c.ChatArea>
                <c.ChatInputArea></c.ChatInputArea>
            </c.ChatTemplateArea>
            {side ? <ChatSide position='0'/> : <ChatSide position='-100%'/>}
        </c.ChatTemplateWrap>
    )
}

export default ChatTemplate;