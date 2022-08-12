import React from "react";
import * as r from "../style/RecommendSectionStyle";
const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const RecommendSection = ({title,data}) => {
    return(
        <r.StoreRecommendBox>
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
    )
}

export default RecommendSection;