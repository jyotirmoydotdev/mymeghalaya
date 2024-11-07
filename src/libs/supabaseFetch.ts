import config from "@/config"

export const supabaseFetch = (value:string) => {
    const url = (
        process.env.NODE_ENV === "development"
          ? ("http://127.0.0.1:54321/storage/v1/object/public"+value)
          : ("https://iljvzqnofwssylgsftko.supabase.co/storage/v1/object/public"+value)
    )
    return url
}