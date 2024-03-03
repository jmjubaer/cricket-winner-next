"use client";
import VectorBg from "@/components/VectorBg";
import React from "react";
import { useForm } from "react-hook-form";
import {
    FaDiscord,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLink,
    FaPaperPlane,
    FaXTwitter,
} from "react-icons/fa6";

const ContactUsPage = () => {
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
        <div className="pb-6">
            <VectorBg>
                <div className="container mt-12 mb-28 text-white">
                    <h2 className="text-[32px] sm:text-5xl font-black">Contact us</h2>
                    <p className="sm:text-xl sm:mt-[10px] font-medium">
                        Our friendly team would love to hear from you.
                    </p>
                </div>
            </VectorBg>
            <div className="container grid md:grid-cols-3 gap-5">
                <div className="md:col-span-2 p-5 -mt-12 z-10 bg-white shadow-md rounded-xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid sm:grid-cols-2 gap-[10px]">
                            <div className="">
                                <h4>First Name*</h4>
                                <input
                                    {...register("firstName", {
                                        required: true,
                                    })}
                                    className={`border rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                        errors.firstName && "border-[#E33E38]"
                                    }`}
                                    placeholder="First Name"
                                />
                                {errors.firstName && (
                                    <span className="text-[#E33E38] mt-1">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="">
                                <h4>Last Name</h4>
                                <input
                                    {...register("lastname")}
                                    className="border rounded-md p-[10px] font-medium outline-none mt-1 w-full"
                                    placeholder="E.g. Abhiraj"
                                />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-[10px] mt-[10px] sm:mt-6">
                            <div className="">
                                <h4>Email Address*</h4>
                                <input
                                    {...register("email", {
                                        required: true,
                                    })}
                                    className={`border rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                        errors.email && "border-[#E33E38]"
                                    }`}
                                    placeholder="hello@example.com"
                                />
                                {errors.email && (
                                    <span className="text-[#E33E38] mt-1">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="">
                                <h4>Company</h4>
                                <input
                                    {...register("company")}
                                    className="border rounded-md p-[10px] font-medium outline-none mt-1 w-full"
                                    placeholder="E.g. Cricketwinner"
                                />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-[10px] mt-[10px] sm:mt-6">
                            <div className="">
                                <h4>Phone number*</h4>
                                <input
                                    {...register("phone", {
                                        required: true,
                                    })}
                                    className={`border rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                        errors.phone && "border-[#E33E38]"
                                    }`}
                                    placeholder="+91 75638935384"
                                />
                                {errors.phone && (
                                    <span className="text-[#E33E38] mt-1">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="">
                                <h4>Subject*</h4>
                                <input
                                    {...register("subject", {
                                        required: true,
                                    })}
                                    className={`border rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                        errors.subject && "border-[#E33E38]"
                                    }`}
                                    placeholder="Subject"
                                />
                                {errors.subject && (
                                    <span className="text-[#E33E38] mt-1">
                                        This field is required
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4>Message</h4>
                            <textarea
                                {...register("email", {
                                    required: true,
                                })}
                                className="border rounded-md p-[10px] font-medium outline-none mt-1 w-full min-h-[120px]"
                                placeholder="Your message here"
                            ></textarea>
                        </div>

                        <div className="flex sm:items-center gap-2 mt-6 text-[#667085]">
                            <input
                                type="checkbox"
                                name=""
                                id="save"
                                className=" w-[19px] h-[19px]"
                            />
                            <label htmlFor="save">
                                You agree to our friendly privacy policy.
                            </label>
                        </div>

                        <input
                            type="submit"
                            className="primary_btn w-full mt-8"
                            value={"Send message"}
                        />
                    </form>
                </div>
                <div className="md:-mt-12 z-10 mt-5 md:block grid sm:grid-cols-2 md:grid-cols-1 gap-5">
                    <div className="p-5 bg-white shadow-md rounded-xl flex flex-col justify-between">
                        <h3 className="text-2xl font-bold">
                            Contact Information
                        </h3>
                        <div className="flex items-center gap-[5px] mt-5">
                            <FaEnvelope />
                            <h5>hello@support.com</h5>
                        </div>
                        <ul className="flex gap-[5px] mt-5">
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
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"
                                >
                                    <FaDiscord />
                                </a>
                            </li>
                        </ul>
                        {/* Todo: change email */}
                        <div className="mt-5">
                            <a
                                href="mailto:hello@support.com"
                                className="block text-center px-5 py-[10px] text-sm border font-medium"
                            >
                                Contact team
                            </a>
                        </div>
                    </div>
                    <div className="p-5 md:mt-5 bg-white shadow-md rounded-xl flex flex-col justify-between">
                        <h3 className="text-2xl font-bold">Sales</h3>
                        <p className="mt-5">
                            For advertisement query, kindly reach out to us on
                            the below email
                        </p>
                        <div className="flex items-center gap-[5px] mt-5">
                            <FaEnvelope />
                            <h5>hello@sales.com</h5>
                        </div>
                        <div className="mt-5">
                            <a
                                href="mailto:hello@sales.com"
                                className="block text-center px-5 py-[10px] text-sm border font-medium"
                            >
                                Sales team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
