"use client";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCamera, FaSortAlphaDown } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { MdSportsCricket } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { PiWarningCircleBold } from "react-icons/pi";
const UserProfilePage = () => {
    const user = {
        image: "https://i.ibb.co/RSg2tMM/my-image.gif",
        name: "Rai Sinha",
        country: {
            name: "India",
            flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
        },
        joinDate:
            "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        following: 10000,
        follower: 120000,
        participation: 62,
        tossaccuracy: 20,
        matchaccuracy: 18,
        badges: [
            {
                badge: "https://i.ibb.co/r5jRJR0/First-place-badge-with-two-ribbons.png",
            },
            { badge: "https://i.ibb.co/TRqNKYy/police-badge.png" },
            {
                badge: "https://i.ibb.co/vscJkK2/Reward-badge-with-star-and-ribbon.png",
            },
            {
                badge: "https://i.ibb.co/4WvYDBn/Reward-badge-with-star-and-two-ribbons.png",
            },
        ],
        matches: [
            {
                MatchTitle: "Asia cup (Final)",
                result: "pending",
                team: {
                    team_1: {
                        teamName: "india",
                        shortName: "IND",
                        flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                        logo: "https://i.ibb.co/J2yZMCh/india.png",
                    },
                    team_2: {
                        teamName: "Australia",
                        shortName: "AUS",
                        flag: "https://media.istockphoto.com/id/1340727526/vector/flags-of-australia-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=tyL_HkGKsFGnwMh41AdnfXSke7BlUaVNJewEgWzDYLQ=",
                        logo: "https://i.ibb.co/j9KvDcw/austrolia-log.jpg",
                    },
                },
                startingTime:
                    "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            },
            {
                MatchTitle: "Asia cup (Final)",
                status: "Finished",
                result: {
                    match: true,
                    toss: true,
                },
                team: {
                    team_1: {
                        teamName: "Sri Lanka",
                        shortName: "SL",
                        flag: "https://media.istockphoto.com/id/1063902464/vector/flag-of-sri-lanka.jpg?s=612x612&w=0&k=20&c=hggRyqTyT8qmG6LbCU--IexdL-wnkzsBs-KCh-WbngM=",
                        logo: "https://i.ibb.co/vDqP6f8/srilongka.jpg",
                    },
                    team_2: {
                        teamName: "Australia",
                        shortName: "AUS",
                        flag: "https://media.istockphoto.com/id/1340727526/vector/flags-of-australia-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=tyL_HkGKsFGnwMh41AdnfXSke7BlUaVNJewEgWzDYLQ=",
                        logo: "https://i.ibb.co/j9KvDcw/austrolia-log.jpg",
                    },
                },
                startingTime:
                    "Sun Nov 18 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            },
            {
                MatchTitle: "Asia cup (Final)",
                status: "Live",
                result: {
                    match: false,
                    toss: true,
                },
                team: {
                    team_1: {
                        teamName: "india",
                        shortName: "IND",
                        flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                        logo: "https://i.ibb.co/J2yZMCh/india.png",
                    },
                    team_2: {
                        teamName: "Pakistan",
                        shortName: "PAK",
                        flag: "https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY=",
                        logo: "https://i.ibb.co/M8DP1sz/pakistan-logo.png",
                    },
                },
                startingTime:
                    "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            },
            {
                MatchTitle: "Asia cup (Final)",
                status: "Live",
                result: {
                    match: false,
                    toss: false,
                },
                team: {
                    team_1: {
                        teamName: "india",
                        shortName: "IND",
                        flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                        logo: "https://i.ibb.co/J2yZMCh/india.png",
                    },
                    team_2: {
                        teamName: "New Zealand",
                        shortName: "NZ",
                        flag: "https://media.istockphoto.com/id/181060494/photo/new-zealand-flag.jpg?s=612x612&w=0&k=20&c=mDVFe-aA_XiuBFB3FtwkHWTpSCsYptEvtBz6RwvqYhI=",
                        logo: "https://i.ibb.co/4RFVt0C/nz-2.png",
                    },
                },
                startingTime:
                    "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            },
            {
                MatchTitle: "Asia cup (Final)",
                status: "Finished",
                result: {
                    match: false,
                    toss: true,
                },
                team: {
                    team_1: {
                        teamName: "Sri Lanka",
                        shortName: "SL",
                        flag: "https://media.istockphoto.com/id/1063902464/vector/flag-of-sri-lanka.jpg?s=612x612&w=0&k=20&c=hggRyqTyT8qmG6LbCU--IexdL-wnkzsBs-KCh-WbngM=",
                        logo: "https://i.ibb.co/vDqP6f8/srilongka.jpg",
                    },
                    team_2: {
                        teamName: "Australia",
                        shortName: "AUS",
                        flag: "https://media.istockphoto.com/id/1340727526/vector/flags-of-australia-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=tyL_HkGKsFGnwMh41AdnfXSke7BlUaVNJewEgWzDYLQ=",
                        logo: "https://i.ibb.co/j9KvDcw/austrolia-log.jpg",
                    },
                },
                startingTime:
                    "Sun Nov 18 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            },
        ],
    };
    const {
        name,
        image,
        matches,
        country,
        follower,
        joinDate,
        following,
        tossaccuracy,
        matchaccuracy,
        participation,
        badges,
    } = user || {};
    console.log(matches);
    return (
        <section className="container grid md:grid-cols-11 gap-5 py-5">
            <div className=" bg-white md:col-span-4 p-5 shadow-sm rounded-2xl">
                <div className="relative w-fit h-fit rounded-full mx-auto">
                    <Image
                        width={240}
                        height={240}
                        src={image}
                        alt="Profile Image"
                        className="w-60 h-60 rounded-full object-cover border-4 border-[#FFC305]"
                    />
                    <button className="absolute top-5 right-5 w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                        <FaCamera />
                    </button>
                </div>
                <div className="flex items-center gap-[10px] justify-center mt-5">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <Image
                        width={30}
                        height={30}
                        src={country?.flag}
                        alt="Country Flag"
                        className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                </div>
                <div className="flex gap-[10px] justify-center mt-6">
                    <button className="px-[15px] py-[5px] bg-black bg-opacity-20 rounded-3xl font-medium text-[#323232]">
                        <span className="font-bold">
                            {following >= 1000
                                ? following / 1000 + "k"
                                : following}
                        </span>
                        Following
                    </button>
                    <button className="px-[15px] py-[5px] bg-black bg-opacity-20 rounded-3xl font-medium text-[#323232]">
                        <span className="font-bold">
                            {follower >= 1000
                                ? follower / 1000 + "k"
                                : follower}
                        </span>{" "}
                        Followers
                    </button>
                </div>
                <p className="text-center text-[#969696] mt-5">
                    Joined:{" "}
                    <span className="font-medium text-[#323232]">
                        {moment(joinDate).format("MMM YYYY")}
                    </span>
                </p>

                {/* Statistics */}
                <div className="border-y my-5 py-5">
                    <h2 className="text-xl font-bold text-[#323232]">
                        Statistics
                    </h2>
                    <div className=" grid grid-cols-3 gap-1 text-center mt-[10px]">
                        <div className="text-[#8D38E3] flex flex-col justify-between">
                            <div className="w-16 h-16 rounded-xl bg-[#EBE1FF] flex justify-center items-center border border-[#8D38E3] text-4xl mx-auto">
                                <SlBadge className="" />
                            </div>
                            <h3 className="font-medium mt-[10px]">
                                Participation
                            </h3>
                            <span className="text-[32px] font-bold mt-[10px]">
                                {participation}%
                            </span>
                        </div>
                        <div className="text-[#1BA2E8] flex flex-col justify-between">
                            <div className="w-16 h-16 rounded-xl bg-[#EBE1FF] flex justify-center items-center border border-[#1BA2E8] text-4xl mx-auto">
                                <FaHandPeace />
                            </div>
                            <h3 className="font-medium mt-[10px]">
                                Toss Accuracy
                            </h3>
                            <span className="text-[32px] font-bold mt-[10px]">
                                {tossaccuracy}%
                            </span>
                        </div>
                        <div className="text-[#41D33E] flex flex-col justify-between">
                            <div className="w-16 h-16 rounded-xl bg-[#EBE1FF] flex justify-center items-center border border-[#41D33E] text-4xl mx-auto">
                                <MdSportsCricket className="" />
                            </div>
                            <h3 className="font-medium mt-[10px]">
                                Match Accuracy
                            </h3>
                            <span className="text-[32px] font-bold mt-[10px]">
                                {matchaccuracy}%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Badge */}
                <div className="">
                    <h2 className="text-xl font-bold text-[#323232]">Badges</h2>
                    <div className="flex gap-[10px] text-center mt-[10px]">
                        {badges?.map((badge, idx) => (
                            <div
                                key={idx}
                                className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#F5F5F5]"
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    src={badge?.badge}
                                    alt="Badge"
                                    className="object-contain h-10"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Right side content */}
            <div className="md:col-span-7 text-[#323232]">
                <div className="bg-white p-5 rounded-2xl">
                    <h2 className="text-xl font-bold">Standings</h2>
                    <div className="grid lg:grid-cols-3 mt-[10px] gap-[10px]">
                        <div className="border flex flex-col justify-between rounded-xl p-5 text-center">
                            <h3 className="text-xl font-bold">Participation</h3>
                            <span>(65/120)</span>
                            <div className="w-4/5 mx-auto my-7 font-bold">
                                <CircularProgressbar
                                    value={participation}
                                    text={`${participation}%`}
                                    className=""
                                    styles={buildStyles({
                                        textColor: "#323232",
                                        pathColor: "#323232",
                                        trailColor: "#D8D8D8",
                                        textSize: "28px",
                                        // rotation: 0.6 + 1 / 2
                                    })}
                                    strokeWidth={10}
                                />
                            </div>
                            <div className="flex justify-center gap-[10px]">
                                <p className="font-medium flex items-center gap-[10px]">
                                    <span className="inline-block w-[18px] h-[18px] bg-[#323232] rounded-[5px]"></span>
                                    Played
                                </p>
                                <p className="font-medium flex items-center gap-[10px]">
                                    <span className="inline-block w-[18px] h-[18px] bg-[#D8D8D8] rounded-[5px]"></span>
                                    Missed
                                </p>
                            </div>
                        </div>
                        <div className="border flex flex-col justify-between rounded-xl p-5 text-center">
                            <h3 className="text-xl font-bold">Toss Accuracy</h3>
                            <span>(55/120)</span>
                            <div className="w-4/5 mx-auto my-7 font-bold">
                                <CircularProgressbar
                                    value={tossaccuracy}
                                    text={`${tossaccuracy}%`}
                                    className=""
                                    styles={buildStyles({
                                        textColor: "#323232",
                                        pathColor: "#323232",
                                        trailColor: "#D8D8D8",
                                        textSize: "28px",
                                        // rotation: 0.9 + 2 / 3
                                    })}
                                    strokeWidth={10}
                                />
                            </div>
                            <div className="flex gap-[10px] justify-center">
                                <p className="font-medium flex items-center gap-[10px]">
                                    <span className="inline-block w-[18px] h-[18px] bg-[#323232] rounded-[5px]"></span>
                                    Won
                                </p>
                                <p className="font-medium flex items-center gap-[10px]">
                                    <span className="inline-block w-[18px] h-[18px] bg-[#D8D8D8] rounded-[5px]"></span>
                                    Lost
                                </p>
                            </div>
                        </div>
                        <div className="border flex flex-col justify-between rounded-xl p-5 text-center">
                            <h3 className="text-xl font-bold">
                                Match Accuracy
                            </h3>
                            <span>(25/120)</span>
                            <div className="w-4/5 mx-auto my-7 font-bold">
                                <CircularProgressbar
                                    value={matchaccuracy}
                                    text={`${matchaccuracy}%`}
                                    className=""
                                    styles={buildStyles({
                                        textColor: "#323232",
                                        pathColor: "#323232",
                                        trailColor: "#D8D8D8",
                                        textSize: "28px",
                                        // rotation: 1.1 + 1 / 2
                                    })}
                                    strokeWidth={10}
                                />
                            </div>
                            <div className="flex gap-[10px] justify-center">
                                <p className="font-medium flex items-center gap-[10px]">
                                    <span className="inline-block w-[18px] h-[18px] bg-[#323232] rounded-[5px]"></span>
                                    Won
                                </p>
                                <p className="font-medium flex items-center gap-[10px]">
                                    <span className="inline-block w-[18px] h-[18px] bg-[#D8D8D8] rounded-[5px]"></span>
                                    Lost
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Match Table */}
                <div className="bg-white rounded-2xl mt-6 mb-9">
                    <div className="flex flex-wrap flex-col sm:flex-row justify-between items-center px-5 py-[10px]">
                        <h2 className="font-medium text-2xl sm:text-2xl py-[10px]">
                            Recent Activity
                        </h2>
                        <div className="grid grid-cols-2 w-[60%] gap-[10px]">
                            {/* Todo: add sort fn */}
                            <select
                                className="border p-[10px] outline-none rounded-md"
                                name=""
                                id=""
                                defaultValue={"League"}
                            >
                                <option value="League" disabled>
                                    League
                                </option>
                                <option value="Caribbean Premier League">
                                    Caribbean Premier League
                                </option>
                                <option value="ICC World Cup">
                                    ICC World Cup
                                </option>
                                <option value="One Day International">
                                    One Day International
                                </option>
                                <option value="One Day International Women">
                                    One Day International Women
                                </option>
                                <option value="T20 International">
                                    T20 International
                                </option>
                                <option value="T20 International Women">
                                    T20 International Women
                                </option>
                            </select>
                            {/* Todo: add sort fn */}
                            <select
                                className="border p-[10px] outline-none rounded-md"
                                name=""
                                id=""
                            >
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="Jun">Jun</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                    </div>
                    {/* Table */}
                    <div className="overflow-auto w-full">
                        <table className="w-full shadow-md">
                            {/* head */}
                            <thead>
                                <tr className="font-medium text-[#969696] bg-[#F5F5F5]  text-sm">
                                    <th className="font-medium text-left p-4">
                                        Particulars
                                    </th>
                                    <th className="font-medium p-4">
                                        Toss
                                        {/* Todo: add sort fn */}
                                        <button>
                                            <FaSortAlphaDown />
                                        </button>
                                    </th>
                                    <th className="font-medium p-4">
                                        Match
                                        {/* Todo: add sort fn */}
                                        <button>
                                            <FaSortAlphaDown />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*Todo: Change Dynamic data */}
                                {/* Todo: Add pagination system */}
                                {matches?.map((match, idx) => (
                                    <tr key={idx} className="even:bg-[#f5f5f5]">
                                        <td className="p-4">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <p>{match?.MatchTitle}</p>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <p>
                                                        {moment(
                                                            match?.startingTime
                                                        ).format(
                                                            " DD-MM-YYYY "
                                                        )}
                                                    </p>
                                                    <p>
                                                        {moment(
                                                            match?.startingTime
                                                        ).format("h:mm A")}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-[10px]">
                                                <div className="flex items-center gap-[5px]">
                                                    <Image
                                                        width={30}
                                                        height={30}
                                                        src={
                                                            match?.team?.team_1
                                                                ?.flag
                                                        }
                                                        alt="Flag image"
                                                        className="rounded-full w-8 h-8 object-cover border"
                                                    />
                                                    <h4>
                                                        {
                                                            match?.team?.team_1
                                                                ?.teamName
                                                        }
                                                    </h4>
                                                </div>
                                                <span className="hidden sm:block">VS</span>
                                                <div className="flex items-center gap-[5px]">
                                                    <Image
                                                        width={30}
                                                        height={30}
                                                        src={
                                                            match?.team?.team_2
                                                                ?.flag
                                                        }
                                                        alt="Flag image"
                                                        className="rounded-full w-8 h-8 object-cover border"
                                                    />
                                                    <h4>
                                                        {
                                                            match?.team?.team_2
                                                                ?.teamName
                                                        }
                                                    </h4>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="relative w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] bg-[#D8D8D8] mx-auto flex items-center justify-center rounded-full">
                                                <Image
                                                    width={22}
                                                    height={22}
                                                    src={
                                                        match?.team?.team_1
                                                            ?.flag
                                                    }
                                                    alt="Flag image"
                                                    className="w-full h-full rounded-full object-cover p-2 sm:p-[10px]"
                                                />
                                                {match?.result == "pending" ? (
                                                    <PiWarningCircleBold className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                ) : match?.result?.toss ? (
                                                    <AiFillLike className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                ) : (
                                                    <AiFillDislike className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="relative w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] bg-[#D8D8D8] mx-auto flex items-center justify-center rounded-full">
                                                <Image
                                                    width={22}
                                                    height={22}
                                                    src={
                                                        match?.team?.team_2
                                                            ?.flag
                                                    }
                                                    alt="Flag image"
                                                    className="w-full h-full rounded-full object-cover p-2 sm:p-[10px]"
                                                />
                                                {match?.result == "pending" ? (
                                                    <PiWarningCircleBold className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                ) : match?.result?.match ? (
                                                    <AiFillLike className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                ) : (
                                                    <AiFillDislike className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfilePage;
