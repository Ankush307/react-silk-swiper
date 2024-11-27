import React from 'react';
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonHeading from './common/CommonHeading';
import SliderImg3 from '../assets/image/png/slider-img-3.png';

const Silk = () => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-500'>
            <div className="container mx-auto">
                <CommonHeading SectionHeading={'Slider'} SectionBlackHeading={'Demo'}/>
                <Slider {...settings}>
                    <div>
                        <img className='mx-auto w-[490px]' src={SliderImg3} alt="img"
                        />
                    </div>
                    <div>
                        <img className='mx-auto w-[490px]' src={SliderImg3} alt="img"
                        />
                    </div>
                    <div>
                        <img className='mx-auto w-[490px]' src={SliderImg3} alt="img"
                        />
                    </div>
                    <div>
                        <img className='mx-auto w-[490px]' src={SliderImg3} alt="img" />
                    </div>
                    <div>
                        <img className='mx-auto w-[490px]' src={SliderImg3} alt="img"
                        />
                    </div>
                    <div>
                        <img className='mx-auto w-[490px]' src={SliderImg3} alt="img"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Silk;
