import { districtsData } from "@/staticData/districtData";
import { locationData } from "@/staticData/locationData";
import { DistrictDataType } from "@/types/districtDataType";
import { LocationDataType } from "@/types/locationDataTypes";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id") || ""

    if (id === "") {
        return NextResponse.json(
            {
                msg: "Please provid a ID",
                data: null
            }, { status: 400, statusText: "Invalid ID" }
        )
    }

    let data: DistrictDataType | null = null;

    for (let i = 0; i < districtsData.length; i++) {
        if (id === districtsData[i].id) {
            data = districtsData[i]
            break;
        }
    }

    if (data === null) {
        return NextResponse.json(
            {
                msg: "District Does Not Exist",
                data: null,
            },
            {
                status: 400,
                statusText: "Invalid ID"
            }
        );
    }

    const supabase = createClient();

    let query = supabase.from('destinations').select('id, name, images, description, slug').ilike('location', data.name as string);

    const nearby = await query;

    if (nearby.error) {
        return NextResponse.json(
            {
                msg: "Error fetching data",
                error: nearby.error.message
            },
            {
                status: 500
            }
        );
    }

    return NextResponse.json(
        {
            msg: "All Ok",
            data: {
                districtData: data,
                destinationData: nearby.data,
            },
        },
        {
            status: 200,
            statusText: "Ok"
        }
    );
}