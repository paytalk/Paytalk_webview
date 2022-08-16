import React, { useState } from "react";
import * as r from "../style/RecommendSectionStyle";
import StoreDetail2 from "./StoreDetail_2";
const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const RecommendSection = ({title,data}) => {
    const [Detail,setDetail] = useState(false);
    return(
        <>
        <r.StoreRecommendBox onClick={()=>setDetail(true)}>
        <p>{title}</p>
        <r.StoreRecommendItemBox>
        <r.StoreRecommendUl>
            {data.map((index)=>
            <r.StoreRecommendLi>
            <r.StoreRecommendImg>
                <img src={`${BaseURL}`+index.image} alt="이미지" />
            </r.StoreRecommendImg>
            <r.StoreRecommendTitle>{index.name}</r.StoreRecommendTitle>
            <r.StoreRecommendCost>{index.price}</r.StoreRecommendCost>
            </r.StoreRecommendLi>
            )}
            
        </r.StoreRecommendUl>
        </r.StoreRecommendItemBox>
        </r.StoreRecommendBox>
        {Detail ? <>
        <StoreDetail2 
        setDetail = {setDetail}
        title = {title}
        data = {data}
        />
        </> : ""}
        </>
    )
}

export default RecommendSection;