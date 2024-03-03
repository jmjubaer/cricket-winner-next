import match from "@/data/match.json"
import { NextResponse } from "next/server";
export const GET = async(request,{params}) => {
    try{
        // const result = match.find(data => data.id === params?.id)
		return NextResponse.json(match);
    }catch (err) {
        console.log(err.message);
    }
}