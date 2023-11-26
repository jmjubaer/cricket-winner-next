import moment from "moment";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { FaPlay } from "react-icons/fa6";

const VideosTab = () => {
    const videosCollection = [
        {
            country: "England",
            image: "https://i.ibb.co/FmTrLdt/image-17.png",
            duration: "06:45",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Waqar Younis praises Virat Kohli as a 'crazy man'. who will shatter records.",
            description:
                "The Indian opener recently smashed a double hundred for Northamptonshire against Somerset in a one-day encounter, earning his moment after what has been a tough time...",
            tournamentName: "Asia Cup",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/QK5wY3T/image-9.png",
            duration: "07:15",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Cricket Australia ICC World Cup 2023 Squad Announced",
            description:
                "Virat Kohli is the fittest Indian cricketer and the recent BCCI report revealed that he never visited the National Cricket Academy in Bengaluru for fitness related issues in...",
            tournamentName: "Asia Cup",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            duration: "08:45",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "New Zealand cricket team: Strength And Weakness Of Kane Williamson",
            description:
                "Brendon McCullum has become the second man to get to the 9000-run mark in Twenty20 cricket, getting to the milestone during the course of his whirlwind 27-ball 43 for Royal...",
            tournamentName: "Asia Cup",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/8sjvkfp/image-16.png",
            duration: "10:00",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "ICC Cricket World Cup 2015: Top 10 performances",
            description:
                "It was a moment for the ages. With Australian left-arm quick Mitchell Starc ripping through the tail order at the other end, Kane Williamson wrote his name into BLACKCAPS folklore ...",
            tournamentName: "Asia Cup",
        },
    ];
    const handlePlayVideos = () => {
        toast.error('This button not work yet.')
    }
    return (
        <div>
            {/*=============== Top Card ================= */}
            <div className="">
                {videosCollection.slice(0, 1).map((video, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden w-full h-[365px] relative"
                    >
                        <Image
                            width={750}
                            height={350}
                            alt="image Image"
                            className="w-full h-[360px] object-cover"
                            src={video?.image}
                        />

                        {/* Overlay */}
                        <div className="absolute w-full h-full top-0 left-0 from-[#000] to-transparent to-60% bg-gradient-to-t"></div>

                        {/* Play button */}
                        <button onClick={handlePlayVideos} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl w-[71px] h-[71px] flex justify-center items-center bg-[#323232] bg-opacity-50 rounded-full pl-1">
                            <FaPlay />
                        </button>

                        {/* details */}

                        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-11/12">
                            <p className="text-white">
                                <FaPlay className="inline mr-2" />
                                {video?.duration}
                            </p>
                            <p className="font-bold text-xl mt-3 text-white">
                                {video?.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/*=============== latest Videos ================= */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium">Latest Videos</h2>
                <div className="mt-5">
                    {videosCollection.slice(1, 3).map((video, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-3 mt-[10px] gap-5"
                        >
                            <div className="relative">
                                <Image
                                    width={245}
                                    height={168}
                                    alt="image Image"
                                    className="w-full h-full object-cover rounded-xl"
                                    src={video?.image}
                                />

                                {/* Play button */}
                                <button onClick={handlePlayVideos} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl w-[71px] h-[71px] flex justify-center items-center bg-[#323232] bg-opacity-50 rounded-full pl-1">
                                    <FaPlay />
                                </button>
                            </div>

                            <div className="col-span-2">
                                <div className="flex items-center gap-5">
                                    <p className="text-[#969696]">
                                        <FaPlay className="inline mr-2" />
                                        {video?.duration}
                                    </p>
                                    <p className="px-3 py-[5px] bg-[#323232] rounded-3xl w-fit font-medium text-white text-sm">
                                        {"Asia Cup"}
                                    </p>
                                </div>
                                <h3 className="font-bold text-xl mt-[10px]">
                                    {video?.title}
                                </h3>
                                <p className="mt-[10px] text-[#646464]">
                                    {video?.description.slice(0, 100)}.....
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*=============== Cricket stats ================= */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium">Cricket stats</h2>
                <div className="mt-5">
                    {videosCollection.slice(0, 2).map((video, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-3 mt-[10px] gap-5 "
                        >
                            <div className="relative">
                                <Image
                                    width={245}
                                    height={168}
                                    alt="image Image"
                                    className="w-full h-full object-cover rounded-xl"
                                    src={video?.image}
                                />

                                {/* Play button */}
                                <button onClick={handlePlayVideos} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl w-[71px] h-[71px] flex justify-center items-center bg-[#323232] bg-opacity-50 rounded-full pl-1">
                                    <FaPlay />
                                </button>
                            </div>

                            <div className="col-span-2">
                                <div className="flex items-center gap-5">
                                    <p className="text-[#969696]">
                                        <FaPlay className="inline mr-2" />
                                        {video?.duration}
                                    </p>
                                    <p className="px-3 py-[5px] bg-[#323232] rounded-3xl w-fit font-medium text-white text-sm">
                                        {"Asia Cup"}
                                    </p>
                                </div>
                                <h3 className="font-bold text-xl mt-[10px]">
                                    {video?.title}
                                </h3>
                                <p className="mt-[10px] text-[#646464]">
                                    {video?.description.slice(0, 100)}.....
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideosTab;
