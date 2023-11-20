import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import moment from "moment";

const NewsSection = () => {
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
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-8">
                    {/* Slider area */}
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[ Pagination, Autoplay]}
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

                                    <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-11/12">
                                        <div className="flex items-center gap-5">
                                            <p className="px-5 py-[10px] bg-[#FFC305] rounded-3xl font-medium w-fit">
                                                {news?.country}
                                            </p>
                                            <p className="text-white">
                                                <FaRegClock className="inline mr-2" />
                                                {moment(
                                                    news?.timestamp
                                                ).fromNow()}
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

                    {/* Latest News */}
                    <div className="overflow-hidden">
                        <h2 className="font-medium text-2xl my-5">
                            Latest News
                        </h2>
                        <Swiper
                            // slidesPerView={1}
                            breakpoints={{
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1220: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Navigation]}
                            className="newsSlider mt-5"
                        >
                            {newsCollection.map((news, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="p-3 mx-auto">
                                        <Image
                                            width={250}
                                            height={150}
                                            alt="news Image"
                                            className="w-full h-[147px] object-cover rounded-xl"
                                            src={news?.image}
                                        />
                                        <p className="text-[#969696] my-3">
                                            <FaRegClock className="inline mr-2" />
                                            {moment(news?.timestamp).fromNow()}
                                        </p>
                                        <p className="font-bold text-sm">
                                            {news?.title}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="md:col-span-4">{/* Ad Script */}</div>
            </div>

            <div className="">{/* Ad Script */}</div>
        </div>
    );
};

export default NewsSection;
