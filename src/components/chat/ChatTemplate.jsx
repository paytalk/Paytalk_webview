import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from '../style/ChatTemplateStyle';
import SellerProfile from "./ SellerProfile";
import ChatSide from "./ChatSide";


const ChatTemplate = () => {
    const nav = useNavigate();
    const [side,setSide] = useState(false);
    const [modal,setModal] = useState(false);
    const [history,setHistory] = useState(false);
    const [open,setOpen] = useState(-1);
    return(
        <c.ChatTemplateWrap>
            <c.ChatTemplateArea>
                <c.Top>
                    <c.BackBtn onClick={()=>nav(-1)}></c.BackBtn>
                    <c.Name>넷플릭스</c.Name>
                    <c.MenuBtn onClick={()=>setSide(!side)}></c.MenuBtn>
                </c.Top>
                <c.History overflow = {history ? "hidden" : "scroll"} height ={history ? "87.5vh" : "5vh"}>
                    <p onClick={()=> {
                        setHistory(!history)
                        setOpen(-1)
                    }}>거래내역</p>
                    <c.HistoryDetail>
                        2022년 7월
                    </c.HistoryDetail>
                    <c.HistoryItemUl>
                        <c.HistoryItemLi onClick={()=>setOpen(1)} height={open == 1 ? "31.0000vh" : "10vh"}>
                            <c.ItemTitle>
                                <p>다이슨 청소기 (2년)</p>
                                <c.ItemThe></c.ItemThe>
                            </c.ItemTitle>
                            <c.cost>400,000원</c.cost>
                            <c.ItemDetail>
                                <p><span>상품명</span>다이슨 청소기</p>
                                <p><span>결제일</span>2021.07.21 (매월21일)</p>
                                <p><span>결제금액</span>400,000원</p>
                                <p><span>결제정보</span>신한카드 / 1234-****-****-1234</p>
                                <p><span>결제기간</span>2021.07.21~</p>
                                <p><span>구독상태</span>구독중(7개월)</p>
                            </c.ItemDetail>
                        </c.HistoryItemLi>
                        <c.HistoryItemLi onClick={()=>setOpen(2)} height={open == 2 ? "31.0000vh" : "10vh"}>
                            <c.ItemTitle>
                                <p>다이슨 청소기 (2년)</p>
                                <c.ItemThe></c.ItemThe>
                            </c.ItemTitle>
                            <c.cost>400,000원</c.cost>
                            <c.ItemDetail>
                                <p><span>상품명</span>다이슨 청소기</p>
                                <p><span>결제일</span>2021.07.21 (매월21일)</p>
                                <p><span>결제금액</span>400,000원</p>
                                <p><span>결제정보</span>신한카드 / 1234-****-****-1234</p>
                                <p><span>결제기간</span>2021.07.21~</p>
                                <p><span>구독상태</span>구독중(7개월)</p>
                            </c.ItemDetail>
                        </c.HistoryItemLi>
                        <c.HistoryItemLi onClick={()=>setOpen(3)} height={open == 3 ? "31.0000vh" : "10vh"}>
                            <c.ItemTitle>
                                <p>다이슨 청소기 (2년)</p>
                                <c.ItemThe></c.ItemThe>
                            </c.ItemTitle>
                            <c.cost>400,000원</c.cost>
                            <c.ItemDetail>
                                <p><span>상품명</span>다이슨 청소기</p>
                                <p><span>결제일</span>2021.07.21 (매월21일)</p>
                                <p><span>결제금액</span>400,000원</p>
                                <p><span>결제정보</span>신한카드 / 1234-****-****-1234</p>
                                <p><span>결제기간</span>2021.07.21~</p>
                                <p><span>구독상태</span>구독중(7개월)</p>
                            </c.ItemDetail>
                        </c.HistoryItemLi>
                        <c.HistoryItemLi onClick={()=>setOpen(4)} height={open == 4 ? "31.0000vh" : "10vh"}>
                            <c.ItemTitle>
                                <p>다이슨 청소기 (2년)</p>
                                <c.ItemThe></c.ItemThe>
                            </c.ItemTitle>
                            <c.cost>400,000원</c.cost>
                            <c.ItemDetail>
                                <p><span>상품명</span>다이슨 청소기</p>
                                <p><span>결제일</span>2021.07.21 (매월21일)</p>
                                <p><span>결제금액</span>400,000원</p>
                                <p><span>결제정보</span>신한카드 / 1234-****-****-1234</p>
                                <p><span>결제기간</span>2021.07.21~</p>
                                <p><span>구독상태</span>구독중(7개월)</p>
                            </c.ItemDetail>
                        </c.HistoryItemLi>
                    </c.HistoryItemUl>
                </c.History>
                <c.ChatArea>
                        <c.ChatSample text ='left'>
                            <c.ChatProfile onClick={()=>setModal(true)}></c.ChatProfile>
                            <c.ChatName>넷플릭스</c.ChatName>
                            <c.Chat>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum id id in turpis. Volutpat in lacus senectus a mauris libero dictum nulla.</c.Chat>
                        </c.ChatSample>
                </c.ChatArea>
                <c.ChatInputArea></c.ChatInputArea>
            </c.ChatTemplateArea>
            {side ? <ChatSide position='0'/> : <ChatSide position='-100%'/>}
            {modal ? <SellerProfile OnClick={()=>setModal(false)} position ='0'/> : <SellerProfile position ='-100%' />}
        </c.ChatTemplateWrap>
    )
}

export default ChatTemplate;