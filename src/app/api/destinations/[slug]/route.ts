import { supabaseMd } from "@/libs/supabaseFetch";
import { locationData } from "@/staticData/locationData";
import { LocationDataType } from "@/types/locationDataTypes";
import { createClient } from "@/utils/supabase/server";
import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

type SupabaseResponse<T> = {
    data: T[] | null;
    error: any | null;
};

async function fetchDestinationBySlug(slug:string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('destinations')
        .select("*")
        .ilike('slug', slug);
    if (error) throw new Error(error.message);
    return data;
}

async function fetchAboutSection(url: string) {
    try {
        const aboutData = await axios.get(url)
        return aboutData.data
    } catch (error) {
        console.log(error)
    }
}

async function fetchOthers(nearby_attractions:string[]) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('destinations')
        .select('name, description, slug, images')
        .in('id', nearby_attractions);
    if (error) throw new Error(error.message);
    return data;
}

export async function GET(request:NextRequest,{ params }: { params: { slug: string } }) {
    const slug = params.slug

    try {
        const destinationData = await fetchDestinationBySlug(slug);
        if (destinationData.length === 0) {
            return NextResponse.json({ msg: "Destination not found", data:{destination : null, nearby: null} }, { status: 400 });
        }

        const destination = destinationData[0];
        const others = destination.nearby_attractions ? await fetchOthers(destination.nearby_attractions) : [];
        const about = fetchAboutSection(supabaseMd(destination.about))
        destination.about = (await about).toString();

        return NextResponse.json({ msg: "All Ok", data: { destination, nearby_attractions: others } }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error fetching data", error: error }, { status: 500 });
    }
}