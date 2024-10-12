import { locationData } from "@/data/locationData";
import { LocationDataType } from "@/types/locationDataTypes";
import { createClient } from "@/utils/supabase/server";

import { NextRequest, NextResponse } from "next/server";

type SupabaseResponse<T> = {
    data: T[] | null;
    error: any | null;
};

async function fetchDestinationBySlug(slug:string) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('locationData')
        .select("*")
        .ilike('slug', slug);
    if (error) throw new Error(error.message);
    return data;
}

async function fetchOthers(othersSlugs:string[]) {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('locationData')
        .select("*")
        .in('slug', othersSlugs);
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
        const others = destination.others ? await fetchOthers(destination.others) : [];

        return NextResponse.json({ msg: "All Ok", data: { destination, nearby: others } }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: "Error fetching data", error: "Error" }, { status: 500 });
    }
}