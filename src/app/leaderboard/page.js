"use client";
import VectorBg from "@/components/VectorBg";
import Image from "next/image";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import Select from "react-select";
const LeaderBoardPage = () => {
    const [year, setYear] = useState(null);
    const [league, setLeague] = useState(null);
    const [format, setFormat] = useState(null);
    const usersInfo = [
        {
            name: "Phoenix Baker",
            image: "https://i.ibb.co/kKtSzMP/my-image.gif",
            win: 10,
            loss: 5,
            accuracy: 25,
        },
        {
            name: "Olivia Rhye",
            image: "https://i.ibb.co/ZBHHzfC/istockphoto-1224641458-612x612.jpg",
            win: 30,
            loss: 15,
            accuracy: 80,
        },
        {
            name: "Phoenix Baker",
            image: "https://i.ibb.co/VCzddGZ/login-bg.jpg",
            win: 45,
            loss: 10,
            accuracy: 55,
        },
        {
            name: "Olivia Rhye",
            image: "https://i.ibb.co/1M9VFxq/shiful.gif",
            win: 50,
            loss: 8,
            accuracy: 75,
        },
        {
            name: "Phoenix Baker",
            image: "https://i.ibb.co/z43WCJV/banner-1.jpg",
            win: 85,
            loss: 50,
            accuracy: 45,
        },
        {
            name: "Olivia Rhye",
            image: "https://i.ibb.co/hK7QMCM/chef-6.jpg",
            win: 80,
            loss: 50,
            accuracy: 15,
        },
        {
            name: "Phoenix Baker",
            image: "https://i.ibb.co/ck3p02f/chef-4.jpg",
            win: 75,
            loss: 12,
            accuracy: 45,
        },
        {
            name: "Olivia Rhye",
            image: "https://i.ibb.co/kKtSzMP/my-image.gif",
            win: 10,
            loss: 5,
            accuracy: 25,
        },
        {
            name: "Phoenix Baker",
            image: "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=",
            win: 40,
            loss: 15,
            accuracy: 65,
        },
        {
            name: "Jack Leo",
            image: "https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=612x612&w=0&k=20&c=NtTebZxpAfw964hJJut8WFa__eZEfO07CAKdqeFBrFU=",
            win: 80,
            loss: 51,
            accuracy: 75,
        },
        {
            name: "Mia Kelly",
            image: "https://media.istockphoto.com/id/1473323104/photo/handsome-mid-adult-man-dressed-in-denim-shirt-screaming-and-cheerfully-pumping-fist-while.jpg?s=612x612&w=0&k=20&c=KUPCm3h2v3lgJbuRQFIWWDg95Fwkgjsta5OzmmscZHE=",
            win: 90,
            loss: 15,
            accuracy: 85,
        },
        {
            name: "Leo Kelly",
            image: "https://media.istockphoto.com/id/1437931505/photo/businessman-digital-tablet-or-strategy-planning-in-hotel-conference-lobby-or-airport-travel.jpg?s=612x612&w=0&k=20&c=OGRd22Usakx9wHTQsKto0qagIlH38sWDPEmmmXcIBSQ=",
            win: 70,
            loss: 50,
            accuracy: 55,
        },
        {
            name: "Mia Phoenix",
            image: "https://i.ibb.co/kKtSzMP/my-image.gif",
            win: 10,
            loss: 5,
            accuracy: 25,
        },
    ];
    const YearOptions = [
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "2020", label: "2020" },
        { value: "2019", label: "2019" },
        { value: "2018", label: "2018" },
        { value: "2017", label: "2017" },
    ];
    const leagueOptions = [
        { value: "ICC World Cup", label: "ICC World Cup" },
        { value: "The Hundred", label: "The Hundred" },
        { value: "One Day International", label: "One Day International" },
        {
            value: "One Day International Women",
            label: "One Day International Women",
        },
        { value: "T20 International", label: "T20 International" },
    ];
    const formatOptions = [
        { value: "ODI", label: "ODI" },
        { value: "T20", label: "T20" },
        { value: "T20I", label: "T20I" },
        { value: "T10", label: "T10" },
    ];
    const handleClear = () => {
        setYear(null);
        setLeague(null);
        setFormat(null);
    };
    return (
        <section className="container py-5">
            {/* Leader Board Banner */}
            <VectorBg rounded={true}>
                <div className="grid lg:grid-cols-2 px-5 sm:px-10">
                    <div className="text-white py-8">
                        <h2 className="text-3xl sm:text-5xl font-extrabold">
                            Meet the winner of
                        </h2>
                        <p className="font-medium mt-1 sm:mt-[10px] sm:text-xl">
                            Monthly expert ranking
                        </p>
                        <h3 className="mt-3 sm:mt-5 text-sm">How to win</h3>
                        <ul className="mt-[10px]">
                            <li className="flex sm:items-center gap-[5px]">
                                <FaUserAlt />
                                Register as an User.
                            </li>
                            <li className="flex sm:items-center gap-[5px] my-[5px]">
                                <FaUserCheck />
                                Predict the winners.
                            </li>
                            <li className="flex sm:items-center gap-[5px]">
                                <SlBadge />
                                Beat the rivals and win amazing prizes.
                            </li>
                        </ul>
                    </div>
                    <div className="w-[300px] sm:w-[500px] min-h-[150px] sm:min-h-[250px] mx-auto lg:mx-0 relative -mb-6 sm:-mb-10">
                        {usersInfo?.slice(0, 3)?.map((user, idx) => (
                            <div
                                key={idx}
                                className="sm:w-[195px] sm:h-[195px] w-[120px] h-[120px] rounded-full sm:first:w-[270px] sm:first:h-[270px] first:h-[170px] first:w-[170px] absolute first:bottom-0 first:right-1/2 first:translate-x-1/2 border-2 bg-[#002F46] bottom-0 last:right-0 first:z-10"
                            >
                                <Image
                                    src={user?.image}
                                    alt="Top User image"
                                    width={300}
                                    height={300}
                                    className="w-full h-full rounded-full object-cover"
                                />
                                <div className="absolute z-20 bottom-1 shadow-lg left-1/2 -translate-x-1/2 text-white pb-10 bg-white p-3 rounded-2xl">
                                    <span className="text-2xl flex items-center justify-center w-8 h-8 rounded-full bg-[#35B233]">
                                        {idx + 1}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </VectorBg>
            {/* Main content */}
            <div className="grid grid-cols-3 mt-5 shadow-md">
                {/* Left Content */}
                <div className="bg-white p-5 rounded-xl">
                    <div className="flex justify-between items-center border-b pb-4">
                        <h3 className="font-medium">Filter</h3>
                        <button
                            onClick={handleClear}
                            className="text-[#E33E38] font-medium"
                        >
                            Clear
                        </button>
                    </div>
                    <div className="mt-4">
                        <h4 className="font-medium text-sm">Year</h4>
                        <Select
                            value={year}
                            onChange={setYear}
                            options={YearOptions}
                            placeholder={"2023"}
                            className="mt-1"
                        />
                    </div>
                    <div className="mt-4">
                        <h4 className="font-medium text-sm">League / Series</h4>
                        <Select
                            value={league}
                            onChange={setLeague}
                            options={leagueOptions}
                            className="mt-1"
                            placeholder={"ICC World Cup"}
                        />
                    </div>
                    <div className="mt-4">
                        <h4 className="font-medium text-sm">Format</h4>
                        <Select
                            value={format}
                            onChange={setFormat}
                            options={formatOptions}
                            placeholder={"T20"}
                            className="mt-1"
                        />
                    </div>
                </div>
                {/* Right Content */}
                <div className="col-span-2"></div>
            </div>
        </section>
    );
};

export default LeaderBoardPage;
