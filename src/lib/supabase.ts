import { appconfig } from "../../appconfig"

export function supabaseurl(value:string){
    const url = (
        process.env.NODE_ENV === "development"
          ? (`http://127.0.0.1:54321/storage/v1/object/public${value}`)
          : (`https://${appconfig.supabase}/storage/v1/object/public${value}`)
    )
    return url
}