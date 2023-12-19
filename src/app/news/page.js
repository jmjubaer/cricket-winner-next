"use client";
import NewsCardLarge from "@/components/Card/NewsCardLarge";
import VerticalNewsCard from "@/components/Card/VerticalNewsCard";
import VerticalNewsCardLarge from "@/components/Card/VerticalNewsCardLarge";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import Link from "next/link";
import moment from "moment";
import SuggestedMatch from "@/components/SuggestedMatch";
import LatestNewsSection from "@/components/LatestNewsSection";
import SuggestedNewsSection from "@/components/SuggestedNewsSection";
import TrendingNewsSection from "@/components/TrendingNewsSection";

const NewsPage = () => {
    // Todo: identify the video and add video paly fuction
    const [showFull, setShowFull] = useState(false);
    const [news, setNews] = useState([]);
    useEffect(() => {
        (async () => {
            // News data fetch ===
            const newsRes = await fetch("/api/news");
            const news = await newsRes.json();
            console.log(news);
            setNews(news);
        })();
    }, []);
    return (
        <>
            <div className="container grid grid-cols-3 gap-5 py-5">
                {/* Left content */}
                <div className="bg-white rounded-[20px] col-span-3 md:col-span-2 p-5">
                    <h2 className="text-3xl font-bold">Cricket News</h2>
                    {/* Todo: change the demy text */}
                    <p className="mt-[10px]">
                        {showFull
                            ? "Get the latest news about the cricket world and know what is  happening, the biggest matches, losses, wins, and social media news. Follow the cricket stars and their latest achievements with our cricket news. Get the latest news about the cricket world and know what is happening, the biggest matches, losses, wins, and social media news. Follow the cricket stars and their latest achievements with our cricket news."
                            : "Get the latest news about the cricket world and know what is happening, the biggest matches, losses, wins, and social media news. Follow the cricket stars and their latest achievements with our cricket news."}
                        <button
                            onClick={() => setShowFull(!showFull)}
                            className="font-bold text-[#1BA2E8] ml-1"
                        >
                            {showFull ? "Show less" : "Read more"}
                        </button>
                    </p>
                    <div className="grid lg:grid-cols-2 gap-3 gap-y-5 my-5">
                        {news.map((singleNews, idx) => (
                            <NewsCardLarge
                                key={idx}
                                singleNews={singleNews}
                            ></NewsCardLarge>
                        ))}
                    </div>
                    {/* Ad Script here */}
                    <div
                        className={`bg-[#eeee]  rounded-lg w-full h-[120px] flex items-center justify-center my-5`}
                    >
                        <p className="text-5xl text-black text-opacity-10">
                            Ad Here
                        </p>
                    </div>

                    {/* Vertical news card */}
                    {/* Todo: Change data */}
                    <div className="">
                        {news?.map((singleNews) => (
                            <VerticalNewsCardLarge
                                key={singleNews?.id}
                                news={singleNews}
                            ></VerticalNewsCardLarge>
                        ))}
                    </div>

                    {/* Ad Script here */}
                    <div
                        className={`bg-[#eeee]  rounded-lg w-full h-[120px] flex items-center justify-center my-5`}
                    >
                        <p className="text-5xl text-black text-opacity-10">
                            Ad Here
                        </p>
                    </div>

                    {/* Latest news section */}
                    {/* Todo: Change data */}
                    <div className="overflow-hidden my-2">
                        <h2 className="font-medium sm:text-2xl my-5 w-[70%]">
                            {"Today's Cricket Match Predictions"}
                        </h2>
                        <Swiper
                            // slidesPerView={1}
                            breakpoints={{
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },
                                1024: {
                                    slidesPerView: 2,
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
                                    <VerticalNewsCard
                                        news={news}
                                    ></VerticalNewsCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Suggested news section */}
                    {/* Todo: Change data */}
                    <div className="overflow-hidden my-2">
                        <h2 className="font-medium sm:text-2xl my-5 w-[70%]">
                            {"Suggested News"}
                        </h2>
                        <div className="">
                            {news?.slice(0, 3)?.map((singleNews) => (
                                <VerticalN  ewsCardLarge
                                    key={singleNews?.id}
                                    news={singleNews}
                                ></VerticalN>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Right content */}
                <div className="overflow-hidden col-span-3 md:col-span-1">
                    {/* Suggested Match */}
                    <SuggestedMatch></SuggestedMatch>
                    {/* Latest News */}
                    <LatestNewsSection></LatestNewsSection>

                    {/* Ad Script here */}
                    <div
                        className={`bg-[#eeee]  rounded-lg w-full h-[490px] flex items-center justify-center my-5`}
                    >
                        <p className="text-5xl text-black text-opacity-10">
                            Ad Here
                        </p>
                    </div>
                    {/* Trending News */}
                    <TrendingNewsSection></TrendingNewsSection>

                    {/* Ad Script here */}
                    <div
                        className={`bg-[#eeee]  rounded-lg w-full h-[250px] flex items-center justify-center my-5`}
                    >
                        <p className="text-5xl text-black text-opacity-10">
                            Ad Here
                        </p>
                    </div>
                    {/* Suggested News */}
                    <SuggestedNewsSection></SuggestedNewsSection>
                    {/* Ad Script here */}
                    <div
                        className={`bg-[#eeee]  rounded-lg w-full h-[490px] flex items-center justify-center my-5`}
                    >
                        <p className="text-5xl text-black text-opacity-10">
                            Ad Here
                        </p>
                    </div>
                </div>
            </div>
            {/* Ad Script here */}
            <div
                className={`bg-[#eeee] rounded-lg w-full h-[190px] items-center justify-center my-5 hidden md:flex`}
            >
                <p className="text-5xl text-black text-opacity-10">Ad Here</p>
            </div>
        </>
    );
};

export default NewsPage;
