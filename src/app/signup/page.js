/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import cover from "@/assets/Authentication/cover_image.jpg";
import Image from "next/image";
import logo from "@/assets/Home/CRICKETWINNER.png";
import googleLogo from "@/assets/news/flat-color-icons_google.png";
import whatsappLogo from "@/assets/news/logos_whatsapp-icon.png";
import telegramLogo from "@/assets/news/logos_telegram.png";
import { useForm } from "react-hook-form";
import {
    FaApple,
    FaEye,
    FaEyeSlash,
    FaFacebook,
    FaGoogle,
} from "react-icons/fa6";
import Link from "next/link";
import SocialLogin from "@/components/SocialLogin";
import SocialArea from "@/components/SocialArea";
import VectorBg from "@/components/VectorBg";
const SignUpPage = () => {
    const [show, setShow] = useState(false);
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        reset();
        console.log(data);
    };
    return (
        <section className="w-full h-fit py-10 min-h-[100vh] bg-black bg-opacity-60 flex items-center justify-center">
            <div className="grid lg:grid-cols-2 container bg-white rounded-xl overflow-hidden">
                <div className="bg_image hidden lg:flex flex-col justify-between p-10">
                    <Image src={logo} alt="logo" />
                    <div className="text-white">
                        <h2 className="text-5xl font-bold">Be Winner today</h2>
                        <p className="text-xl mt-[10px]">
                            Get the latest cricket updates. join our community
                        </p>
                        <ul className="flex items-center gap-3 mt-12">
                            <li>
                                <a
                                    href="#"
                                    className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full"
                                >
                                    <Image
                                        className="rounded-full"
                                        src={googleLogo}
                                        alt="icon"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full"
                                >
                                    <Image
                                        className="rounded-full"
                                        src={whatsappLogo}
                                        alt="icon"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full"
                                >
                                    <Image
                                        className="rounded-full"
                                        src={telegramLogo}
                                        alt="icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <VectorBg >
                        <div className="sm:p-8 p-4 py-5 flex sm:flex-row flex-col gap-5 lg:hidden sm:items-center justify-between">
                            <div className="text-white">
                                <Image src={logo} alt="logo"/>
                                <h3 className="text-3xl font-extrabold">
                                    Be winner today!
                                </h3>
                                <p className="font-medium text-sm">
                                    Get the latest cricket updates, Join our
                                    community
                                </p>
                            </div>
                            <ul className="flex items-center gap-[10px]">
                                <li>
                                    <a
                                        href="#"
                                        className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full"
                                    >
                                        <Image
                                            className="rounded-full"
                                            src={googleLogo}
                                            alt="icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full"
                                    >
                                        <Image
                                            className="rounded-full"
                                            src={whatsappLogo}
                                            alt="icon"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full"
                                    >
                                        <Image
                                            className="rounded-full"
                                            src={telegramLogo}
                                            alt="icon"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </VectorBg>
                    <div className="sm:w-10/12 w-11/12 my-9 mx-auto">
                        <h2 className="text-5xl font-bold">Login</h2>
                        <p className="sm:text-xl mt-5">
                            Welcome back, Enter your credentials to access your
                            account.
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-8"
                        >
                            <div className="">
                                <h4>Name</h4>
                                <input
                                    {...register("name")}
                                    className="border rounded-md p-[10px] font-medium outline-none mt-1 w-full"
                                    placeholder="E.g. Abhiraj"
                                />
                            </div>
                            <div className="mt-[10px]">
                                <h4>Email Address</h4>
                                <input
                                    {...register("email")}
                                    type="email"
                                    className="border rounded-md p-[10px] font-medium outline-none mt-1 w-full"
                                    placeholder="hello@example.com"
                                />
                            </div>

                            <div className="relative mt-[10px]">
                                <div className="flex justify-between">
                                    <h4>Password</h4>
                                    <button className="text-red-400">
                                        Forgot Password
                                    </button>
                                </div>
                                <input
                                    className={`border rounded-md p-[10px] font-medium outline-none w-full mt-1 ${
                                        errors.password && "border-red-500"
                                    }`}
                                    placeholder="Enter your Password"
                                    type={show ? "text" : "password"}
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                <span
                                    className="absolute text-lg bottom-3 right-3 cursor-pointer"
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {/* Todo: Change the error sate and massage */}
                            {errors.password && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                            <div className="flex items-center gap-2 mt-5">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="save"
                                    className=" w-[19px] h-[19px]"
                                />
                                <label htmlFor="save">Remember me</label>
                            </div>

                            <input
                                type="submit"
                                className="primary_btn w-2/5 mt-8"
                            />
                        </form>
                        {/* Divider */}
                        <div className="text-[#969696] mt-8 flex items-center">
                            <div className="h-[2px] w-full bg-[#D8D8D8]"></div>
                            <span className="w-full text-center">
                                or sign up with
                            </span>
                            <div className="h-[2px] w-full bg-[#D8D8D8]"></div>
                        </div>
                        <SocialLogin></SocialLogin>
                        <p className="font-medium mt-7 text-center lg:text-left sm:text-base text-sm">
                            Don't have an account?{" "}
                            <Link
                                href={"/login"}
                                className="text-[#323232] underline cursor-pointer font-bold"
                            >
                                Login 
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
