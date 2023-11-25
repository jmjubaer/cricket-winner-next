import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoMdListBox } from "react-icons/io";
import { GiThink } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import moment from "moment";
import Image from "next/image";
import ArticleTab from "./ArticleTab";
import PredictionTab from "./PredictionTab";
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
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none rounded_left">
                            <IoMdListBox className="inline text-2xl mr-1" />
                            Article
                        </Tab>
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none">
                            <GiThink className="inline text-2xl mr-1" />
                            Prediction
                        </Tab>
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none rounded_right">
                            <MdVideoLibrary className="inline text-2xl mr-1" />
                            Videos
                        </Tab>
                    </TabList>
                </div>

                {/*================== Article Tab -====================== */}
                <TabPanel>
                    <ArticleTab newsCollection={newsCollection}></ArticleTab>
                </TabPanel>

                {/*================= Prediction Tab -=================== */}
                <TabPanel>
                    <PredictionTab></PredictionTab>
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
