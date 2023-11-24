import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoMdListBox } from "react-icons/io";
import { GiThink } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
const TopContent = () => {
    return (
        <div>
            <Tabs>
                <div className="flex justify-center">
                    <TabList className="flex my-5 content_tab text-[#323232] font-medium">
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none rounded-l-full">
                            <IoMdListBox className="inline text-2xl mr-1" />
                            Article
                        </Tab>
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none">
                            <GiThink className="inline text-2xl mr-1" />
                            Prediction
                        </Tab>
                        <Tab className="w-44 border text-center p-3 cursor-pointer outline-none rounded-r-full">
                            <MdVideoLibrary className="inline text-2xl mr-1" />
                            Videos
                        </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2 className="text-3xl mt-10 text-center text-[#969696]">
                        NO CONTENT AVAIlABLE
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-3xl mt-10 text-center text-[#969696]">
                        NO CONTENT AVAIlABLE
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2 className="text-3xl mt-10 text-center text-[#969696]">
                        NO CONTENT AVAIlABLE
                    </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TopContent;
