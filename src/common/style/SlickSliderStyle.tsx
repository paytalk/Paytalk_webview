import styled from "styled-components";
export const StoreBannerArea = styled.div`
    width: 100%;
    height: 16.8rem;
`;
export const StoreBanner = styled.div`
    width: 100%;
    overflow: hidden;
    height: 16.8rem;
    div.slick-slider {
        height: 16.8rem;
        div.slick-list {
            height: 16.8rem;
            div.slick-track {
                height: 16.8rem;
                display: flex;
            }
        }
    }
    ul.slick-dots {
        transform: translateY(-2.4rem);
        display: flex !important;
        justify-content: center;
        li {
            width: 3rem;
            height: 3rem;

            button {
                font-size: 0;
                width: 0.9rem;
                height: 0.9rem;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.1);
            }
        }
        li.slick-active {
            button {
                background: #fff;
            }
        }
    }
    img {
        width: 100%;
    }
`;
