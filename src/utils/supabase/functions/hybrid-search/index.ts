import "jsr:@supabase/functions-js/edge-runtime.d.ts";

import { createClient } from 'jsr:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!

const session = new Supabase.ai.Session('gte-small');

Deno.serve(async (req: Request) => {

    if (req.method === 'OPTIONS') {
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
    
    const { query } = await req.json();

    const embedding = await session.run(query, { mean_pool: true, normalize: true });

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data } = await supabase
    .rpc("hybrid_search", {
        query_text: query,
        query_embedding: JSON.stringify(embedding),
        match_count: 9,
        full_text_weight: 0.5,
        rrf_k: 60,
        semantic_weight: 0.5
    })
    .select("id, created_at, name, slug, tagline, images, created_at, rating")

    return new Response(JSON.stringify(data), {
       headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
});
