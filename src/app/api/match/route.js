import match from "@/data/match.json"
import { NextResponse } from "next/server";
export const GET = async(request) => {
    try{
		return NextResponse.json(match);
    }catch (err) {
        console.log(err.message);
    }
}