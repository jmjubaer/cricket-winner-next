import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoMdListBox } from "react-icons/io";
import { GiThink } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
import TopContent from "./TopContent";
import Board from "@/assets/Home/Board.png";
import Image from "next/image";
import WorldCupNews from "./WorldCupNews";
import LeagueNews from "./LeagueNews";
import TodayNews from "./TodayNews";
import MatchCard from "@/components/Card/MatchCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RankTable from "./RankTable";
import SuggestedMatch from "@/components/SuggestedMatch";
const MainContent = () => {
    const match = [
        {
            MatchTitle: "Asia cup (Final)",
            status: "Upcoming",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
            team: {
                team_1: {
                    teamName: "india",
                    flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                },
                team_2: {
                    teamName: "Australia",
                    flag: "https://media.istockphoto.com/id/1340727526/vector/flags-of-australia-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=tyL_HkGKsFGnwMh41AdnfXSke7BlUaVNJewEgWzDYLQ=",
                },
            },
            startingTime:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        },
        {
            MatchTitle: "Asia cup (Final)",
            status: "Finished",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
            team: {
                team_1: {
                    teamName: "Sri Lanka",
                    flag: "https://media.istockphoto.com/id/1063902464/vector/flag-of-sri-lanka.jpg?s=612x612&w=0&k=20&c=hggRyqTyT8qmG6LbCU--IexdL-wnkzsBs-KCh-WbngM=",
                },
                team_2: {
                    teamName: "Australia",
                    flag: "https://media.istockphoto.com/id/1340727526/vector/flags-of-australia-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=tyL_HkGKsFGnwMh41AdnfXSke7BlUaVNJewEgWzDYLQ=",
                },
            },
            startingTime:
                "Sun Nov 18 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        },
        {
            MatchTitle: "Asia cup (Final)",
            status: "Live",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
            team: {
                team_1: {
                    teamName: "india",
                    flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                },
                team_2: {
                    teamName: "Pakistan",
                    flag: "https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY=",
                },
            },
            startingTime:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        },
        {
            MatchTitle: "Asia cup (Final)",
            status: "Live",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
            team: {
                team_1: {
                    teamName: "india",
                    flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                },
                team_2: {
                    teamName: "Pakistan",
                    flag: "https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY=",
                },
            },
            startingTime:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        },
        {
            MatchTitle: "Asia cup (Final)",
            status: "Live",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
            team: {
                team_1: {
                    teamName: "india",
                    flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                },
                team_2: {
                    teamName: "Pakistan",
                    flag: "https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY=",
                },
            },
            startingTime:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        },
    ];
    return (
        <section className="container grid grid-cols-12 mb-5 gap-5">
            {/* left content */}
            <div className="col-span-12 lg:col-span-8 bg-white p-5 rounded-xl">
                {/*======== Mobile content =================*/}
                <div className="w-full block lg:hidden my-5">
                    <RankTable></RankTable>
                </div>

                {/* left content */}
                <TopContent></TopContent>
                <WorldCupNews></WorldCupNews>
                <LeagueNews></LeagueNews>
                <TodayNews></TodayNews>

                {/*======== Mobile content =================*/}

                <div
                    className={`bg-[#eeee]  rounded-lg w-full h-48 flex items-center justify-center my-5 lg:hidden`}
                >
                    <p className="text-5xl text-black text-opacity-10">
                        Ad Here
                    </p>
                </div>
                <div className="w-full block lg:hidden my-5">
                    <RankTable></RankTable>
                </div>
            </div>

            {/* Right Content */}
            <div className="hidden lg:col-span-4 lg:flex flex-col justify-between overflow-hidden">
                {/* <Image src={Board} alt="Ad" className="w-full" /> */}
                <RankTable></RankTable>
                <div
                    className={`bg-[#eeee]  rounded-lg w-full h-full flex items-center justify-center my-5 overflow-hidden`}
                >
                    <p className="text-5xl text-black text-opacity-10">
                        Ad Here
                    </p>
                </div>

                {/* <Image src={Board} alt="Ad" className="w-full" /> */}
                <RankTable></RankTable>

                {/* Suggest match */}
                <SuggestedMatch></SuggestedMatch>
                <div
                    className={`bg-[#eeee]  rounded-lg w-full h-full flex items-center justify-center  my-5`}
                >
                    <p className="text-5xl text-black text-opacity-10">
                        Ad Here
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MainContent;
