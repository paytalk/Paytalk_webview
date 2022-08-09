import React from "react";
import { useNavigate } from "react-router-dom";
import * as i from "./style/ItemTopStyle";


const ItemTop = ({title}) => {

    const nav = useNavigate();

    return(
        <>
            <i.BackIcon onClick={()=>nav(-1)}></i.BackIcon>
            <i.ItemDetailTop>{title}</i.ItemDetailTop>
        </>
    )
}

export default ItemTop;