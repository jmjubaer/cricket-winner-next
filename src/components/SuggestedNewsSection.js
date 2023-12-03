"use client"
import React, { useEffect, useState } from "react";
import NewsCardSmall from "./Card/NewsCardSmall";

const SuggestedNewsSection = () => {
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
        <div className="">
            <h2 className="text-2xl font-medium capitalize">latest news</h2>
            <div className="mt-[10px]">
                {news?.slice(0, 3)?.map((singleNews) => (
                    <NewsCardSmall
                        key={singleNews?.singleNews}
                        singleNews={singleNews}
                    ></NewsCardSmall>
                ))}
            </div>
        </div>
    );
};

export default SuggestedNewsSection;
