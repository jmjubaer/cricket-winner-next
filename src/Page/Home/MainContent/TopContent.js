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
import VideosTab from "./VideosTab";
const TopContent = () => {
    return (
        <div>
            <Tabs>
                <div className="flex justify-center">
                    <TabList className="flex mb-5 content_tab text-[#323232] font-medium">
                        <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none rounded_left px-3">
                            <IoMdListBox className="inline text-lg sm:text-2xl mr-1" />
                            Article
                        </Tab>
                        <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none px-3">
                            <GiThink className="inline text-lg sm:text-2xl mr-1" />
                            Prediction
                        </Tab>
                        <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none rounded_right px-3">
                            <MdVideoLibrary className="inline text-lg sm:text-2xl mr-1" />
                            Videos
                        </Tab>
                    </TabList>
                </div>

                {/*================== Article Tab -====================== */}
                <TabPanel>
                    <ArticleTab></ArticleTab>
                </TabPanel>

                {/*================= Prediction Tab -=================== */}
                <TabPanel>
                    <PredictionTab></PredictionTab>
                </TabPanel>

                {/*================= Videos Tab -==================== */}
                <TabPanel>
                    <VideosTab></VideosTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TopContent;
