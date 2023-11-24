import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoMdListBox } from "react-icons/io";
import { GiThink } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
import TopContent from "./TopContent";
import Board from "@/assets/Home/Board.png"
import Image from "next/image";
const MainContent = () => {
    return (
        <section className="container grid grid-cols-12 gap-5">
            <div className="col-span-8">
                <TopContent></TopContent>
            </div>
            <div className="col-span-4">
                <Image src={Board} alt="Ad" className="w-full"/>
            </div>
        </section>
    );
};

export default MainContent;
