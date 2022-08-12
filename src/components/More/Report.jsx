import React from "react";
import ItemTop from "../../common/ItemTop";
import * as r from "../style/ReportStyle"

const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const Report = () => {
    return(
        <r.Wrap>
            <ItemTop title='소비분석'/>
            <r.Title>
                <p>이번달 정기결제되는</p>
                <p>상품은 <span>2개</span>에요</p>
            </r.Title>
            <r.GraphArea>
                <r.GraphBox><r.FillGraphBox height='30%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='50%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='70%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='33%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='25%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='10%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='43%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='24%'></r.FillGraphBox></r.GraphBox>
            </r.GraphArea>
            <r.SubTitle>
                8월동안 2건의 구독상품이 추가되었어요
            </r.SubTitle>
            <r.SubscribeItem>
                <r.Img><img src={`${BaseURL}`+'/img/categoryImage/2.png'} alt="이미지"/></r.Img>
                <r.Name>[LG] 트롬 스타일러 일반용량 대여</r.Name>
                <r.PayDay>매월 15일 결제</r.PayDay>
            </r.SubscribeItem>
            <r.SubscribeItem>
                <r.Img><img src={`${BaseURL}`+'/img/categoryImage/2.png'} alt="이미지"/></r.Img>
                <r.Name>[LG] 트롬 스타일러 일반용량 대여</r.Name>
                <r.PayDay>매월 15일 결제</r.PayDay>
            </r.SubscribeItem>
            <r.Gubun></r.Gubun>
            <r.Title>
                <p>이번달 사용하신</p>
                <p>B Pay는 <span>45,000원</span>이에요</p>
            </r.Title>
            <r.GraphArea>
                <r.GraphBox><r.FillGraphBox height='20%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='40%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='24%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='52%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='32%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='44%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='27%'></r.FillGraphBox></r.GraphBox>
                <r.GraphBox><r.FillGraphBox height='32%'></r.FillGraphBox></r.GraphBox>
            </r.GraphArea>
            <r.SubTitle>
                일반거래보다 5,000원 절약되었어요
            </r.SubTitle>
            <r.Gubun></r.Gubun>
            <r.Title>
                <p>홍길동님은 자동차 항목에</p>
                <p>관심이 많으시네요!</p>
            </r.Title>
            <r.SubTitle>
                자동차 항목에 사용한 금액은 200,000원이에요
            </r.SubTitle>
            <r.GraphImg>
                <img src={`${BaseURL}` + '/img/Group 2138.png'} alt="그래프"/>
            </r.GraphImg>
            <r.Item>
                <r.Circle bgColor="#736DDD"></r.Circle>
                <r.ItemName><p>자동차</p><p>40%</p></r.ItemName>
            </r.Item>
            <r.Item>
                <r.Circle bgColor="#00003E"></r.Circle>
                <r.ItemName><p>전자제품</p><p>20%</p></r.ItemName>
            </r.Item>
            <r.Item>
                <r.Circle bgColor="#1433E5"></r.Circle>
                <r.ItemName><p>생활용품</p><p>10%</p></r.ItemName>
            </r.Item>
            <r.Item>
                <r.Circle bgColor="#BCBCBC"></r.Circle>
                <r.ItemName><p>기타</p><p>10%</p></r.ItemName>
            </r.Item>
        </r.Wrap>
    )
}

export default Report;