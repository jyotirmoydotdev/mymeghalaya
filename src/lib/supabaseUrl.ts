import config from "@/config"

export const supabaseUrl = (value:string) => {
    const url = (
        process.env.NODE_ENV === "development"
          // ? ("http://127.0.0.1:54321/storage/v1/object/public"+value)
          ? (""+value)
          : ("https://iljvzqnofwssylgsftko.supabase.co/storage/v1/object/public"+value)
    )
    return url
}