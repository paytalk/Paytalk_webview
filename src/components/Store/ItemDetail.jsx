import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemTop from "../../common/ItemTop";
import * as i from '../style/ItemDetailStyle';

const ItemDetail = () =>{

    const [modal, setModal] = useState(false);
    const [check, setCheck] = useState(0);

    const nav = useNavigate();

    return(
        <i.ItemDetailWrap>
            <ItemTop title="상세정보" />
            <i.ItemArea>
            <i.ImgArea></i.ImgArea>
            <i.ItemTitle>레노버 아이디어패드 Slim3-15ITL 5D WIN10</i.ItemTitle>
            <i.Cost>
                <p><span>매월</span>12,000원</p>
                <p><span>1회 구매시 32,000원 (최대 3회)</span></p>
            </i.Cost>
            <i.BtnArea>
                <i.Btn bgColor='#FF005C'><p>찜하기</p></i.Btn>
                <i.Btn onClick={()=>setModal(!modal)} bgColor='#5C63E5'><p>구톡하기</p></i.Btn>
            </i.BtnArea>
            </i.ItemArea>
            <i.ItemDetailBg visi ={modal ? "1" : "0"} display={modal ? "4" : "-1"} onClick={()=>setModal(false)}></i.ItemDetailBg>

                <i.SubScribeCycle up ={modal ? "0" : "-100%"}>
                    <i.SubOption>구독주기 설정</i.SubOption>
                    <i.SubOptionUl>
                        <i.SubOptionLi check = {check === 0 ? "checked" : ""} onClick={()=>setCheck(0)}>1주만 결제하기</i.SubOptionLi>
                        <i.SubOptionLi check = {check === 1 ? "checked" : ""} onClick={()=>setCheck(1)}>1달만 결제하기</i.SubOptionLi>
                        <i.SubOptionLi check = {check === 2 ? "checked" : ""} onClick={()=>setCheck(2)}>정기 구독하기</i.SubOptionLi>
                    </i.SubOptionUl>
                    <i.SubText>매월 1일마다 컴퓨터 상품을 받을 수 있어요</i.SubText>
                    <i.SubCost><p><span>매월</span>12,000원</p></i.SubCost>
                <i.Btn bgColor='#5C63E5' onClick={()=>nav('/store/Pay')}><p>구독하기</p></i.Btn>
                </i.SubScribeCycle>
        </i.ItemDetailWrap>
    )
}

export default ItemDetail;