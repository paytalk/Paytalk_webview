import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as n from "./style/NavStyle";

const nav = [
    { id: "1", title: "홈", url: "/" },
    { id: "3", title: "스토어", url: "/store" },
    { id: "2", title: "채팅", url: "/chat" },
    { id: "5", title: "더보기", url: "/more" }
];

const Nav = () => {
    const [pin, setPin] = useState(0);

    return (
        <n.NavWrap>
            <n.NavUl>
                {nav.map((index, key) => (
                    <Link to={index.url} onClick={() => setPin(key)}>
                        <n.NavLi className={key === pin ? "pin" : ""}>
                            {index.title}
                        </n.NavLi>
                    </Link>
                ))}
            </n.NavUl>
        </n.NavWrap>
    );
};

export default Nav;
