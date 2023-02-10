import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as i from "../style/ItemDetailStyle";
import { De2 } from "../../Data/detail_search_senior";
import { De4 } from "../../Data/detail_search_academy";
import { De6 } from "../../Data/detail_search_pet";
import { De8 } from "../../Data/detail_search_distribution";
import PayMent from "./PayMent";
import { useAppDispatch } from "../../useRedux/rootReducer";

const DB = [De2, De2, De4, De4, De6, De6, De8, De8];

const BaseURL = "https://paytalk.github.io/Paytalk_webview";

const ItemDetail = ({ setPay, index }: any) => {
    const [modal, setModal] = useState(false);
    const [check, setCheck] = useState(0);
    const [next, setNext] = useState(false);
    const [num, setNum] = useState(0);
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const location = window.location.href.split("/");
    useEffect(() => {
        if (location.length === 8) {
            setNum(parseInt(location[7]));
        }
    }, [location]);

    return (
        <>
            <i.ItemDetailWrap>
                <i.BackIcon
                    onClick={() => {
                        setTimeout(() => nav(-1), 10);
                        dispatch({ type: "urlDepth", payload: "prev" });
                    }}
                ></i.BackIcon>
                <i.ItemDetailTop>상세정보</i.ItemDetailTop>
                <i.ItemArea>
                    <i.ImgArea>
                        <img
                            src={
                                `${BaseURL}` +
                                DB[num].data.content_image.content_img1
                            }
                            alt="이미지"
                        />
                    </i.ImgArea>
                    <i.ItemTitle>{DB[num].data.name}</i.ItemTitle>
                    <i.Cost>
                        <p>{DB[num].data.price}</p>
                        <p>
                            <span>{DB[num].data.price} (최대 3회)</span>
                        </p>
                    </i.Cost>
                    <i.BtnArea>
                        <i.Btn bgColor="#FF005C">
                            <p>찜하기</p>
                        </i.Btn>
                        <i.Btn
                            onClick={() => setModal(!modal)}
                            bgColor="#5C63E5"
                        >
                            <p>구독하기</p>
                        </i.Btn>
                    </i.BtnArea>
                </i.ItemArea>
                <i.ItemDetailBg
                    visi={modal ? "1" : "0"}
                    display={modal ? "4" : "-1"}
                    onClick={() => setModal(false)}
                ></i.ItemDetailBg>

                <i.SubScribeCycle up={modal ? "0" : "-100%"}>
                    <i.SubOption>구독주기 설정</i.SubOption>
                    <i.SubOptionUl>
                        <i.SubOptionLi
                            check={check === 0 ? "checked" : ""}
                            onClick={() => setCheck(0)}
                        >
                            1주만 결제하기
                        </i.SubOptionLi>
                        <i.SubOptionLi
                            check={check === 1 ? "checked" : ""}
                            onClick={() => setCheck(1)}
                        >
                            1달만 결제하기
                        </i.SubOptionLi>
                        <i.SubOptionLi
                            check={check === 2 ? "checked" : ""}
                            onClick={() => setCheck(2)}
                        >
                            정기 구독하기
                        </i.SubOptionLi>
                    </i.SubOptionUl>
                    <i.SubText>매월 1일마다 상품을 받을 수 있어요</i.SubText>
                    <i.SubCost>
                        <p>
                            <span>매월</span>12,000원
                        </p>
                    </i.SubCost>
                    <i.Btn
                        bgColor="#5C63E5"
                        onClick={() => {
                            setNext(true);
                            setModal(false);
                        }}
                    >
                        <p>구독하기</p>
                    </i.Btn>
                </i.SubScribeCycle>
            </i.ItemDetailWrap>
            {next ? (
                <PayMent
                    title={DB[num].data.name}
                    price={DB[num].data.price}
                    img={`${BaseURL}` + DB[num].data.content_image.content_img1}
                    setNext={setNext}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default ItemDetail;
