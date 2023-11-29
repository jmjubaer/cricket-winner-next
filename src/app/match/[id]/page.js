"use client";
import React, { useEffect, useState } from "react";
import Logo1xBet from "../../../assets/Match/1x-logo.png";
import gift from "../../../assets/Match/gift.png";
import Image from "next/image";
const MatchPage = ({ params }) => {
    const [match, setMatch] = useState({});
    useEffect(() => {
        (async () => {
            const res = await fetch("/api/match");
            const matchData = await res.json();
            console.log(matchData);
            if (matchData) {
                const currentMatch = matchData?.find(
                    (match) => match.id === params.id
                );
                setMatch(currentMatch);
            }
        })();
    }, [params?.id]);
    console.log(match);
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

                    {/* card footer */}
                    <div className="flex justify-between items-center bg-[#323232]">
                        <h4 className="text-xs uppercase font-extrabold text-white mx-3">
                            SPONSORED BY
                        </h4>
                        <Image src={Logo1xBet} alt="1X Bet Logo" />
                        <Image src={gift} alt="Image" />
                    </div>
                </div>
            </div>
            {/* Right side content */}
            <div className=""></div>
        </section>
    );
};

export default MatchPage;
