import NewsCardLarge from "@/components/Card/NewsCardLarge";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";

const PredictionTab = () => {
    const match = [
        {
            tournamentName: "Asia cup (Final)",
            status: "Upcoming",
            banner: "https://i.ibb.co/PgKDYRx/Group-1.png",
            team: {
                team_1: {
                    teamName: "india",
                    flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                },
                team_2: {
                    teamName: "Australia",
                    flag: "https://media.istockphoto.com/id/1340727526/vector/flags-of-australia-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=tyL_HkGKsFGnwMh41AdnfXSke7BlUaVNJewEgWzDYLQ=",
                },
            },
            startingTime:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        },
        {
            tournamentName: "Asia cup (Final)",
            status: "Finished",
            banner: "https://i.ibb.co/PgKDYRx/Group-1.png",
            team: {
                team_1: {
                    teamName: "Sri Lanka",
                    flag: "https://media.istockphoto.com/id/1063902464/vector/flag-of-sri-lanka.jpg?s=612x612&w=0&k=20&c=hggRyqTyT8qmG6LbCU--IexdL-wnkzsBs-KCh-WbngM=",
                },
                team_2: {
                    teamName: "Australia",
                    flag: "https://media.istockphoto.com/id/1340727526/vector/flags-of-australia-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=tyL_HkGKsFGnwMh41AdnfXSke7BlUaVNJewEgWzDYLQ=",
                },
            },
            startingTime:
                "Sun Nov 18 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        },
        {
            tournamentName: "Asia cup (Final)",
            status: "Live",
            banner: "https://i.ibb.co/PgKDYRx/Group-1.png",
            team: {
                team_1: {
                    teamName: "india",
                    flag: "https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=",
                },
                team_2: {
                    teamName: "Pakistan",
                    flag: "https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY=",
                },
            },
            startingTime:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
        },
    ];
    const [news, setNews] = useState([]);
    useEffect(() => {
        (async () => {
            // News data fetch ===
            const newsRes = await fetch("/api/news");
            const news = await newsRes.json();
            console.log(news);
            setNews(news);
        })();
    }, []);
    return (
        <div>
            {/*========================= top Card ======================*/}
            <div className="">
                {match.slice(0, 1).map((singleMatch, idx) => (
                    <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl"
                    >
                        <Image
                            width={700}
                            height={250}
                            src={singleMatch?.banner}
                            alt="match banner"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute w-full h-full top-0 left-0 from-[#000] sm:to-transparent sm:to-60% bg-gradient-to-t"></div>

                        <div className="absolute bottom-7 left-0 text-center w-full text-white">
                            <h3 className="text-xl font-medium">
                                {singleMatch?.tournamentName}
                            </h3>
                            <p className="text-[#D8D8D8] text-center mt-2">
                                {moment(singleMatch?.startingTime).format(
                                    "M MMM YYYY ddd HH : mm A"
                                )}
                            </p>
                            <button className="primary_btn text-[#323232] mt-2 w-44">
                                Predict Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/*========================= Latest Prediction ======================*/}
            <div className="mt-5">
                <h2 className="font-medium text-2xl text-[#323232]">
                    Latest Prediction
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 gap-y-5 mt-5">
                    {news.map((singleNews, idx) => (
                        <NewsCardLarge
                            key={idx}
                            singleNews={singleNews}
                        ></NewsCardLarge>
                    ))}
                </div>
            </div>

            {/*========================= IPL Prediction ======================*/}
            <div className="mt-5">
                <h2 className="font-medium text-2xl text-[#323232]">
                    IPL Prediction
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 gap-y-5 mt-5">
                    {news?.slice(1,3)?.map((singleNews, idx) => (
                        <NewsCardLarge
                            key={idx}
                            singleNews={singleNews}
                        ></NewsCardLarge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PredictionTab;
