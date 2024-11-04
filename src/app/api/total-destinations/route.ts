import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const supabase = createClient();

    const { count, error } = await supabase
        .from('destinations')
        .select('*', { count: 'exact', head: true })

    return NextResponse.json({count})
}