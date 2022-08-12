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
                    <p>홍길동님 반갑습니다</p>
                    <p>새로운 구독상품을 가입해보세요!!</p>
                </m.MainTitle>
                <m.BoxArea>
                    <m.LeftBoxArea>
                        <p>20,000,000원</p>
                        <p>B - PAY 포인트</p>
                        <img src={`${BaseURL}`+'/img/Group 39.png'} alt="이미지" />
                        </m.LeftBoxArea>
                    <m.RightBoxArea>
                        <m.ContentBox left = '20vw' onClick={()=>nav(`/subscribe`)}>
                            <p>거래상품 요약</p>
                            <img src={`${BaseURL}`+'/img/Group 19.png'} alt="이미지" />
                        </m.ContentBox>
                        <m.ContentBox left = '16vw' onClick={()=>nav(`/report`)}>
                            <p>소비 리포트</p>
                            <img src={`${BaseURL}`+'/img/bell (light).png'} alt="이미지" />
                        </m.ContentBox>
                    </m.RightBoxArea>
                </m.BoxArea>
                <m.Banner>
                    <p>이벤트 상품 소개</p>
                </m.Banner>
                <m.Flex>
                    <m.ContentBox left='20vw'><p>공과금</p>
                    <img src={`${BaseURL}`+'/img/Group 34-1.png'} alt="이미지" />
                    </m.ContentBox>
                    <m.ContentBox left='20vw'><p>청구서</p>
                    <img src={`${BaseURL}`+'/img/Group 14.png'} alt="이미지" />
                    </m.ContentBox>
                </m.Flex>
            </m.ContainerArea>
        </m.ContainerWrap>
    )
}

export default MainContainer;