import React from "react";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
const LeagueNews = () => {
    const newsCollection = [
        {
            country: "England",
            image: "https://i.ibb.co/xz9njP6/image-6.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Waqar Younis praises Virat Kohli as a 'crazy man' who will shatter records beyond imagination.",
            description: "",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/QK5wY3T/image-9.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Cricket Australia ICC World Cup 2023 Squad Announced",
            description: "",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "New Zealand cricket team: Strength And Weakness Of Kane Williamson",
            description: "",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "New Zealand cricket team: Strength And Weakness Of Kane Williamson",
            description: "",
        },
    ];
    return (
        <div className="overflow-hidden my-2">
            <h2 className="font-medium text-2xl my-5">Indian premiere league 2023</h2>
            <Swiper
                // slidesPerView={1}
                breakpoints={{
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1220: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                }}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation]}
                className="newsSlider mt-5"
            >
                {newsCollection.map((news, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="p-[10px] mx-auto">
                            <Image
                                width={250}
                                height={150}
                                alt="news Image"
                                className="w-full h-[158px] object-cover rounded-xl"
                                src={news?.image}
                            />
                            <p className="text-[#969696] my-3">
                                <FaRegClock className="inline mr-2" />
                                {moment(news?.timestamp).fromNow()}
                            </p>
                            <p className="font-bold text-sm">{news?.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LeagueNews;
