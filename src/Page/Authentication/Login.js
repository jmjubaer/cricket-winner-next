"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/Home/CRICKETWINNER.png";
import googleLogo from "@/assets/news/flat-color-icons_google.png";
import whatsappLogo from "@/assets/news/logos_whatsapp-icon.png";
import telegramLogo from "@/assets/news/logos_telegram.png";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
const LoginPage = () => {
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
        <section className="grid grid-cols-2 container bg-white rounded-xl overflow-hidden h-fit sticky top-[5vh] left-0">
            <div className="bg_image flex flex-col justify-between p-10">
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
                <div className="w-10/12 my-9 mx-auto">
                    <h2 className="text-5xl font-bold">Login</h2>
                    <p className="text-xl mt-5">
                        Welcome back, Enter your credentials to access your
                        account.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div className="">
                            <h4>Email Address</h4>
                            <input
                                {...register("email")}
                                type="email"
                                className="border rounded-md p-[10px] font-medium outline-none mt-1 w-full"
                                placeholder="hello@example.com"
                            />
                        </div>

                        <div className="relative mt-5">
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
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
