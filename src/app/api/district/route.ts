import { districtsData } from "@/data/districtData";
import { locationData } from "@/data/locationData";
import { DistrictDataType } from "@/types/districtDataType";
import { LocationDataType } from "@/types/locationDataTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const id = request.nextUrl.searchParams.get("id") || ""

    if (id === ""){
        return NextResponse.json(
            {
                msg: "Please provid a ID",
                data: null
            },{status:400, statusText:"Invalid ID"}
        )
    }

    let data:DistrictDataType | null = null;
    let destination: LocationDataType[] = [];

    for (let i = 0; i<districtsData.length; i++){
        if (id === districtsData[i].id){
            data = districtsData[i]
            break;
        }
    }

    if (data === null){
        return NextResponse.json(
            {
                msg: "District Does Not Exist",
                data : null,
            },
            {
                status:400,
                statusText:"Invalid ID"
            }
        );
    }

    for (let i=0 ; i<locationData.length;i++){
        if(locationData[i].location?.toLowerCase()===data.name?.toLowerCase()){
            destination.push(locationData[i]);
        }
    }

    return NextResponse.json(
        {
            msg: "All Ok",
            data : {
                districtData : data,
                destinationData: destination,
            },
        },
        {
            status:200,
            statusText:"Ok"
        }
    );
}