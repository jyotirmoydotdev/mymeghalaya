import { supabaseUrl } from "@/lib/supabaseUrl";
import { destinationsData, locationData } from "@/staticData/locationData";
import { DestinationDataType } from "@/types/destinationDataType";
import { LocationDataType } from "@/types/locationDataTypes";
import { createClient } from "@/utils/supabase/server";
import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

type SupabaseResponse<T> = {
    data: T[] | null;
    error: any | null;
};

// Fetch the destination data 
async function fetchDestinationBySlug(slug:string) {
    const data = destinationsData.find((item)=>item.slug == slug)
    return data
}

// Fetch the destination description from the /markdowns-public folder
async function fetchDescription(url: string) {
    try {
        const DescriptionResponse = await axios.get(url)
        return DescriptionResponse.data
    } catch (error) {
        console.log(error)
    }
}

// Fetch the nearby atrractions 
async function fetchOthers(nearby_attractions:string[]) {
    return destinationsData.slice(0, 3);
}

export async function GET(request:NextRequest, props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const slug = params.slug

    try {

        // Fetch destination
        const destinationData = await fetchDestinationBySlug(slug);

        // Check if data exist, if not return a not oky response 
        if (destinationData === undefined) {
            return NextResponse.json({ msg: "Destination not found", data:{destination : null, nearby: null} }, { status: 400 });
        }

        // store the destination in "destination"
        const destination = destinationData;

        // fetch and store the neraby attractions in "nearby"
        const nearby = destination.nearby_attractions ? await fetchOthers(destination.nearby_attractions) : [];

        // fetch the description and store it in destination.description 
        // const description = fetchDescription(destination.description)
        // destination.description = (await description).toString();

        return NextResponse.json({ msg: "All Ok", data: { destination, nearby_attractions: nearby } }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error fetching data", error: error }, { status: 500 });
    }
}