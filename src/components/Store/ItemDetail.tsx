import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as i from "../style/ItemDetailStyle";
import { De2 } from "../../Data/detail_search_senior";
import { De4 } from "../../Data/detail_search_academy";
import { De6 } from "../../Data/detail_search_pet";
import { De8 } from "../../Data/detail_search_distribution";
import Img2 from "../../Resource/Images/Img2.svg";
import { useAppDispatch } from "../../useRedux/rootReducer";

const DB = [De2, De2, De4, De4, De6, De6, De8, De8];

const BaseURL = "https://paytalk.github.io/Paytalk_webview";

const ItemDetail = ({ setPay, index }: any) => {
    const [modal, setModal] = useState(false);
    const [check, setCheck] = useState(0);
    const [next, setNext] = useState(false);
    const [num, setNum] = useState(0);
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const location = window.location.href.split("/");
    useEffect(() => {
        if (location.length === 8) {
            setNum(parseInt(location[7]));
        }
    }, [location]);

    return (
        <i.ItemDetailWrap>
            <i.BackIcon
                onClick={() => {
                    setTimeout(() => nav(-1), 10);
                    dispatch({ type: "urlDepth", payload: "prev" });
                }}
            ></i.BackIcon>
            <i.ItemDetailTop>상세정보</i.ItemDetailTop>
            <i.MobileView>
                <i.MobileBody>
                    <i.ThumbImgArea>
                        <img src={Img2} alt="썸네일" />
                    </i.ThumbImgArea>
                    <i.ProductInfo>
                        <i.ProductName>
                            4세 Gate_C.Gate_Feedback_#1
                        </i.ProductName>
                        <i.ProductPrice>
                            <i.DisCountAmount>16%</i.DisCountAmount>
                            <i.FakePrice>880,000원</i.FakePrice>
                            <i.RealPrice>739,200원</i.RealPrice>
                        </i.ProductPrice>
                    </i.ProductInfo>
                    <i.ProductNav>
                        <i.ProductNavUl>
                            <i.ProductNavLi className="checked">
                                상품 설명
                            </i.ProductNavLi>
                            <i.ProductNavLi>환불 및 약관</i.ProductNavLi>
                        </i.ProductNavUl>
                    </i.ProductNav>
                    <i.ProductDetail>
                        <p className="desc">
                            새디샘 수업
                            <br />
                            <br />
                            ■그룹수업 200,000/월
                            <br />
                            정원 : 파닉스 수업 3:1 / 스피킹 수업 4:1
                            <br />
                            <br />
                            <br />
                            ■1:1일 경우 300,000/월
                            <br />
                            현재 시간을 1:1로 블럭하고 싶으신 분은 사전에
                            알려주세요^^
                            <br />
                            <br />
                            (9/1수업부터 적용, 이월분은 적용x)
                            <br />
                            <br />
                            After Class
                            <br />
                            12:00-14:00 새디샘 수업
                            <br />
                            <br />
                            ■그룹수업 200,000/월
                            <br />
                            정원 : 파닉스 수업 3:1 / 스피킹 수업 4:1
                            <br />
                            <br />
                            <br />
                            ■1:1일 경우 300,000/월
                            <br />
                            현재 시간을 1:1로 블럭하고 싶으신 분은 사전에
                            알려주세요^^
                            <br />
                            <br />
                            (9/1수업부터 적용, 이월분은 적용x)
                            <br />
                            <br />
                            After Class
                            <br />
                            12:00-14:00 새디샘 수업
                            <br />
                            <br />
                            ■그룹수업 200,000/월
                            <br />
                            정원 : 파닉스 수업 3:1 / 스피킹 수업 4:1
                            <br />
                            <br />
                            <br />
                            ■1:1일 경우 300,000/월
                            <br />
                            현재 시간을 1:1로 블럭하고 싶으신 분은 사전에
                            알려주세요^^
                            <br />
                            <br />
                            (9/1수업부터 적용, 이월분은 적용x)
                            <br />
                            <br />
                            After Class
                            <br />
                            12:00-14:00 새디샘 수업
                            <br />
                            <br />
                            ■그룹수업 200,000/월
                            <br />
                            정원 : 파닉스 수업 3:1 / 스피킹 수업 4:1
                            <br />
                            <br />
                            <br />
                            ■1:1일 경우 300,000/월
                            <br />
                            현재 시간을 1:1로 블럭하고 싶으신 분은 사전에
                            알려주세요^^
                            <br />
                            <br />
                            (9/1수업부터 적용, 이월분은 적용x)
                            <br />
                            <br />
                            After Class
                            <br />
                            12:00-14:00
                        </p>
                        {/* {Products.productdetail.productSubImg.map(
                                    (index: any) => (
                                        <img src={index} />
                                    )
                                )} */}
                    </i.ProductDetail>
                </i.MobileBody>
                <i.BtnArea>
                    <i.Btn
                        color="rgba(93, 95, 238, 1)"
                        bgColor="rgba(93, 95, 238, 0.1)"
                    >
                        <p>문의하기</p>
                    </i.Btn>
                    <i.Btn
                        color="#fff"
                        onClick={() => setModal(!modal)}
                        bgColor="#5D5FEE"
                    >
                        <p>구매하기</p>
                    </i.Btn>
                </i.BtnArea>
            </i.MobileView>
            {/* <i.ItemArea>
                    <i.ImgArea>
                        <img
                            src={
                                `${BaseURL}` +
                                DB[num].data.content_image.content_img1
                            }
                            alt="이미지"
                        />
                    </i.ImgArea>
                    <i.ItemTitle>{DB[num].data.name}</i.ItemTitle>
                    <i.Cost>
                        <p>{DB[num].data.price}</p>
                        <p>
                            <span>{DB[num].data.price} (최대 3회)</span>
                        </p>
                    </i.Cost>
                    <i.BtnArea>
                        <i.Btn bgColor="#FF005C">
                            <p>찜하기</p>
                        </i.Btn>
                        <i.Btn
                            onClick={() => setModal(!modal)}
                            bgColor="#5C63E5"
                        >
                            <p>구독하기</p>
                        </i.Btn>
                    </i.BtnArea>
                </i.ItemArea>
                <i.ItemDetailBg
                    visi={modal ? "1" : "0"}
                    display={modal ? "4" : "-1"}
                    onClick={() => setModal(false)}
                ></i.ItemDetailBg>

                <i.SubScribeCycle up={modal ? "0" : "-100%"}>
                    <i.SubOption>구독주기 설정</i.SubOption>
                    <i.SubOptionUl>
                        <i.SubOptionLi
                            check={check === 0 ? "checked" : ""}
                            onClick={() => setCheck(0)}
                        >
                            1주만 결제하기
                        </i.SubOptionLi>
                        <i.SubOptionLi
                            check={check === 1 ? "checked" : ""}
                            onClick={() => setCheck(1)}
                        >
                            1달만 결제하기
                        </i.SubOptionLi>
                        <i.SubOptionLi
                            check={check === 2 ? "checked" : ""}
                            onClick={() => setCheck(2)}
                        >
                            정기 구독하기
                        </i.SubOptionLi>
                    </i.SubOptionUl>
                    <i.SubText>매월 1일마다 상품을 받을 수 있어요</i.SubText>
                    <i.SubCost>
                        <p>
                            <span>매월</span>12,000원
                        </p>
                    </i.SubCost>
                    <i.Btn
                        bgColor="#5C63E5"
                        onClick={() => {
                            setNext(true);
                            setModal(false);
                        }}
                    >
                        <p>구독하기</p>
                    </i.Btn> */}
            {/* </i.SubScribeCycle> */}
        </i.ItemDetailWrap>
    );
};

export default ItemDetail;
