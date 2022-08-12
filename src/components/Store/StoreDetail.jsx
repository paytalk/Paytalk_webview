import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/StoreDetailStyle";

const array = ['키즈','시니어','보험','학원','생필품','반려동물','헬스케어','기부']

const StoreDetail = ({index}) => {
    const [open,setOpen] = useState(false)
    const nav = useNavigate();
    return(
        <s.StoreDetailWrap>
            <s.StoreTop>
            <s.StoreDetailFlex>
            <s.StoreDetailTitle><span onClick={()=>nav(-1)}>&lt;</span>{array[index]}</s.StoreDetailTitle>
            
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
                    <s.ItemLi onClick={()=>nav(`/store/Item`)}>
                        <s.ImgArea></s.ImgArea>
                        <s.TextArea>
                            레노버 아이디어패드 Slim3_15ITL 5D WIN10
                        </s.TextArea>
                        <s.CostArea><span>매월</span>12,000원</s.CostArea>
                    </s.ItemLi>
                    <s.ItemLi>
                        <s.ImgArea></s.ImgArea>
                        <s.TextArea>
                            레노버 아이디어패드 Slim3_15ITL 5D WIN10
                        </s.TextArea>
                        <s.CostArea><span>매월</span>12,000원</s.CostArea>
                    </s.ItemLi>
                    <s.ItemLi>
                        <s.ImgArea></s.ImgArea>
                        <s.TextArea>
                            레노버 아이디어패드 Slim3_15ITL 5D WIN10
                        </s.TextArea>
                        <s.CostArea><span>매월</span>12,000원</s.CostArea>
                    </s.ItemLi>
                    <s.ItemLi>
                        <s.ImgArea></s.ImgArea>
                        <s.TextArea>
                            레노버 아이디어패드 Slim3_15ITL 5D WIN10
                        </s.TextArea>
                        <s.CostArea><span>매월</span>12,000원</s.CostArea>
                    </s.ItemLi>
                    <s.ItemLi>
                        <s.ImgArea></s.ImgArea>
                        <s.TextArea>
                            레노버 아이디어패드 Slim3_15ITL 5D WIN10
                        </s.TextArea>
                        <s.CostArea><span>매월</span>12,000원</s.CostArea>
                    </s.ItemLi>
                    <s.ItemLi>
                        <s.ImgArea></s.ImgArea>
                        <s.TextArea>
                            레노버 아이디어패드 Slim3_15ITL 5D WIN10
                        </s.TextArea>
                        <s.CostArea><span>매월</span>12,000원</s.CostArea>
                    </s.ItemLi>
                    <s.ItemLi>
                        <s.ImgArea></s.ImgArea>
                        <s.TextArea>
                            레노버 아이디어패드 Slim3_15ITL 5D WIN10
                        </s.TextArea>
                        <s.CostArea><span>매월</span>12,000원</s.CostArea>
                    </s.ItemLi>
                    <s.ItemLi>
                        <s.ImgArea></s.ImgArea>
                        <s.TextArea>
                            레노버 아이디어패드 Slim3_15ITL 5D WIN10
                        </s.TextArea>
                        <s.CostArea><span>매월</span>12,000원</s.CostArea>
                    </s.ItemLi>
                </s.ItemUl>
            </s.ItemArea>
        </s.StoreDetailWrap>
    )
}

export default StoreDetail;