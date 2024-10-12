import { LocationDataType } from "@/types/locationDataTypes";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const supabase = createClient();
    const search = request.nextUrl.searchParams.get("search") || "";
    const location = request.nextUrl.searchParams.get("location") || "all";
    const category = request.nextUrl.searchParams.get("category") || "all";
    const page = request.nextUrl.searchParams.get("page") || "1";
    const pageSize = request.nextUrl.searchParams.get("pageSize") || "3";
    const start = (Number(page) - 1) * Number(pageSize);
    const end = start + Number(pageSize) - 1;

    let query = supabase.from('locationData').select("*");

    if (search) {
        query = query.ilike('name', `%${search}%`);
    }

    if (location.toLowerCase() !== 'all') {
        query = query.ilike('location', location.toLowerCase());
    }

    if (category.toLowerCase() !== 'all') {
        query = query.ilike('category', category.toLowerCase());
    }

    query = query.range(start, end);

    const { data: destination, error } = await query;

    if (error) {
        return NextResponse.json(
            { msg: "Error fetching data", error: error.message },
            { status: 500 }
        );
    }

    return NextResponse.json({ destination });
}
