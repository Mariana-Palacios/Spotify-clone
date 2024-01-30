export interface Images{
        height:number,
        url:string,
        width:number
}

export interface Artist{    
        external_urls:{
                spotify:string
        },
        href:string,
        id:string,
        name:string,
        type:string,
        uri:string    
}

export interface Album{
        album_type:string,
        artists:Artist[],
        external_urls:{
                spotify:string
        },
        href:string,
        id:string,
        images:Images[],
        is_playable:boolean,
        name:string,
        release_date:string,
        release_date_precision:string,
        total_tracks:number,
        type:string,
        uri:string
}

export interface Track {
        album: Album[],
        artists: Artist[],
        disc_number:number,
        duration_ms:number,
        explicit:boolean,
        external_ids: {
                isrc:string
        },
        external_urls:{
                spotify:string
        },
        href:string,
        id:string,
        is_local:boolean,
        is_playable:boolean,
        name:string,
        popularity:number,
        preview_url:any,
        track_number:number
        type:string,
        uri:string
}

export interface Tracks {
        tracks: Track[]
}
