import moment from "moment";
import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa6";

const ArticleTab = ({newsCollection}) => {
    return (
        <div>
            {/*=============== Top Card ================= */}
            <div className="">
                {newsCollection.slice(0, 1).map((news, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden w-full h-[360px] relative"
                    >
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
                                <p className="px-5 py-[10px] bg-[#E33E38] rounded-3xl text-white w-fit uppercase font-bold">
                                    {"Live"}
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
                ))}
            </div>
            {/*=============== latest news ================= */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium">Latest News</h2>
                <div className="mt-5">
                    {newsCollection.map((news, idx) => (
                        <div
                            key={idx}
                            className="flex mt-[10px] py-[10px] gap-5 "
                        >
                            <Image
                                width={245}
                                height={168}
                                alt="image Image"
                                className="w-[245px] h-[170px] object-cover rounded-xl"
                                src={news?.image}
                            />

                            <div className="">
                                <div className="flex items-center gap-5">
                                    <p className="text-[#969696]">
                                        <FaRegClock className="inline mr-2" />
                                        {moment(news?.timestamp).fromNow()}
                                    </p>
                                    <p className="px-3 py-[5px] bg-[#323232] rounded-3xl w-fit font-medium text-white text-sm">
                                        {"Asia Cup"}
                                    </p>
                                </div>
                                <h3 className="font-bold text-xl mt-[10px]">
                                    {news?.title}
                                </h3>
                                <p className="mt-[10px]">{news?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*=============== Cricket Analysis ================= */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium">Cricket Analysis</h2>
                <div className="mt-5">
                    {newsCollection.slice(0, 2).map((news, idx) => (
                        <div
                            key={idx}
                            className="flex mt-[10px] py-[10px] gap-5 "
                        >
                            <Image
                                width={245}
                                height={168}
                                alt="image Image"
                                className="w-[245px] h-[170px] object-cover rounded-xl"
                                src={news?.image}
                            />

                            <div className="">
                                <div className="flex items-center gap-5">
                                    <p className="text-[#969696]">
                                        <FaRegClock className="inline mr-2" />
                                        {moment(news?.timestamp).fromNow()}
                                    </p>
                                    <p className="px-3 py-[5px] bg-[#323232] rounded-3xl w-fit font-medium text-white text-sm">
                                        {"Asia Cup"}
                                    </p>
                                </div>
                                <h3 className="font-bold text-xl mt-[10px]">
                                    {news?.title}
                                </h3>
                                <p className="mt-[10px]">{news?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*=============== Cricket Stats ================= */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium">Cricket Stats</h2>
                <div className="mt-5">
                    {newsCollection.slice(0, 2).map((news, idx) => (
                        <div
                            key={idx}
                            className="flex mt-[10px] py-[10px] gap-5 "
                        >
                            <Image
                                width={245}
                                height={168}
                                alt="image Image"
                                className="w-[245px] h-[170px] object-cover rounded-xl"
                                src={news?.image}
                            />

                            <div className="">
                                <div className="flex items-center gap-5">
                                    <p className="text-[#969696]">
                                        <FaRegClock className="inline mr-2" />
                                        {moment(news?.timestamp).fromNow()}
                                    </p>
                                    <p className="px-3 py-[5px] bg-[#323232] rounded-3xl w-fit font-medium text-white text-sm">
                                        {"Asia Cup"}
                                    </p>
                                </div>
                                <h3 className="font-bold text-xl mt-[10px]">
                                    {news?.title}
                                </h3>
                                <p className="mt-[10px]">{news?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticleTab;
