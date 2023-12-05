import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="grid sm:grid-cols-3 gap-1 mt-2">
            <button className="flex items-center w-full rounded-md border py-3 px-5 justify-center gap-2 font-medium">
                <FaGoogle className="text-2xl" /> Google
            </button>
            <button className="flex items-center w-full rounded-md border py-3 px-5 justify-center gap-2 font-medium">
                <FaApple className="text-2xl" /> Apple
            </button>
            <button className="flex items-center w-full rounded-md border py-3 px-5 justify-center gap-2 font-medium">
                <FaFacebook className="text-2xl" /> Facebook
            </button>
        </div>
    );
};

export default SocialLogin;
