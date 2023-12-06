import Image from "next/image";
import React from "react";
import { FaCamera } from "react-icons/fa";

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
            </div>
            <div className="col-span-2 bg-white"></div>
        </section>
    );
};

export default UserProfilePage;
