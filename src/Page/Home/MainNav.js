"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
const MainNav = () => {
    const [control, setControl] = useState(false);
    console.log(control);
    return (
        <div className="shadow-lg">
            <nav className="flex justify-between container items-center relative">
                <button
                    onClick={() => setControl(!control)}
                    className="block md:hidden text-[#323232] cursor-pointer"
                >
                    {control ? (
                        <FaTimes className="text-3xl" />
                    ) : (
                        <FaBars className="text-3xl" />
                    )}
                </button>
                <div
                    className={`absolute top-[50px] left-0 md:static md:h-auto md:w-auto overflow-hidden transition-all duration-500 ${
                        control
                            ? "w-full bg-white md:bg-transparent h-[calc(100vh-100px)] text-white text-left"
                            : "w-0"
                    }`}
                >
                    <ul
                        className={`flex-col flex md:flex-row text-[#969696] md:items-center gap-y-3`}
                    >
                        <li>
                            <Link
                                className="active link"
                                href={"/"}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="link" href={"/"}>
                                News
                            </Link>
                        </li>
                        <li>
                            <Link className="link" href={"/"}>
                                Match Prediction
                            </Link>
                        </li>
                        <li>
                            <Link className="link" href={"/"}>
                                Fantasy tips
                            </Link>
                        </li>
                        <li>
                            <button className="primary_btn-rounded items-center gap-1 md:hidden flex text-black mt-5">
                                <GoArrowUpRight className=" text-3xl" />
                                Be an expert
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-3 items-center">
                    <button className="flex items-center justify-center w-11 h-11 text-xl border border-[#F5F5F5] rounded-full ">
                        <FaMagnifyingGlass />
                    </button>
                    <button className="px-5 p-3 border border-[#F5F5F5] rounded-3xl">
                        <FaUser className="inline mr-2" />
                        Login
                    </button>
                    <button className="primary_btn-rounded items-center gap-1 md:flex hidden">
                        <GoArrowUpRight className=" text-3xl" />
                        Be an expert
                    </button>
                    <button className="lg:block hidden">
                        <FaBars className=" text-3xl" />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default MainNav;