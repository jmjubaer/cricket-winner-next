import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import moment from "moment";
const TrendingNews = () => {
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
    ];
    return (
        <div className="grid sm:grid-cols-3 container">
            {/* Slider area */} 
            <div className="sm:col-span-3 lg:col-span-2 mt-5 hidden sm:block">
                <h2 className="text-2xl font-medium my-2">Featured News</h2>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    pagination={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper mt-5"
                >
                    {newsCollection?.slice(0, 3)?.map((news, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="rounded-xl overflow-hidden w-full h-[360px] relative">
                                <Image
                                    width={750}
                                    height={350}
                                    alt="image Image"
                                    className="w-full h-[360px] object-cover"
                                    src={news?.image}
                                />

                                {/* Overlay */}
                                <div className="absolute w-full h-full top-0 left-0 from-[#000] to-transparent to-60% bg-gradient-to-t"></div>

                                {/* details */}

                                <div className="absolute bottom-0 left-0 w-full m-10">
                                    <div className="flex items-center gap-5">
                                        <p className="px-5 py-[10px] bg-[#FFC305] rounded-3xl font-medium w-fit">
                                            {news?.country}
                                        </p>
                                        <p className="text-white">
                                            <FaRegClock className="inline mr-2" />
                                            {moment(news?.timestamp).fromNow()}
                                        </p>
                                    </div>
                                    <p className="font-bold text-xl mt-3 text-white">
                                        {news?.title}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="mt-5 col-span-3 lg:col-span-1">
                <h2 className="text-2xl font-medium my-2">Featured News</h2>
                {newsCollection?.map((news,idx) => (
                    <div key={idx} className="flex gap-2 p-3">
                        <Image
                            width={250}
                            height={150}
                            alt="news Image"
                            className="w-32 h-28 object-cover rounded-xl"
                            src={news?.image}
                        />
                        <div className="">
                            <p className="text-[#969696]">
                                <FaRegClock className="inline mr-2" />
                                {moment(news?.timestamp).fromNow()}
                            </p>
                            <p className="font-bold text-sm mt-1">{news?.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ad Script */}
        </div>
    );
};

export default TrendingNews;
