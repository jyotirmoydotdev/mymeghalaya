import { supabaseUrl } from "@/lib/supabaseUrl";
import { locationData } from "@/staticData/locationData";
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
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('destinations_view')
        .select("*")
        .ilike('slug', slug);
    if (error) throw new Error(error.message);
    console.log("cant fetch")
    return data;
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
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('destinations_view')
        .select("id, name, images, tagline, slug, rating, created_at")
        .in('slug', nearby_attractions);
    if (error) throw new Error(error.message);
    return data;
}

export async function GET(request:NextRequest, props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const slug = params.slug

    try {

        // Fetch destination
        const destinationData = await fetchDestinationBySlug(slug);

        // Check if data exist, if not return a not oky response 
        if (destinationData.length === 0) {
            return NextResponse.json({ msg: "Destination not found", data:{destination : null, nearby: null} }, { status: 400 });
        }

        // store the destination in "destination"
        const destination:DestinationDataType = destinationData[0];

        // fetch and store the neraby attractions in "nearby"
        const nearby = destination.nearby_attractions ? await fetchOthers(destination.nearby_attractions) : [];

        // fetch the description and store it in destination.description 
        // const description = fetchDescription(supabaseUrl(destination.description as string))
        // destination.description = (await description).toString();

        return NextResponse.json({ msg: "All Ok", data: { destination, nearby_attractions: nearby } }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error fetching data", error: error }, { status: 500 });
    }
}