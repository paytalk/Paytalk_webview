import Slider from "react-slick";
import * as s from "./style/SlickSliderStyle";
import img1 from "../Resource/Images/1.svg";
import img2 from "../Resource/Images/2.svg";
import img3 from "../Resource/Images/3.svg";
import img4 from "../Resource/Images/4.svg";
const SlickSlider = () => {
    const setting = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false,
        cssEase: "linear"
    };

    return (
        <s.StoreBanner>
            <Slider {...setting}>
                <s.StoreBanner>
                    <img src={img1} alt="이미지" />
                </s.StoreBanner>
                <s.StoreBanner>
                    <img src={img2} alt="이미지" />
                </s.StoreBanner>
                <s.StoreBanner>
                    <img src={img3} alt="이미지" />
                </s.StoreBanner>
                <s.StoreBanner>
                    <img src={img4} alt="이미지" />
                </s.StoreBanner>
            </Slider>
        </s.StoreBanner>
    );
};

export default SlickSlider;
