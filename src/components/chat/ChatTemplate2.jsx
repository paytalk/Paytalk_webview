import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from '../style/ChatTemplateStyle';
import * as cc from '../style/ChatTemplateStyle2';
import SellerProfile from "./ SellerProfile";
import ChatSide2 from "./ChatSide2";

const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const ChatTemplate2 = ({setChatDetail,ChatName,chat}) => {
    const nav = useNavigate();
    const [side,setSide] = useState(false);
    const [modal,setModal] = useState(false);
    const [history,setHistory] = useState(false);
    const [open,setOpen] = useState(-1);
    return(
        <c.ChatTemplateWrap>
            <c.ChatTemplateArea>
                <c.Top>
                    <c.BackBtn onClick={()=>
                        nav(-1)}></c.BackBtn>
                    <c.Name>주식회사소셜</c.Name>
                    <c.MenuBtn onClick={()=>{
                        setSide(!side)
                        setHistory(false)
                        }}></c.MenuBtn>
                </c.Top>
                <c.History overflow = {history ? "scroll" : "hidden"} height ={history ? "87.5vh" : "5vh"}
                bgColor = {history ? "#f8f8f8" : "rgba(0, 0, 0, 0.2)"}
                >
                    <p onClick={()=> {
                        setHistory(!history)
                        setOpen(-1)
                        setSide(false)
                    }}>거래내역</p>
                    <c.HistoryDetail>
                        2022년 7월
                    </c.HistoryDetail>
                    <cc.HistoryUl>
                        <cc.HistoryLi1>
                            <cc.Img></cc.Img>
                            <cc.Name><p>대성물산<span>님이 보낸 돈</span></p></cc.Name>
                            <cc.cost><p><span>400,000원</span> (사십만원)</p></cc.cost>
                        </cc.HistoryLi1>
                        <cc.HistoryLi2>
                        <cc.ImgArea>
                        <cc.Item>
                            <cc.Img></cc.Img>
                            <cc.Name><p>대성물산<span></span></p></cc.Name>
                            </cc.Item>
                            <cc.DownIcon></cc.DownIcon>
                            <cc.Item>
                            <cc.Img></cc.Img>
                            <cc.Name><p>대성물산<span></span></p></cc.Name>
                            </cc.Item>
                            </cc.ImgArea>
                            <cc.InfoArea>
                                <cc.StatusArea>
                                <cc.Status style={{opacity : '0'}}>
                                <cc.CheckIcon></cc.CheckIcon>
                                <span>만료</span>
                                </cc.Status>
                                <cc.Status style={{opacity : '0'}}>
                                <cc.CheckIcon></cc.CheckIcon>
                                <span>만료</span>
                                </cc.Status>
                                <cc.Status>
                                <cc.CheckIcon bgColor="
#BCBCBC"></cc.CheckIcon>
                                <span>요청</span>
                                </cc.Status>
                                <cc.Status>
                                <cc.CheckIcon bgColor="
#5D5FEE"></cc.CheckIcon>
                                <span>완료</span>
                                </cc.Status>
                                </cc.StatusArea>
                                <cc.cost><p><span>400,000원</span> (사십만원)</p></cc.cost>
                            </cc.InfoArea>
                        </cc.HistoryLi2>
                        <cc.HistoryLi2>
                            <cc.ImgArea>
                            <cc.Item>
                            <cc.Img></cc.Img>
                            <cc.Name><p>대성물산<span></span></p></cc.Name>
                            </cc.Item>
                            <cc.DownIcon></cc.DownIcon>
                            <cc.Item>
                            <cc.Img></cc.Img>
                            <cc.Name><p>대성물산<span></span></p></cc.Name>
                            </cc.Item>
                            </cc.ImgArea>
                            <cc.InfoArea>
                                <cc.StatusArea>
                                <cc.Status>
                                <cc.Ban bgColor="
#BCBCBC"></cc.Ban>
                                <span>만료</span>
                                </cc.Status>
                                <cc.Status>
                                <cc.XIcon bgColor="
#BCBCBC"></cc.XIcon>
                                <span>취소</span>
                                </cc.Status>
                                <cc.Status>
                                <cc.CheckIcon bgColor="
#BCBCBC"></cc.CheckIcon>
                                <span>예약</span>
                                </cc.Status>
                                <cc.Status>
                                <cc.CheckIcon bgColor="
#5D5FEE"></cc.CheckIcon>
                                <span>완료</span>
                                </cc.Status>
                                </cc.StatusArea>
                                <cc.cost><p><span>400,000원</span> (사십만원)</p></cc.cost>
                            </cc.InfoArea>
                        </cc.HistoryLi2>
                    </cc.HistoryUl>
                </c.History>
                <c.ChatArea>
                        <c.ChatSample text ='left'>
                            <c.ChatProfile onClick={()=>{
                                setModal(true)
                                setSide(false)
                                }}>
                                    <img src={`${BaseURL}`+'/img/SalesDetail/블루비즈.png'} alt=""/>
                                </c.ChatProfile>
                            <c.ChatName>대성물산</c.ChatName>
                            <c.Chat>주식회사 소셜님께 400,000원 송금이 완료되었습니다</c.Chat>
                        </c.ChatSample>
                </c.ChatArea>
                <c.ChatInputArea>
                    <c.ChatInputBox></c.ChatInputBox>
                    <c.ChatSend>
                        <img src={`${BaseURL}`+'/img/send.png'}  alt='이미지'/>
                    </c.ChatSend>
                </c.ChatInputArea>
            </c.ChatTemplateArea>
            {side ? <ChatSide2 position='0'/> : <ChatSide2 position='-100%'/>}
            {modal ? <SellerProfile OnClick={()=>{
                setModal(false)
                
                }} position ='0'/> : <SellerProfile position ='-100%' />}
        </c.ChatTemplateWrap>
    )
}

export default ChatTemplate2;