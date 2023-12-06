import moment from "moment";
import Image from "next/image";
import React from "react";
import { FaCamera } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { MdSportsCricket } from "react-icons/md";
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
    };
    const {
        image,
        name,
        country,
        joinDate,
        following,
        follower,
        participation,
        tossaccuracy,
        matchaccuracy,
        badges,
    } = user || {};
    return (
        <section className="container grid grid-cols-3 gap-5 pt-5">
            <div className=" bg-white p-5">
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
                    <h2 className="text-xl font-bold text-[#323232]">Statistics</h2>
                    <div className=" grid grid-cols-3 gap-3 text-center mt-[10px]">
                        <div className="text-[#8D38E3]">
                            <div className="w-16 h-16 rounded-xl bg-[#EBE1FF] flex justify-center items-center border border-[#8D38E3] text-4xl mx-auto">
                                <SlBadge className=""/>
                            </div>
                            <h3 className="font-bold mt-[10px]">Participation</h3>
                            <span className="text-[32px] font-bold mt-[10px]">{participation}%</span>
                        </div>
                        <div className="text-[#1BA2E8]  ">
                            <div className="w-16 h-16 rounded-xl bg-[#EBE1FF] flex justify-center items-center border border-[#1BA2E8] text-4xl mx-auto">
                            <FaHandPeace />
                            </div>
                            <h3 className="font-bold mt-[10px]">Toss Accuracy</h3>
                            <span className="text-[32px] font-bold mt-[10px]">{tossaccuracy}%</span>
                        </div>
                        <div className="text-[#41D33E] ">
                            <div className="w-16 h-16 rounded-xl bg-[#EBE1FF] flex justify-center items-center border border-[#41D33E] text-4xl mx-auto">
                                <MdSportsCricket className=""/>
                            </div>
                            <h3 className="font-bold mt-[10px]">Match Accuracy</h3>
                            <span className="text-[32px] font-bold mt-[10px]">{participation}%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 bg-white"></div>
        </section>
    );
};

export default UserProfilePage;
