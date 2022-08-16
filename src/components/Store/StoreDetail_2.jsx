import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/StoreDetailStyle";

import ItemDetail from "./ItemDetail";

const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const array = ['키즈','시니어','보험','학원','생필품','반려동물','헬스케어','기부']



const StoreDetail2 = ({title,data,setDetail}) => {
    const [open,setOpen] = useState(false);
    const nav = useNavigate();
    const [pay,setPay] = useState(false);
    return(
        <>
        <s.StoreDetailWrap>
            <s.StoreTop>
            <s.StoreDetailFlex>
            <s.StoreDetailTitle><span onClick={()=>setDetail(false)}>&lt;</span>{title}</s.StoreDetailTitle>
            
            <s.SearchIcon className={open ? "absolute" : ""} onClick={()=>setOpen(!open)}></s.SearchIcon>
            </s.StoreDetailFlex>
            <s.StoreDetailFlex>
                <s.StoreSelectBox>최신순</s.StoreSelectBox>
                <s.StoreSelectBox>판매순</s.StoreSelectBox>
                <s.StoreSelectBox>낮은가격 순</s.StoreSelectBox>
                <s.StoreSelectBox>높은가격 순</s.StoreSelectBox>
            </s.StoreDetailFlex>
            </s.StoreTop>
            <s.ItemArea>
                <s.ItemUl>
                    {data.map((index)=>
                    <s.ItemLi onClick={()=>setPay(true)}>
                    <s.ImgArea>
                        <img src={`${BaseURL}`+index.image} alt='이미지'/>
                    </s.ImgArea>
                    <s.TextArea>
                        {index.name}
                    </s.TextArea>
                    <s.CostArea>{index.price}</s.CostArea>
                </s.ItemLi>
                    )}
                </s.ItemUl>
            </s.ItemArea>
        </s.StoreDetailWrap>
        {pay ? <ItemDetail  setPay={setPay} /> : ""}
        </>
    )
}

export default StoreDetail2;