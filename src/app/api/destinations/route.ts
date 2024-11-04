import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const supabase = createClient();

    const search = request.nextUrl.searchParams.get("search")
    const location = request.nextUrl.searchParams.get("location")
    const category = request.nextUrl.searchParams.get("category")

    const page = Number(request.nextUrl.searchParams.get("page") || "0");
    const pageSize = Number(request.nextUrl.searchParams.get("pageSize") || "6");

    const start = page * pageSize;
    const end = start + pageSize;

    let query = supabase.from('destinations').select('id, name, images, description, slug')

    if (search) {
        query = query.ilike('name', `%${search}%`);
    }

    if (location) {
        query = query.ilike('location', location.toLowerCase());
    }

    if (category) {
        query = query.ilike('category', category.toLowerCase());
    }

    query = query.range(start, end);

    const { data, error } = await query;

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
        data: data
    });
}
