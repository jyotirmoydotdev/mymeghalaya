import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const supabase = await createClient();

    const page = Number(request.nextUrl.searchParams.get("page") || "0");
    const pageSize = Number(request.nextUrl.searchParams.get("pageSize") || "8");

    const start = page * pageSize;
    const end = start + pageSize;

    const { data, error } = await supabase.from('destinations_view')
    .select("id, name, images, tagline, slug, rating, created_at")
    .range(start, end);

    if (error) {
        return NextResponse.json(
            {
                msg: "Error fetching data",
                error: error.message
            },
            {
                status: 500
            }
        );
    }

    if (data.length > pageSize){
        const paginatedData = data.slice(0, pageSize)
        return NextResponse.json({
            data: paginatedData,
            nextPage: page + 1 
        })
    }


    return NextResponse.json({
        data: data,
    });
}
