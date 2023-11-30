import Image from "next/image";
import React from "react";
import { useTimer } from "react-timer-hook";
import { FaRegClock } from "react-icons/fa6";
import moment from "moment";
import { RiMessage3Fill } from "react-icons/ri";
import Link from "next/link";
const MatchCard = ({ single }) => {
    const { MatchTitle, status, team, startingTime,id } = single || {};
    const { team_1, team_2 } = team || {};
    const expiryTimestamp = new Date(startingTime);
    const { minutes, hours } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
    });
    return (
        <div className="bg-white p-[10px] rounded-lg border">
            <div className="flex justify-between items-center">
                <h3 className="font-medium">{MatchTitle}</h3>
                <p>
                    {status == "Upcoming" ? (
                        <span className="px-[10px] py-[5px] rounded-3xl block w-fit text-white bg-[#35B233]">
                            {status}
                        </span>
                    ) : status == "Live" ? (
                        <span className="px-[10px] py-[5px] rounded-3xl block w-fit text-white bg-[#E33E38]">
                            {status}
                        </span>
                    ) : (
                        <span className="px-[10px] py-[5px] rounded-3xl block w-fit text-white bg-[#323232]">
                            {status}
                        </span>
                    )}
                </p>
            </div>
            <div className="flex justify-between my-[10px] items-center">
                <div className="mx-5">
                    <Image
                        width={75}
                        height={75}
                        src={team_1?.flag}
                        className="w-[75px] h-[75px] object-cover rounded-full"
                        alt="flag image"
                    />
                </div>
                <p>VS</p>
                <div className="mx-5">
                    <Image
                        width={75}
                        height={75}
                        src={team_2?.flag}
                        className="w-[75px] h-[75px] object-cover rounded-full"
                        alt="flag image"
                    />
                </div>
            </div>
            <div className="">
                <div className="font-medium text-white px-3 py-[5px] bg-[#FFC305] rounded-3xl w-fit mx-auto">
                    <FaRegClock className="inline mr-2" />
                    <span>{hours}</span> hr:
                    <span> {minutes} min left</span>
                </div>
                <p className="text-[#969696] text-center mt-2">
                    {moment(startingTime).format("M MMM YYYY ddd HH : mm A")}
                </p>
            </div>
            <button className="px-3 py-2 border rounded-lg mx-auto block mt-3 hover:bg-[#323232] text-[#646464] hover:text-white "><RiMessage3Fill className="inline text-xl" /> Join Discussion (2k)</button>
            <Link href={`/match/${id}`} className="primary_btn text-center block w-full text-[#323232] mt-3">View Prediction</Link>
        </div>
    );
};

export default MatchCard;
