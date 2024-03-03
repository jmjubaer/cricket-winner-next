"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import moment from "moment";
import VerticalNewsCard from "@/components/Card/VerticalNewsCard";
import Link from "next/link";

const NewsSection = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        (async () => {
            // News data fetch ===
            const newsRes = await fetch("/api/news");
            const news = await newsRes.json();
            // console.log(news);
            setNews(news);
        })();
    }, []);
    console.log(news);
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-8">
                    {/* Slider area */}
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper mt-5"
                    >
                        {news?.slice(0, 3)?.map((news, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="rounded-xl overflow-hidden w-full h-[205px] sm:h-[360px] relative">
                                    <Image
                                        width={750}
                                        height={350}
                                        alt="image Image"
                                        className="w-full h-[205px] sm:h-[360px] object-cover"
                                        src={news?.image}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute w-full h-full top-0 left-0 from-[#000] to-transparent to-60% bg-gradient-to-t"></div>

                                    {/* details */}

                                    <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-11/12">
                                        <div className="flex items-center gap-2 sm:gap-5">
                                            <p className="px-2 sm:px-5 py-1 sm:py-[10px] bg-[#FFC305] rounded-2xl sm:rounded-3xl font-medium w-fit">
                                                {news?.country}
                                            </p>
                                            <p className="text-white">
                                                <FaRegClock className="inline mr-2" />
                                                {moment(
                                                    news?.timestamp
                                                ).fromNow()}
                                            </p>
                                        </div>
                                        <Link href={`/news/${news?.id}`} className="font-bold sm:text-xl sm:mt-3 text-white">
                                            {news?.title}
                                        </Link>
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
                                670: {
                                    slidesPerView: 2,
                                    // spaceBetween: 10,
                                },
                                1220: {
                                    slidesPerView: 3,
                                    // spaceBetween: 20,
                                },
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            className="newsSlider mt-5"
                        >
                            {news.map((news) => (
                                <SwiperSlide key={news?.id}>
                                    <VerticalNewsCard
                                        news={news}
                                    ></VerticalNewsCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="hidden md:block md:col-span-4">
                    {" "}
                    <div
                        className={`bg-[#eeee]  rounded-lg w-full h-full flex items-center justify-center  my-5`}
                    >
                        <p className="text-5xl text-black text-opacity-10">
                            Ad Here
                        </p>
                    </div>
                </div>
            </div>

            <div
                className={`bg-[#eeee]  rounded-lg w-full h-[362px] md:h-48 flex items-center justify-center mt-10`}
            >
                <p className="text-5xl text-black text-opacity-10">Ad Here</p>
            </div>
        </div>
    );
};

export default NewsSection;
