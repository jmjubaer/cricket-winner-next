"use client";
import VerticalNewsCardMedium from "@/components/Card/VerticalNewsCardMedium";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";

const ArticleTab = () => {
    const [newses, setNewses] = useState([]);
    useEffect(() => {
        (async () => {
            // News data fetch ===
            const newsRes = await fetch("/api/news");
            const news = await newsRes.json();
            console.log(news);
            setNewses(news);
        })();
    }, []);
    return (
        <div>
            {/*=============== Top Card ================= */}
            <div className="">
                {newses.slice(0, 1).map((news, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden w-full h-[200px] sm:h-[360px] relative"
                    >
                        <Image
                            width={750}
                            height={350}
                            alt="image Image"
                            className="w-full h-full object-cover"
                            src={news?.image}
                        />

                        {/* Overlay */}
                        <div className="absolute w-full h-full top-0 left-0 from-[#000] to-transparent to-60% bg-gradient-to-t"></div>

                        {/* details */}

                        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-11/12">
                            <div className="flex items-center gap-5">
                                <p className="px-2 sm:px-5 py-1 sm:py-[10px] bg-[#E33E38] rounded-2xl sm:rounded-3xl text-white w-fit sm:uppercase font-bold">
                                    {"Live"}
                                </p>
                                <p className="text-white">
                                    <FaRegClock className="inline mr-2" />
                                    {moment(news?.timestamp).fromNow()}
                                </p>
                            </div>
                            <Link href={`/news/${news?.id}`} className="font-bold sm:text-xl mt-3 text-white">
                                {news?.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {/*=============== latest news ================= */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium">latest news</h2>
                <div className="mt-5">
                    {newses.map((news) => (
                        <VerticalNewsCardMedium
                            key={news?.id}
                            news={news}
                        ></VerticalNewsCardMedium>
                    ))}
                </div>
            </div>

            {/*=============== Cricket Analysis ================= */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium">Cricket Analysis</h2>
                <div className="mt-5">
                    {newses.slice(0, 2).map((news) => (
                        <VerticalNewsCardMedium
                            key={news?.id}
                            news={news}
                        ></VerticalNewsCardMedium>
                    ))}
                </div>
            </div>

            {/*=============== Cricket Stats ================= */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium">Cricket Stats</h2>
                <div className="mt-5">
                    {newses.slice(0, 2).map((news) => (
                        <VerticalNewsCardMedium
                            key={news?.id}
                            news={news}
                        ></VerticalNewsCardMedium>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticleTab;
