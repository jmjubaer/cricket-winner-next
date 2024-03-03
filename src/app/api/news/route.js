import news from "@/data/news.json"
import { NextResponse } from "next/server";
export const GET = async(request) => {
    try{
		return NextResponse.json(news);
    }catch (err) {
        console.log(err.message);
    }
}