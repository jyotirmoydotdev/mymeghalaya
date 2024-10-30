import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const supabase = createClient();

    const { data } = await supabase
        .from('destinations')
        .select('name, slug, description, images')

    return NextResponse.json({data})
}