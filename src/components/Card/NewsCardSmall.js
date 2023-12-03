import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";

const NewsCardSmall = ({ singleNews }) => {
    const { image, timestamp, title, description,id } = singleNews || {};
    return (
        <div className="grid grid-cols-3 mt-[10px] py-[10px] gap-2 sm:gap-5 ">
            <Image
                width={245}
                height={168}
                alt="image Image"
                className="w-full h-full object-cover rounded-xl"
                src={image}
            />

            <div className="col-span-2">
                <p className="text-[#969696] text-sm sm:text-base">
                    <FaRegClock className="inline mr-1" />
                    {moment(timestamp).fromNow()}
                </p>
                <Link
                    href={`news/${id}`}
                    className="font-bold text-sm mt-[10px]"
                >
                    <span className="">
                        {title.slice(0, 60)}
                        ....
                    </span>
                </Link>
                <p className="mt-[10px] hidden sm:block md:hidden">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default NewsCardSmall;
