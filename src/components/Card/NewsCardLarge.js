import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";

const NewsCardLarge = ({ singleNews }) => {
    const { image, timestamp, title,id } = singleNews || {};
    return (
        <div className="">
            <Image
                width={245}
                height={168}
                alt="image Image"
                className="md:w-full h-[240px] object-cover rounded-xl"
                src={image}
            />

            <div className="mt-[10px]">
                <p className="text-[#969696]">
                    <FaRegClock className="inline mr-2" />
                    {moment(timestamp).fromNow()}
                </p>
                <Link href={`news/${id}`} className="font-bold mt-[10px]">
                    {title}
                </Link>
            </div>
        </div>
    );
};

export default NewsCardLarge;
