import React from 'react';
import CommonHeading from './common/CommonHeading';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardSwiper = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black ">
            <div className="container">
                <CommonHeading SectionHeading={'Swiper'} SectionWhiteHeading={'Demo'} />
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            Slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            Slide 2
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            Slide 3
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            Slide 4
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            Slide 5
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default CardSwiper;
