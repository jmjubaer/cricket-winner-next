import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { RiFileList2Fill } from "react-icons/ri";

const Announce = () => {
    return (
        <div className="bg-[#323232] py-16">
            <div className="container text-white text-center">
                <span className="text-5xl font-bold">“</span>
                <h2 className="text-3xl font-bold my-[10px]">It is not my job to announce the winner</h2>
                <p>
                    <b>Rohit Sharma</b> on being asked if England were rightly
                    awarded the World Cup title in 2019
                </p>
                <div className="flex gap-3 w-fit mx-auto mt-5">
                    <button className="px-5 py-[10px] border border-white rounded-3xl">
                        <FaPaperPlane className="inline text-xl mr-1"/> Share
                    </button>
                    <button className="px-5 py-[10px] border border-white rounded-3xl">
                        {" "}
                        <RiFileList2Fill className="inline text-xl mr-1"/>
                        See all
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Announce;
