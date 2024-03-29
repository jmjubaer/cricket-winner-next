import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";

const VerticalNewsCardMedium = ({news}) => {
    const {id,image,timestamp,title,description} = news || {};
    return (
        <div
            className="grid grid-cols-3 mt-[10px] py-[10px] gap-2 sm:gap-5 "
        >
            <Image
                width={245}
                height={168}
                alt="image Image"
                className="w-full h-full object-cover rounded-xl"
                src={image}
            />

            <div className="col-span-2">
                <div className="flex items-center gap-2 sm:gap-5">
                    <p className="text-[#969696] text-sm sm:text-base">
                        <FaRegClock className="inline mr-1" />
                        {moment(timestamp).fromNow()}
                    </p>
                    <p className="px-3 py-[5px] bg-[#323232] rounded-3xl w-fit font-medium text-white text-xs sm:text-sm">
                        {"Asia Cup"}
                    </p>
                </div>
                <Link
                    href={`/news/${id}`}
                    className="font-bold text-sm sm:text-xl mt-[10px]"
                >
                    <span className="hidden sm:block">{title}</span>
                    <span className="sm:hidden block">
                        {title.slice(0, 40)}....
                    </span>
                </Link>
                <p className="mt-[10px] hidden sm:block">{description}</p>
            </div>
        </div>
    );
};

export default VerticalNewsCardMedium;
