import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from "../style/ChatTemplateStyle";
import SellerProfile from "./ SellerProfile";
import ChatSide from "./ChatSide";
import { Chat_Trans } from "../../Data/chat_transaction_info";

const BaseURL = "https://paytalk.github.io/Paytalk_webview";

const ChatTemplate = ({ setChatDetail, ChatName, chat }: any) => {
    const nav = useNavigate();
    const [side, setSide] = useState(false);
    const [modal, setModal] = useState(false);
    const [history, setHistory] = useState(false);
    const [open, setOpen] = useState(-1);
    return (
        <c.ChatTemplateWrap>
            <c.ChatTemplateArea>
                <c.Top>
                    <c.BackBtn onClick={() => setChatDetail(false)}></c.BackBtn>
                    <c.Name>{ChatName}</c.Name>
                    <c.MenuBtn
                        onClick={() => {
                            setSide(!side);
                            setHistory(false);
                        }}
                    ></c.MenuBtn>
                </c.Top>
                <c.History
                    overflow={history ? "scroll" : "hidden"}
                    height={history ? "87.5vh" : "5vh"}
                    bgColor={history ? "#f8f8f8" : "rgba(0, 0, 0, 0.2)"}
                >
                    <p
                        onClick={() => {
                            setHistory(!history);
                            setOpen(-1);
                            setSide(false);
                        }}
                    >
                        거래내역
                    </p>
                    <c.HistoryDetail>2022년 7월</c.HistoryDetail>
                    <c.HistoryItemUl>
                        {Chat_Trans.data.map((index, key) => (
                            <c.HistoryItemLi
                                onClick={
                                    open == key
                                        ? () => setOpen(-1)
                                        : () => setOpen(key)
                                }
                                height={open == key ? "68.8889vw" : "10vh"}
                            >
                                <c.ItemTitle>
                                    <p>{index.name}</p>
                                    <c.ItemThe></c.ItemThe>
                                </c.ItemTitle>
                                <c.cost>{index.price}</c.cost>
                                <c.ItemDetail>
                                    <p>
                                        <span>상품명</span>
                                        {index.name}
                                    </p>
                                    <p>
                                        <span>결제일</span>
                                        {index.transaction_detail.date}
                                    </p>
                                    <p>
                                        <span>결제금액</span>
                                        {index.transaction_detail.price}
                                    </p>
                                    <p>
                                        <span>결제정보</span>
                                        {
                                            index.transaction_detail
                                                .info_company
                                        }{" "}
                                        /{" "}
                                        {index.transaction_detail.info_card_no}
                                    </p>
                                    <p>
                                        <span>결제기간</span>
                                        {
                                            index.transaction_detail
                                                .Subscription_date
                                        }
                                    </p>
                                    <p>
                                        <span>구독상태</span>
                                        {index.transaction_detail.status}(7개월)
                                    </p>
                                </c.ItemDetail>
                            </c.HistoryItemLi>
                        ))}
                    </c.HistoryItemUl>
                </c.History>
                <c.ChatArea>
                    <c.ChatSample text="left">
                        <c.ChatProfile
                            onClick={() => {
                                setModal(true);
                                setSide(false);
                            }}
                        >
                            <img
                                src={
                                    `${BaseURL}` +
                                    "/img/SalesDetail/블루비즈.png"
                                }
                                alt=""
                            />
                        </c.ChatProfile>
                        <c.ChatName>{ChatName}</c.ChatName>
                        <c.Chat>{chat}</c.Chat>
                    </c.ChatSample>
                </c.ChatArea>
                <c.ChatInputArea>
                    <c.ChatInputBox></c.ChatInputBox>
                    <c.ChatSend>
                        <img
                            src={`${BaseURL}` + "/img/send.png"}
                            alt="이미지"
                        />
                    </c.ChatSend>
                </c.ChatInputArea>
            </c.ChatTemplateArea>
            {side ? (
                <ChatSide setModal={setModal} setSide={setSide} position="0" />
            ) : (
                <ChatSide
                    setSide={setSide}
                    setModal={setModal}
                    position="-100%"
                />
            )}
            {modal ? (
                <SellerProfile
                    OnClick={() => {
                        setModal(false);
                    }}
                    position="0"
                />
            ) : (
                <SellerProfile position="-100%" />
            )}
        </c.ChatTemplateWrap>
    );
};

export default ChatTemplate;
