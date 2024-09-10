import { locationData } from "@/data/locationData";
import { LocationDataType } from "@/types/locationDataTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{ params }: { params: { id: string } }) {
    const id = params.id
    const idNumber = Number(id);
    
    if (Number.isNaN(idNumber)){
        return NextResponse.json(
            {
                msg: "Invalid ID",
                data: null
            },
            {
                status: 401,
            },
        );
    }
    
    const data = locationData[idNumber];
    const others:LocationDataType[] = [];

    if (data && data.others) {
        for (let i = 0; i < 3; i++) {
          const temp = locationData[data.others[i]];
          if (temp) {
            others.push(temp);
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
        }
    );
}