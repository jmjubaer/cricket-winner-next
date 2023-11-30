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
const MatchPage = ({ params }) => {
    const [match, setMatch] = useState({});
    console.log(params.id);
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
    return (
        <section className="grid grid-cols-3 container mt-5">
            {/* Left Content */}
            <div className="col-span-2">
                {/* Match Card */}
                <div className="rounded-2xl overflow-hidden">
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
                                    <p className="font-bold text-sm">NZ</p>
                                    <p className="text-xs font-medium px-[10px] py-[5px] rounded-full bg-[#F5F5F5]">
                                        200 VOTES
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-white font-extrabold text-[32px]">
                                    {"NZ"} vs {"IND"}
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
                                    <p className="font-bold text-sm">IND</p>
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

                    {/*====== card footer ======*/}
                    <div className="flex justify-between items-center bg-[#323232]">
                        <h4 className="text-xs uppercase font-extrabold text-white mx-3">
                            SPONSORED BY
                        </h4>
                        <Image src={Logo1xBet} alt="1X Bet Logo" />
                        <Image src={gift} alt="Image" />
                    </div>
                </div>
                <div className="">
                    {/* Todo: make dynamic base on time */}
                    <h3>You cannot predict this match after</h3>
                    <div className="font-medium text-white px-3 py-[5px] bg-[#FFC305] rounded-3xl w-fit mx-auto">
                        <FaRegClock className="inline mr-2" />
                        <span>{hours}</span> hr:
                        <span> {minutes} min left</span>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <ProgressBar completed={60} />
                    </div>
                </div>
            </div>
            {/* Right side content */}
            <div className=""></div>
        </section>
    );
};

export default MatchPage;
