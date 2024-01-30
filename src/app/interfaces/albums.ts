import { Images } from "./spotifyApi";
import { Artist } from "./tracks";

export interface Items{
        album_group:string,
        album_type:string,
        artists:Artist[],
        available_markets:string[],
        external_urls: {
                spotify:string
        },
        href:string,
        id:string,
        images:Images[],
        name:string,
        release_date:string,
        release_date_precision:string,
        total_tracks:number
        type:string,
        uri:string
}

export interface Albums {
        href:string,
        items:Items[],
        limit:number,
        next:string,
        offset:number,
        previous:any,
        total:number
}
