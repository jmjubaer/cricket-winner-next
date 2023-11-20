import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoMdListBox } from "react-icons/io";
import { GiThink } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
const MainContent = () => {
    return (
        <div>
            <Tabs>
                <div className="flex justify-between">
                    <TabList className=" flex">
                        <Tab className="border-0 border-b-2 cursor-pointer px-5 py-3 outline-none">
                            <IoMdListBox className="inline text-xl" />
                            Article
                        </Tab>
                        <Tab className="border-0 border-b-2 cursor-pointer px-5 py-3 outline-none">
                            <GiThink className="inline text-xl" />
                            Prediction
                        </Tab>
                        <Tab className="border-0 border-b-2 cursor-pointer px-5 py-3 outline-none">
                            <MdVideoLibrary className="inline text-xl"/>
                            Videos
                        </Tab>
                    </TabList>
                </div>

                <TabPanel></TabPanel>
                <TabPanel>
                    <h2 className="text-3xl mt-10 text-center text-[#969696]">
                        No Match Available
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-3xl mt-10 text-center text-[#969696]">
                        No Match Available
                    </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MainContent;
