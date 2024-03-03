"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import VerticalNewsCard from "@/components/Card/VerticalNewsCard";
const LeagueNews = () => {
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
    return (
        <div className="overflow-hidden my-2">
            <h2 className="font-medium sm:text-2xl w-[70%] my-5">
                Indian premiere league 2023
            </h2>
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
                {news.map((news) => (
                    <SwiperSlide key={news?.id}>
                        <VerticalNewsCard news={news}></VerticalNewsCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LeagueNews;
