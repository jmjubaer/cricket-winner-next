"use client";
import NewsCardLarge from "@/components/Card/NewsCardLarge";
import React, { useEffect, useState } from "react";

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
        <section className="container grid grid-cols-3 gap-5 py-5">
            {/* Left content */}
            <div className="bg-white rounded-[20px] col-span-2 p-5">
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
                <div className="grid sm:grid-cols-2 gap-3 gap-y-5 my-5">
                    {news.map((singleNews, idx) => (
                        <NewsCardLarge
                            key={idx}
                            singleNews={singleNews}
                        ></NewsCardLarge>
                    ))}
                </div>
                <div
                    className={`bg-[#eeee]  rounded-lg w-full h-[120px] flex items-center justify-center my-5`}
                >
                    <p className="text-5xl text-black text-opacity-10">
                        Ad Here
                    </p>
                </div>
            </div>
            {/* Right content */}
            <div className=""></div>
        </section>
    );
};

export default NewsPage;
