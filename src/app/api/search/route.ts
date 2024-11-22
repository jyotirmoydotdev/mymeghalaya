import { createClient } from "@/utils/supabase/server";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(params: NextApiRequest) {
    const supabase = createClient();

    const response = await supabase.from('')
}