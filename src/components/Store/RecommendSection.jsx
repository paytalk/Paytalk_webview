import React from "react";
import * as r from "../style/RecommendSectionStyle";

const RecommendSection = ({title}) => {
    return(
        <r.StoreRecommendBox>
        <p>{title}</p>
        <r.StoreRecommendItemBox>
        <r.StoreRecommendUl>
            <r.StoreRecommendLi>
                <r.StoreRecommendImg></r.StoreRecommendImg>
                <r.StoreRecommendTitle>음악은 못참는 나에게 음악 구독</r.StoreRecommendTitle>
                <r.StoreRecommendCost><span>매월</span> 12,000원</r.StoreRecommendCost>
            </r.StoreRecommendLi>
            <r.StoreRecommendLi>
                <r.StoreRecommendImg></r.StoreRecommendImg>
                <r.StoreRecommendTitle>음악은 못참는 나에게 음악 구독</r.StoreRecommendTitle>
                <r.StoreRecommendCost><span>매월</span> 12,000원</r.StoreRecommendCost>
            </r.StoreRecommendLi>
            <r.StoreRecommendLi>
                <r.StoreRecommendImg></r.StoreRecommendImg>
                <r.StoreRecommendTitle>음악은 못참는 나에게 음악 구독</r.StoreRecommendTitle>
                <r.StoreRecommendCost><span>매월</span> 12,000원</r.StoreRecommendCost>
            </r.StoreRecommendLi>
            <r.StoreRecommendLi>
                <r.StoreRecommendImg></r.StoreRecommendImg>
                <r.StoreRecommendTitle>음악은 못참는 나에게 음악 구독</r.StoreRecommendTitle>
                <r.StoreRecommendCost><span>매월</span> 12,000원</r.StoreRecommendCost>
            </r.StoreRecommendLi>
        </r.StoreRecommendUl>
        </r.StoreRecommendItemBox>
        </r.StoreRecommendBox>
    )
}

export default RecommendSection;