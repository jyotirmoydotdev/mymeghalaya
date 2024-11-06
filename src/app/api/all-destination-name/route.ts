import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// This is for search page
export async function GET(request: NextRequest) {
    const supabase = createClient();

    const { data } = await supabase
        .from('destinations')
        .select('id, name, slug, tagline, images') // For the card

    return NextResponse.json({data})
}