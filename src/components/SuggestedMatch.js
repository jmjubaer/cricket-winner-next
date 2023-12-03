"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MatchCard from "@/components/Card/MatchCard";
const SuggestedMatch = () => {
    const [match, setMatch] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await fetch("/api/match");
            const matchData = await res.json();
            setMatch(matchData);
        })();
    }, []);
    return (
        <div className="mt-5">
            <h2 className="font-medium text-2xl mb-[10px]">Upcoming match</h2>
            <Swiper
                // slidesPerView={1}
                // breakpoints={{
                //     540: {
                //         slidesPerView: 2,
                //         spaceBetween: 10,
                //     },
                //     790: {
                //         slidesPerView: 3,
                //         spaceBetween: 20,
                //     },
                //     1220: {
                //         slidesPerView: 4,
                //         spaceBetween: 20,
                //     },
                //     1440: {
                //         slidesPerView: 5,
                //         spaceBetween: 30,
                //     },
                // }}
                // spaceBetween={30}
                // navigation
                modules={[Autoplay]}
                autoplay
                className="matchSwiper mt-5"
            >
                {match.map((single, idx) => (
                    <SwiperSlide key={idx}>
                        <MatchCard single={single}></MatchCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SuggestedMatch;
