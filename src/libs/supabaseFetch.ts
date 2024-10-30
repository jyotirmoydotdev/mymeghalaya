import config from "@/config"

export const supabaseImg = (value:string) => {
    const url = (
        process.env.NODE_ENV === "development"
          ? ("http://127.0.0.1:54321/storage/v1/object/public/images-public"+value)
          : ("https://iljvzqnofwssylgsftko.supabase.co/storage/v1/object/public/images-public"+value)
    )
    return url
}

export const supabaseMd = (value:string) => {
    const url = (
        process.env.NODE_ENV === "development"
          ? ("http://127.0.0.1:54321/storage/v1/object/public/markdowns-public"+value)
          : ("https://iljvzqnofwssylgsftko.supabase.co/storage/v1/object/public/markdowns-public"+value)
    )
    return url
}