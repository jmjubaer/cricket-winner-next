import React from "react";
import sponsor from "@/assets/Home/Sponsered.png";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { MdSportsCricket } from "react-icons/md";
import { FaTrophy, FaUserFriends } from "react-icons/fa";
import player_1 from "@/assets/Home/virat.png";
import player_2 from "@/assets/Home/player.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const RankTable = () => {
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

    return (
        <div className="border">
            {/* sponsor banner */}
            <a target="_blank" href="#" className="w-full z-10">
                <Image
                    src={sponsor}
                    className="w-full rounded-t-2xl z-10"
                    alt="Sponsor header"
                />
            </a>
            <div className="bg-[#3391B2] py-4 px-4 relative overflow-hidden">
                <div className="">
                    <h3 className="text-white font-bold">
                        League expert ranking
                    </h3>
                    <ul className="text-white mt-2 z-20">
                        <li className="flex gap-1 items-center text-sm mt-1">
                            <FaCalendarDays className="text-lg" />
                            <span>Nov. 2023</span>
                        </li>
                        <li className="flex gap-1 items-center text-sm mt-1">
                            <MdSportsCricket className="text-lg" />
                            <span>Total Match 250</span>
                        </li>
                        <li className="flex gap-1 items-center text-sm mt-1">
                            <FaUserFriends className="text-lg" />
                            <span>Participant 11840</span>
                        </li>
                    </ul>
                </div>
                <Image
                    src={player_1}
                    alt="player image"
                    className="absolute bottom-0 z-10 right-0"
                />
                <Image
                    src={player_2}
                    alt="player image"
                    className="absolute bottom-0 z-10 right-16"
                />

                {/* Vector Image for overlay */}
                <MdSportsCricket className="text-8xl text-white text-opacity-20 absolute -top-6 -left-4" />
                <MdSportsCricket className="text-8xl text-white text-opacity-20 absolute -bottom-9 left-[40%]" />
            </div>

            {/* Table */}
            <div className="">
                <Tabs>
                    <div className="">
                        <TabList className="grid match_tab w-full grid-cols-2 text-center">
                            <Tab className="border-0 border-b-2 cursor-pointer px-3 sm:px-5 py-3 outline-none">
                                Today
                            </Tab>
                            <Tab className="border-0 border-b-2 cursor-pointer px-3 sm:px-5 py-3 outline-none">
                                Tomorrow
                            </Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                {/* head */}
                                <thead>
                                    <tr className="font-medium my-3 text-[#667085] bg-[#EAECF0] text-left text-sm">
                                        <th className="font-medium py-3 px-3">
                                            Rank
                                        </th>
                                        <th className="font-medium py-3 px-3">
                                            Name
                                        </th>
                                        <th className="font-medium py-3 px-3">
                                            W
                                        </th>
                                        <th className="font-medium py-3 px-3">
                                            L
                                        </th>
                                        <th className="font-medium py-3 px-3">
                                            Accuracy
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersInfo
                                        ?.slice(0, 10)
                                        ?.map((user, idx) => (
                                            <tr key={idx} className="">
                                                <th>{idx + 1}</th>
                                                <td className="flex items-center gap-1 py-2">
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
                                                </td>
                                                <td>
                                                    <p className="mx-auto bg-[#ECFDF3] text-[#027A48] w-fit text-sm border rounded-full font-medium py-1 px-[6px] text-center">
                                                        {user?.win}
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="mx-auto bg-[#E33E38] bg-opacity-10 w-fit text-[#E33E38] text-sm border rounded-full text-center py-1 px-[6px] font-medium">
                                                        {user?.loss}
                                                    </p>
                                                </td>
                                                <th>
                                                    <p className="mx-auto bg-[#ECFDF3] text-[#027A48] w-fit text-sm border rounded-full font-medium py-1 px-2 text-center">
                                                        {user?.accuracy}%
                                                    </p>
                                                </th>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-3xl mt-10 text-center text-[#969696]">
                            No Match Available
                        </h2>
                    </TabPanel>
                </Tabs>
            </div>

            {/* Leaderboard button */}
            <button className="flex items-center px-5 py-[10px] rounded-full border mx-auto my-4 font-medium gap-2">
                <FaTrophy className="text-xl" />
                <span>View Leaderboard</span>
            </button>
            {/* sponsor banner */}
            <a target="_blank" href="#" className="w-full z-10">
                <Image
                    src={sponsor}
                    className="w-full rounded-b-2xl z-10"
                    alt="Sponsor header"
                />
            </a>
        </div>
    );
};

export default RankTable;
