import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";

const VerticalNewsCard = ({ news }) => {
    const { image, timestamp, title,id } = news || {};
    return (
        <div className="p-3 mx-auto">
            <Image
                width={350}
                height={200}
                alt="news Image"
                className="w-full sm:h-[200px] object-cover object-top rounded-xl"
                src={image}
            />
            <p className="text-[#969696] my-3">
                <FaRegClock className="inline mr-2" />
                {moment(timestamp).fromNow()}
            </p>
            <Link href={`news/${id}`} className="font-bold text-sm">{title}</Link>
        </div>
    );
};

export default VerticalNewsCard;
