import moment from "moment";
import Image from "next/image";
import React from "react";
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
    const predictionCollection = [
        {
            country: "England",
            image: "https://i.ibb.co/xz9njP6/image-6.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Waqar Younis praises Virat Kohli as a 'crazy man' who will shatter records beyond imagination.",
            description: "",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/QK5wY3T/image-9.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Cricket Australia ICC World Cup 2023 Squad Announced",
            description: "",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "New Zealand cricket team: Strength And Weakness Of Kane Williamson",
            description: "",
        },
        {
            country: "Australia",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "New Zealand cricket team: Strength And Weakness Of Kane Williamson",
            description: "",
        },
    ];
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
                        <div className="absolute w-full h-full top-0 left-0 from-[#000] to-transparent to-60% bg-gradient-to-t"></div>

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
                <h2 className="font-medium text-2xl text-[#323232]">Latest Prediction</h2>
                <div className="grid grid-cols-2 gap-3 gap-y-5 mt-5">
                    {predictionCollection.map((prediction, idx) => (
                        <div key={idx} className="">
                            <Image
                                width={245}
                                height={168}
                                alt="image Image"
                                className="w-full h-[240px] object-cover rounded-xl"
                                src={prediction?.image}
                            />

                            <div className="mt-[10px]">
                                <p className="text-[#969696]">
                                    <FaRegClock className="inline mr-2" />
                                    {moment(prediction?.timestamp).fromNow()}
                                </p>
                                <h3 className="font-bold mt-[10px]">
                                    {prediction?.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*========================= IPL Prediction ======================*/}
            <div className="mt-5">
                <h2 className="font-medium text-2xl text-[#323232]">IPL Prediction</h2>
                <div className="grid grid-cols-2 gap-3 gap-y-5 mt-5">
                    {predictionCollection.slice(1,3).map((prediction, idx) => (
                        <div key={idx} className="">
                            <Image
                                width={245}
                                height={168}
                                alt="image Image"
                                className="w-full h-[240px] object-cover rounded-xl"
                                src={prediction?.image}
                            />

                            <div className="mt-[10px]">
                                <p className="text-[#969696]">
                                    <FaRegClock className="inline mr-2" />
                                    {moment(prediction?.timestamp).fromNow()}
                                </p>
                                <h3 className="font-bold mt-[10px]">
                                    {prediction?.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PredictionTab;
