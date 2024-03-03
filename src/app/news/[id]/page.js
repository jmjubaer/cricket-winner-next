"use client";
import React, { useEffect, useState } from "react";
import VectorBg from "@/components/VectorBg";
import moment from "moment";
import Image from "next/image";
import {
    FaFacebook,
    FaInstagram,
    FaLink,
    FaPaperPlane,
    FaXTwitter,
} from "react-icons/fa6";
import SuggestedMatch from "@/components/SuggestedMatch";
import LatestNewsSection from "@/components/LatestNewsSection";
import SuggestedNewsSection from "@/components/SuggestedNewsSection";
import SocialArea from "@/components/SocialArea";

const NewsDetailsPage = ({ params }) => {
    const [news, setNews] = useState(null);
    const [showFull, setShowFull] = useState(false);
    const [match, setMatch] = useState([]);
    // news data fetch ===
    useEffect(() => {
        (async () => {
            const newsRes = await fetch("/api/news");
            const newsData = await newsRes.json();
            if (newsData) {
                const currentNews = newsData?.find(
                    (news) => news.id == params.id
                );
                setNews(currentNews);
            }
        })();
    }, [params?.id]);
    const {
        country,
        image,
        author,
        timestamp,
        title,
        description,
        tournamentName,
    } = news || {};

    if (!news) {
        return <p>Loading......</p>;
    }
    return (
        <>
            <section className="grid md:grid-cols-3 gap-5 container">
                {/* Left Content */}
                <div className="md:col-span-2 bg-white p-5 mt-5 rounded-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mt-5">{title}</h2>
                    <p className="mt-3">
                        {showFull ? description : description?.slice(0, 150)}

                        <button
                            onClick={() => setShowFull(!showFull)}
                            className="font-bold text-[#1BA2E8] ml-1"
                        >
                            {showFull ? "Show less" : "Read more"}
                        </button>
                    </p>
                    <Image
                        width={700}
                        height={300}
                        src={image}
                        alt="Banner Image"
                        className="my-5 rounded-xl w-full"
                    />
                    {/* author info */}
                    <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between my-5">
                        <div className="flex items-center gap-2">
                            <Image
                                width={35}
                                height={35}
                                src={author?.profile}
                                alt="Banner Image"
                                className="w-9 h-9 rounded-full object-cover"
                            />
                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row ">
                                <h4 className="text-sm font-medium mr-1">
                                    {author?.name}
                                </h4>
                                <p>
                                    <span className="hidden lg:block">
                                        {moment(timestamp).format(
                                            "  MMMM M YYYY | HH : mm A"
                                        )}
                                    </span>
                                    <span className="lg:hidden block">
                                        {moment(timestamp).format(
                                            "  MMM M YYYY | HH : mm A"
                                        )}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <ul className="flex justify-evenly gap-2">
                            <li>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"
                                >
                                    <FaXTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"
                                >
                                    <FaPaperPlane />
                                </a>
                            </li>
                            <li>
                                <button className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                                    <FaLink />
                                </button>
                            </li>
                        </ul>
                    </div>

                    <SocialArea rounded={true}></SocialArea>

                    {/* Todo: Replace with dynamic data */}

                    <p className="my-5">
                        The 9th match is going to take place between the hosts
                        India and Afghanistan in the ongoing ICC Cricket World
                        Cup 2023. The match will be played at Arun Jaitley
                        Stadium in Delhi on Wednesday, October 11. While both
                        teams are well-balanced, India will have a slight
                        advantage as well.
                    </p>

                    <p>
                        However, Afghanistan have won the toss and they have
                        opted to bat first. It will be an interesting match to
                        watch out for today.
                    </p>

                    <h2 className="text-xl mt-10 mb-[10px] font-bold">
                        ICC Cricket World Cup 2023: Who said what at the toss?
                    </h2>

                    <p>
                        Rohit Sharma: “We were looking to bat second. We saw the
                        amount of dew last evening. Don’t think the wicket will
                        change much. Need to bowl well and need to come back and
                        bat better. We were under pressure (against Australia)
                        to start with, but KL and Kohli batted well, they were
                        magnificent and we take a lot of pride in our
                        performance. It was a good game for us, hopefully we can
                        repeat that and keep the momentum going forward. Ashwin
                        misses out, Shardul Thakur comes in for him.”
                    </p>

                    <p className="mt-5">
                        Shahidi: “We will bat first. It looks like a good
                        batting surface. We have a good bowling attack to
                        restrict them. It looks like a good surface, we want to
                        bounce back with the bat. We are enjoying, good chance
                        to showcase our talent. We are going with the same
                        team.”
                    </p>

                    <h2 className="text-xl mt-10 mb-[10px] font-bold">
                        Playing XIs:
                    </h2>
                    <p>
                        <b>Afghanistan:</b> Rahmanullah Gurbaz(w), Ibrahim
                        Zadran, Rahmat Shah, Hashmatullah Shahidi(c), Najibullah
                        Zadran, Mohammad Nabi, Azmatullah Omarzai, Rashid Khan,
                        Mujeeb Ur Rahman, Naveen-ul-Haq, Fazalhaq Farooqi
                    </p>

                    <p>
                        <b>India:</b> Rohit Sharma(c), Ishan Kishan, Virat
                        Kohli, Shreyas Iyer, KL Rahul(w), Hardik Pandya,
                        Ravindra Jadeja, Shardul Thakur, Kuldeep Yadav, Jasprit
                        Bumrah, Mohammed Siraj
                    </p>
                </div>
                {/* Right Content */}
                <div className="overflow-hidden mt-5">
                    {/* Suggested Match */}
                    <SuggestedMatch></SuggestedMatch>
                    {/* Latest News */}
                    <LatestNewsSection></LatestNewsSection>
                    {/* Suggested News */}
                    <SuggestedNewsSection></SuggestedNewsSection>
                </div>
            </section>
            <div className="bg-[#eeee] container rounded-lg w-full h-52 flex items-center justify-center my-5 overflow-hidden">
                <p className="text-5xl text-black text-opacity-10">Ad Here</p>
            </div>
        </>
    );
};

export default NewsDetailsPage;
