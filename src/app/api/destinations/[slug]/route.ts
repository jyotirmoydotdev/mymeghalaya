import { locationData } from "@/data/locationData";
import { LocationDataType } from "@/types/locationDataTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{ params }: { params: { slug: string } }) {
    const slug = params.slug
    
    let data:LocationDataType | null = null;
    for (let i = 0; i < locationData.length; i++) {
        if (locationData[i].slug === slug.toLowerCase()){
            data = locationData[i]
            break;
        }
    }

    // Response when destination is not found
    if ( data === null){
        return NextResponse.json(
            {
                msg: "Destination not found",
                data: null
            },
            {
                status: 400,
                statusText: "Invalid ID",
            }
        );
    }

    const others:LocationDataType[] = [];
    if (data !== null && data.others) {
        const othersSet = new Set(data.others.map((item: string) => item.toLowerCase()));
        
        for (let i = 0; i < locationData.length; i++) {
            if (locationData[i].slug && othersSet.has(locationData[i].slug.toLowerCase())) {
                others.push(locationData[i]);
            }
            
            if (others.length === 3) {
                break;
            }
        }
    }

    return NextResponse.json(
        {
            msg: "All Ok",
            data:{
                destination:data,
                nearby: others
            }
        },
        {
            status: 200,
            statusText: "Ok",
        }
    );
}