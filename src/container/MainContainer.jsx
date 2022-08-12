import React from "react";
import { useNavigate } from "react-router-dom";

import * as m from './style/MainContainerStyle'

const BaseURL = 'https://paytalk.github.io/Paytalk_webview';

const MainContainer = () => {
    const nav = useNavigate();

    

    return(
        <m.ContainerWrap >
            <m.ContainerArea>
                <m.MainTitle>
                    <p>OOO님 반갑습니다</p>
                    <p>새로운 구독상품을 가입해보세요!!</p>
                </m.MainTitle>
                <m.BoxArea>
                    <m.LeftBoxArea>
                        <p>20,000,000원</p>
                        <p>B - PAY 포인트</p>
                        </m.LeftBoxArea>
                    <m.RightBoxArea>
                        <m.ContentBox onClick={()=>nav(`/subscribe`)}>
                            <p>거래상품 요약</p>
                        </m.ContentBox>
                        <m.ContentBox onClick={()=>nav(`/report`)}>
                            <p>소비 리포트</p>
                        </m.ContentBox>
                    </m.RightBoxArea>
                </m.BoxArea>
                <m.Banner>
                    <p>이벤트 상품 소개</p>
                </m.Banner>
                <m.Flex>
                    <m.ContentBox><p>공과금</p></m.ContentBox>
                    <m.ContentBox><p>청구서</p></m.ContentBox>
                </m.Flex>
            </m.ContainerArea>
        </m.ContainerWrap>
    )
}

export default MainContainer;