import { locationData } from "@/data/locationData";
import { LocationData } from "@/types/locationTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const search = request.nextUrl.searchParams.get("search")
    const location = request.nextUrl.searchParams.get("location")
    const category = request.nextUrl.searchParams.get("category")

    const destination: LocationData[] = [];

    if (search || category){
        for (let i=0 ; i<locationData.length;i++){
            if (locationData[i].name?.toLowerCase().includes(search?search.toLowerCase():"")){
                if(location?.toLowerCase()!=='all'?locationData[i].location?.toLowerCase()===location?.toLowerCase():true){
                    if(category?.toLowerCase()!=='all'?locationData[i].category?.toLowerCase()===category?.toLowerCase():true){
                        destination.push(locationData[i]);
                    }
                }
            }
        }
    }
    return NextResponse.json({destination});
}