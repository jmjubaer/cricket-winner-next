import React from "react";
import sponsor from "@/assets/Home/Sponsered.png";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { MdSportsCricket } from "react-icons/md";
import { FaTrophy, FaUserFriends } from "react-icons/fa";
import player_1 from "@/assets/Home/virat.png";
import player_2 from "@/assets/Home/player.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const RankTable = () => {
    return (
        <div className="border">
            {/* sponsor banner */}
            <a target="_blank" href="#" className="w-full z-10">
                <Image
                    src={sponsor}
                    className="w-full rounded-t-2xl z-10"
                    alt="Sponsor header"
                />
            </a>
            <div className="bg-[#3391B2] py-4 px-4 relative overflow-hidden">
                <div className="">
                    <h3 className="text-white font-bold">
                        League expert ranking
                    </h3>
                    <ul className="text-white mt-2 z-20">
                        <li className="flex gap-1 items-center text-sm mt-1">
                            <FaCalendarDays className="text-lg" />
                            <span>Nov. 2023</span>
                        </li>
                        <li className="flex gap-1 items-center text-sm mt-1">
                            <MdSportsCricket className="text-lg" />
                            <span>Total Match 250</span>
                        </li>
                        <li className="flex gap-1 items-center text-sm mt-1">
                            <FaUserFriends className="text-lg" />
                            <span>Participant 11840</span>
                        </li>
                    </ul>
                </div>
                <Image
                    src={player_1}
                    alt="player image"
                    className="absolute bottom-0 z-10 right-0"
                />
                <Image
                    src={player_2}
                    alt="player image"
                    className="absolute bottom-0 z-10 right-16"
                />

                {/* Vector Image for overlay */}
                <MdSportsCricket className="text-8xl text-white text-opacity-20 absolute -top-6 -left-4" />
                <MdSportsCricket className="text-8xl text-white text-opacity-20 absolute -bottom-9 left-[40%]" />
            </div>

            {/* Table */}
            <div className="">
                <Tabs>
                    <div className="">
                        <TabList className="grid match_tab w-full grid-cols-2 text-center">
                            <Tab className="border-0 border-b-2 cursor-pointer px-3 sm:px-5 py-3 outline-none">
                                Today
                            </Tab>
                            <Tab className="border-0 border-b-2 cursor-pointer px-3 sm:px-5 py-3 outline-none">
                                Tomorrow
                            </Tab>
                        </TabList>
                    </div>

                    <TabPanel>

                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-3xl mt-10 text-center text-[#969696]">
                            No Match Available
                        </h2>
                    </TabPanel>
                </Tabs>
            </div>

            {/* Leaderboard button */}
            <button className="flex items-center px-5 py-[10px] rounded-full border mx-auto my-4 font-medium gap-2">
                <FaTrophy className="text-xl"/>
                <span>View Leaderboard</span>
            </button>
            {/* sponsor banner */}
            <a target="_blank" href="#" className="w-full z-10">
                <Image
                    src={sponsor}
                    className="w-full rounded-b-2xl z-10"
                    alt="Sponsor header"
                />
            </a>
        </div>
    );
};

export default RankTable;
