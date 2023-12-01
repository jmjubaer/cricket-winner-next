"use client";
import React, { useEffect, useState } from "react";
import Logo1xBet from "../../../assets/Match/1x-logo.png";
import gift from "../../../assets/Match/gift.png";
import Image from "next/image";
import { MdSportsCricket } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import moment from "moment";
import { useTimer } from "react-timer-hook";
import ProgressBar from "@ramonak/react-progress-bar";
import { PiWarningCircleBold } from "react-icons/pi";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
const MatchPage = ({ params }) => {
    const [match, setMatch] = useState({});
    useEffect(() => {
        (async () => {
            const res = await fetch("/api/match");
            const matchData = await res.json();
            console.log(matchData);
            if (matchData) {
                const currentMatch = matchData?.find(
                    (match) => match.id == params.id
                );
                setMatch(currentMatch);
            }
        })();
    }, [params?.id]);
    console.log(match);
    const { MatchTitle, status, team, startingTime, stadium } = match || {};
    const { team_1, team_2 } = team || {};
    const expiryTimestamp = new Date(startingTime);
    const { minutes, hours } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
    });
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
            accuracy: 35,
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
    return (
        <section className="grid grid-cols-3 container mt-5">
            {/* Left Content */}
            <div className="col-span-2">
                {/* Match Card */}
                <div className="rounded-2xl overflow-hidden bg-white">
                    {/* Card header */}
                    <div className="flex justify-between items-center bg-[#323232]">
                        <h4 className="text-xs uppercase font-extrabold text-white mx-3">
                            SPONSORED BY
                        </h4>
                        <Image src={Logo1xBet} alt="1X Bet Logo" />
                        <Image src={gift} alt="Image" />
                    </div>

                    {/* Card Content */}
                    <div className="bg-[#3391B2] relative overflow-hidden pt-5">
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-fit">
                                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto bg-white -mb-3 flex items-center justify-center">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={team_1?.logo}
                                        alt="Cricket board image"
                                        className=" w-[100px] mx-auto h-[100px]  object-contain rounded-full"
                                    />
                                </div>

                                {/* Todo: Make dynamic with dynamic data */}
                                <div className="flex items-center gap-1 bg-white w-fit rounded-t-2xl p-[10px]">
                                    <p className="w-10 h-10 rounded-full bg-[#1E2223] flex items-center justify-center text-white text-xs font-bold">
                                        35%
                                    </p>
                                    <p className="font-bold text-sm">
                                        {team_1?.shortName}
                                    </p>
                                    <p className="text-xs font-medium px-[10px] py-[5px] rounded-full bg-[#F5F5F5]">
                                        200 VOTES
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-white font-extrabold text-[32px]">
                                    {team_1?.shortName} vs {team_2?.shortName}
                                </h2>
                                <p className="text-[#F5F5F5] text-center mt-2 text-xs">
                                    <FaRegClock className="inline mr-2" />
                                    {moment(startingTime).format(
                                        "M MMM YYYY ddd HH : mm A"
                                    )}
                                </p>
                                <p className="text-[#F5F5F5] text-center mt-2 text-xs">
                                    <MdSportsCricket className="inline mr-2" />
                                    {stadium}
                                </p>
                            </div>

                            <div className="w-fit">
                                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto bg-white -mb-3 flex items-center justify-center">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={team_2?.logo}
                                        alt="Cricket board image"
                                        className="w-[100px] mx-auto h-[100px] rounded-full object-contain"
                                    />
                                </div>

                                {/* Todo: Make dynamic with dynamic data */}
                                <div className="flex items-center gap-1 bg-white w-fit rounded-t-2xl p-[10px]">
                                    <p className="w-10 h-10 rounded-full bg-[#14A1FE] flex items-center justify-center text-white text-xs font-bold">
                                        65%
                                    </p>
                                    <p className="font-bold text-sm">
                                        {team_2?.shortName}
                                    </p>
                                    <p className="text-xs font-medium px-[10px] py-[5px] rounded-full bg-[#F5F5F5]">
                                        600 VOTES
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vector Image for overlay */}
                        <MdSportsCricket className="text-8xl text-white text-opacity-20 absolute -top-6 -left-4" />
                        <MdSportsCricket className="text-8xl text-white text-opacity-20 absolute -bottom-9 left-[20%]" />
                    </div>

                    <div className="text-center my-5">
                        {/* Todo: make dynamic base on time */}
                        <h3 className="font-medium">
                            You cannot predict this match after
                        </h3>
                        <div className="font-medium text-white px-3 py-[5px] bg-[#FFC305] rounded-3xl w-fit mx-auto mt-[5px]">
                            <FaRegClock className="inline mr-2" />
                            <span>{hours}</span> hr:
                            <span> {minutes} min left</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="w-1/3 border rounded-2xl px-5 py-[10px]">
                            <div className="relative">
                                <ProgressBar
                                    className="pt-7"
                                    barContainerClassName="customClass"
                                    isLabelVisible={false}
                                    bgColor="#1E2223"
                                    completed={65}
                                    height="11px"
                                />
                                <p className="absolute top-2 left-0 text-[#646464] text-xs">
                                    {team_1?.shortName} 65%
                                </p>
                                <p className="absolute top-2 right-0 text-[#646464] text-xs">
                                    {team_2?.shortName} 35%
                                </p>
                            </div>
                            <h3 className="font-bold my-[10px] text-center">
                                Who will win the TOSS?
                            </h3>
                            <div className="flex gap-3 justify-center">
                                <button className="border gap-1 flex items-center px-5 p-[10px] rounded-full">
                                    <Image
                                        width={22}
                                        height={22}
                                        src={team_1?.flag}
                                        className="w-[22px] h-[22px] rounded-full object-cover"
                                        alt="Flag image"
                                    />
                                    <span>{team_1?.shortName}</span>
                                </button>
                                <button className="border gap-1 flex items-center p-[10px] rounded-full">
                                    <Image
                                        width={22}
                                        height={22}
                                        src={team_2?.flag}
                                        className="w-[22px] h-[22px] rounded-full object-cover"
                                        alt="Flag image"
                                    />
                                    <span>{team_2?.shortName}</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-1/3 border rounded-2xl px-5 py-[10px]">
                            <div className="relative">
                                <ProgressBar
                                    className="pt-7"
                                    barContainerClassName="customClass"
                                    isLabelVisible={false}
                                    bgColor="#1E2223"
                                    completed={65}
                                    height="11px"
                                />
                                <p className="absolute top-2 left-0 text-[#646464] text-xs">
                                    {team_1?.shortName} 65%
                                </p>
                                <p className="absolute top-2 right-0 text-[#646464] text-xs">
                                    {team_2?.shortName} 35%
                                </p>
                            </div>
                            <h3 className="font-bold my-[10px] text-center">
                                Who will win the TOSS?
                            </h3>
                            <div className="flex gap-3 justify-center">
                                <button className="border gap-1 flex items-center px-5 p-[10px] rounded-full">
                                    <Image
                                        width={22}
                                        height={22}
                                        src={team_1?.flag}
                                        className="w-[22px] h-[22px] rounded-full object-cover"
                                        alt="Flag image"
                                    />
                                    <span>{team_1?.shortName}</span>
                                </button>
                                <button className="border gap-1 flex items-center p-[10px] rounded-full">
                                    <Image
                                        width={22}
                                        height={22}
                                        src={team_2?.flag}
                                        className="w-[22px] h-[22px] rounded-full object-cover"
                                        alt="Flag image"
                                    />
                                    <span>{team_2?.shortName}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 mb-5 text-center">
                        <button className="primary_btn font-medium">
                            Submit Predict
                        </button>
                        <span className="text-xs block mt-[5px]">
                            25 experts have already predicted.
                        </span>
                    </div>

                    {/*====== card footer ======*/}
                    <div className="flex justify-between items-center bg-[#323232]">
                        <h4 className="text-xs uppercase font-extrabold text-white mx-3">
                            SPONSORED BY
                        </h4>
                        <Image src={Logo1xBet} alt="1X Bet Logo" />
                        <Image src={gift} alt="Image" />
                    </div>
                </div>

                {/*========== Ranking table ==============*/}
                <div className="bg-white rounded-2xl mt-6 mb-9 overflow-hidden">
                    <div className="flex justify-between items-center px-5">
                        <h2 className="font-medium text-2xl py-[10px]">
                            Top Predictions on this Match
                        </h2>
                        <div className="flex gap-5">
                            <div className="flex gap-[6px] items-center">
                                <span className="w-6 h-6 rounded-full bg-[#D8D8D8] flex items-center justify-center">
                                    <PiWarningCircleBold className="text-sm" />
                                </span>
                                <span className="text-[#969696] text-sm">
                                    Pending
                                </span>
                            </div>
                            <div className="flex gap-[6px] items-center">
                                <span className="w-6 h-6 rounded-full bg-[#D8D8D8] flex items-center justify-center">
                                    <AiFillLike className="text-sm" />
                                </span>
                                <span className="text-[#969696] text-sm">
                                    Pending
                                </span>
                            </div>
                            <div className="flex gap-[6px] items-center">
                                <span className="w-6 h-6 rounded-full bg-[#D8D8D8] flex items-center justify-center">
                                    <AiFillDislike className="text-sm" />
                                </span>
                                <span className="text-[#969696] text-sm">
                                    Pending
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            {/* head */}
                            <thead>
                                <tr className="font-medium my-3 text-[#969696] bg-[#EAECF0]  text-sm">
                                    <th className="font-medium py-3 px-3">
                                        Rank
                                    </th>
                                    <th className="font-medium py-3 text-left">
                                        User Average Accuracy
                                    </th>
                                    <th className="font-medium py-3 px-3">
                                        Toss
                                    </th>
                                    <th className="font-medium py-3 px-3">
                                        Match
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*Todo: Change Dynamic data */}
                                {usersInfo?.slice(3, 13)?.map((user, idx) => (
                                    <tr key={idx} className="even:bg-[#EAECF0]">
                                        <th>{idx + 1}</th>
                                        <td className="py-2">
                                            <div className="flex justify-between gap-2">
                                                <div className="flex items-center gap-1">
                                                    <Image
                                                        width={30}
                                                        height={30}
                                                        className="w-[30px] h-[30px] object-cover rounded-full border"
                                                        src={user?.image}
                                                        alt="User Image"
                                                    />
                                                    <p className="font-medium text-sm">
                                                        {user?.name}
                                                    </p>
                                                </div>
                                                <p
                                                    className={`bg-opacity-10 w-fit text-sm border rounded-full text-center py-1 px-[6px] font-medium ${
                                                        user?.accuracy > 40
                                                            ? "bg-[#027A48] text-[#027A48]"
                                                            : user?.accuracy >
                                                              30
                                                            ? "bg-[#FF8B00] text-[#FF8B00]"
                                                            : "bg-[#E33E38] text-[#E33E38]"
                                                    }`}
                                                >
                                                    {user?.accuracy}%
                                                </p>
                                            </div>
                                            <ProgressBar
                                                className="mt-[10px]"
                                                isLabelVisible={false}
                                                bgColor="#FFC305"
                                                completed={user?.accuracy}
                                                height="12px"
                                            />
                                        </td>
                                        <td>
                                            <div className="relative w-[42px] h-[42px] bg-[#D8D8D8] mx-auto flex items-center justify-center rounded-full">
                                                <Image
                                                    width={22}
                                                    height={22}
                                                    src={team_1?.flag}
                                                    alt="Flag image"
                                                    className="w-full h-full rounded-full object-cover p-[10px]"
                                                />
                                                {user?.accuracy > 40 ? (
                                                    <AiFillLike className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                ) : user?.accuracy > 30 ? (
                                                    <PiWarningCircleBold className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                ) : (
                                                    <AiFillDislike className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="relative w-[42px] h-[42px] bg-[#D8D8D8] mx-auto flex items-center justify-center rounded-full">
                                                <Image
                                                    width={22}
                                                    height={22}
                                                    src={team_1?.flag}
                                                    alt="Flag image"
                                                    className="w-full h-full rounded-full object-cover p-[10px]"
                                                />
                                                {user?.accuracy > 40 ? (
                                                    <AiFillLike className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
                                                ) : user?.accuracy > 30 ? (
                                                    <PiWarningCircleBold className="absolute -top-1 -right-1 bg-[#D8D8D8] p-1 text-xl rounded-full" />
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
            {/* Right side content */}
            <div className=""></div>
        </section>
    );
};

export default MatchPage;
