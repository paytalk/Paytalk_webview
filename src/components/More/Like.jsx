import React from "react";
import ItemTop from "../../common/ItemTop";
import * as l from "../style/LikeStyle"
import { LikeData } from "../../Data/more_liked";

const Like = () => {
    return(
        <l.Wrap>
            <ItemTop title='내 찜목록'/>
            <l.LikeUl>
            {LikeData.data.map((index)=>
            <l.Likeli>
                <l.LikeImg></l.LikeImg>
                <l.LikeInfo>
                    <l.LikeTitle>{index.name}</l.LikeTitle>
                    <l.LikePrice>{index.price}</l.LikePrice>
                    <l.LikeBtn>구톡하기</l.LikeBtn>
                </l.LikeInfo>
            </l.Likeli>
            )}
                
            </l.LikeUl>
        </l.Wrap>
    )
}

export default Like;