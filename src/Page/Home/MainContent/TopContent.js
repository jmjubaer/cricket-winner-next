import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoMdListBox } from "react-icons/io";
import { GiThink } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import moment from "moment";
import Image from "next/image";
const TopContent = () => {
    const newsCollection = [
        {
            country: "England",
            image: "https://i.ibb.co/xz9njP6/image-6.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Waqar Younis praises Virat Kohli as a 'crazy man'. who will shatter records.",
            description:
                "The Indian opener recently smashed a double hundred for Northamptonshire against Somerset in a one-day encounter, earning his moment after what has been a tough time...",
            tournamentName: "Asia Cup",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/QK5wY3T/image-9.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Cricket Australia ICC World Cup 2023 Squad Announced",
            description:
                "Virat Kohli is the fittest Indian cricketer and the recent BCCI report revealed that he never visited the National Cricket Academy in Bengaluru for fitness related issues in...",
            tournamentName: "Asia Cup",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "New Zealand cricket team: Strength And Weakness Of Kane Williamson",
            description:
                "Brendon McCullum has become the second man to get to the 9000-run mark in Twenty20 cricket, getting to the milestone during the course of his whirlwind 27-ball 43 for Royal...",
            tournamentName: "Asia Cup",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "ICC Cricket World Cup 2015: Top 10 performances",
            description:
                "It was a moment for the ages. With Australian left-arm quick Mitchell Starc ripping through the tail order at the other end, Kane Williamson wrote his name into BLACKCAPS folklore ...",
            tournamentName: "Asia Cup",
        },
    ];
    return (
        <div>
            <Tabs>
                <div className="flex justify-center">
                    <TabList className="flex my-5 content_tab text-[#323232] font-medium">
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none rounded-l-full">
                            <IoMdListBox className="inline text-2xl mr-1" />
                            Article
                        </Tab>
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none">
                            <GiThink className="inline text-2xl mr-1" />
                            Prediction
                        </Tab>
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none rounded-r-full">
                            <MdVideoLibrary className="inline text-2xl mr-1" />
                            Videos
                        </Tab>
                    </TabList>
                </div>

                {/*================== Article Tab -====================== */}
                <TabPanel>
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
                                                {moment(
                                                    news?.timestamp
                                                ).fromNow()}
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
                            {newsCollection.slice(0,2).map((news, idx) => (
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
                                                {moment(
                                                    news?.timestamp
                                                ).fromNow()}
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
                            {newsCollection.slice(0,2).map((news, idx) => (
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
                                                {moment(
                                                    news?.timestamp
                                                ).fromNow()}
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
                </TabPanel>

                {/*================= Prediction Tab -=================== */}
                <TabPanel>
                    <h2 className="text-3xl mt-10 text-center uppercase text-[#969696]">
                        NO Prediction CONTENT AVAIlABLE
                    </h2>
                </TabPanel>

                {/*================= Videos Tab -==================== */}
                <TabPanel>
                    <h2 className="text-3xl uppercase mt-10 text-center text-[#969696]">
                        NO Videos AVAIlABLE
                    </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TopContent;
