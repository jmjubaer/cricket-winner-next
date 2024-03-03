import Image from "next/image";
import React from "react";
import VectorBg from "./VectorBg";
import googleLogo from "@/assets/news/flat-color-icons_google.png";
import whatsappLogo from "@/assets/news/logos_whatsapp-icon.png";
import telegramLogo from "@/assets/news/logos_telegram.png";
const SocialArea = ({rounded}) => {
    return (
        <div>
            <VectorBg rounded={rounded}>
                <div className="p-8 flex sm:flex-row flex-col gap-5 items-center justify-between">
                    <div className="text-white text-center sm:text-left">
                        <h3 className="text-3xl font-extrabold">
                            Be winner today!
                        </h3>
                        <p className="font-medium text-sm">
                            Get the latest cricket updates, Join our community
                        </p>
                    </div>
                    <ul className="flex items-center sm:justify-normal justify-center gap-[10px]">
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
        </div>
    );
};

export default SocialArea;
