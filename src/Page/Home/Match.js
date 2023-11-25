import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MatchCard from "@/components/MatchCard";
const Match = () => {
    const match = [
        {
            MatchTitle: "Asia cup (Final)",
            status: "Upcoming",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
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
            MatchTitle: "Asia cup (Final)",
            status: "Finished",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
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
            MatchTitle: "Asia cup (Final)",
            status: "Live",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
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
        {
            MatchTitle: "Asia cup (Final)",
            status: "Live",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
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
        {
            MatchTitle: "Asia cup (Final)",
            status: "Live",
            banner: "https://i.ibb.co/XFcr8rh/image-16.png",
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
        }
    ];
    return (
        <div className="container mt-5">
            <Tabs>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-medium">
                        Cricket Match Predictions & Tips
                    </h2>
                    <TabList className="flex match_tab">
                        <Tab className="border-0 border-b-2 cursor-pointer px-5 py-3 outline-none">
                            Today
                        </Tab>
                        <Tab className="border-0 border-b-2 cursor-pointer px-5 py-3 outline-none">
                            Tomorrow
                        </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <Swiper
                        // slidesPerView={1}
                        breakpoints={{
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            790: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1220: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="matchSwiper mt-5"
                    >
                        {match.map((single, idx) => (
                            <SwiperSlide key={idx}>
                                <MatchCard single={single}></MatchCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-3xl mt-10 text-center text-[#969696]">No Match Available</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Match;
