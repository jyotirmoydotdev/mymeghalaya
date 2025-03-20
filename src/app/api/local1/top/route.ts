import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url as string)
    const start = parseInt(searchParams.get("start") || "0", 10)
    const end = parseInt(searchParams.get("end") || "6", 10)
    
    const supabase = await createClient();

    try {
        const top_rated_destinations = await supabase
            .from("destinations_view")
            .select("id, name, images, tagline, slug, rating, created_at")
            .order("rating", {ascending:false})
            .range(start, end)

        const new_destinations = await supabase
            .from("destinations_view")
            .select("id, name, images, tagline, slug, rating, created_at")
            .range(start, end)
            .order("created_at", {ascending:false})

        const winter_escapes = await supabase
            .from("destinations_view")
            .select("id, name, images, tagline, slug, rating, created_at")
            .range(start, end)
            .contains("best_time_to_visit", [11,12,1])
            .order("rating", {ascending:false})
        
        if (top_rated_destinations.error || new_destinations.error || winter_escapes.error) {
            return NextResponse.json(
                {error: "Failed to fetch data from the database"},
                { status: 500}
            );
        }
        return NextResponse.json({
            data:[
                {
                    items: top_rated_destinations.data || [],
                    __typename: "Top-Rated Destinations",
                },
                {
                    items: new_destinations.data || [],
                    __typename: "Latest Destinations",
                },
                {
                    items: winter_escapes.data || [],
                    __typename: "Best Winter Destinations",
                },
            ],
        });
    } catch (error) {
        console.log("Error fetching data:", error);
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        );
    }
}