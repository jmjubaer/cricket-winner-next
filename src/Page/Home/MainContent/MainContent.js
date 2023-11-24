import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoMdListBox } from "react-icons/io";
import { GiThink } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
import TopContent from "./TopContent";
import Board from "@/assets/Home/Board.png"
import Image from "next/image";
import WorldCupNews from "./WorldCupNews";
import LeagueNews from "./LeagueNews";
import TodayNews from "./TodayNews";
const MainContent = () => {
    return (
        <section className="container grid grid-cols-12 gap-5">
            <div className="col-span-8">
                <TopContent></TopContent>
                <WorldCupNews></WorldCupNews>
                <LeagueNews></LeagueNews>
                <TodayNews></TodayNews>
            </div>
            <div className="col-span-4">
                <Image src={Board} alt="Ad" className="w-full"/>
            </div>
        </section>
    );
};

export default MainContent;
