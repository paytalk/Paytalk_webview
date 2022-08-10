import React from "react";
import * as s from "../style/SellerProfileStyle";
import ItemTop from "../../common/ItemTop";

const SellerProfile = ({position,OnClick}) =>{
    function click(e) {
        OnClick();
      }
    return(
        <s.SellerProfileWrap   position ={position}>
            <s.BackIcon onClick={click}></s.BackIcon>
            <s.SellerProfileTop>
                <s.SellerProfile></s.SellerProfile>
                <s.SellerName>
                    <p>넷플릭스</p>
                    <p>리뷰 999+</p>
                </s.SellerName>
                <s.Btn width = "8.8889vw" height = "4.0000vh"></s.Btn>
                <s.Btn width = "22.2222vw" height = "4.0000vh">문의하기</s.Btn>
            </s.SellerProfileTop>
            <s.SellerTab>
                <s.SellerTabUl>
                    <s.SellerTabLi>상품</s.SellerTabLi>
                    <s.SellerTabLi>소식</s.SellerTabLi>
                    <s.SellerTabLi>정보</s.SellerTabLi>
                    <s.SellerTabLi>리뷰</s.SellerTabLi>
                </s.SellerTabUl>
            </s.SellerTab>
        </s.SellerProfileWrap>
    )
}

export default SellerProfile;