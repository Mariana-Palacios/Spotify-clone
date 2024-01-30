export interface SpotifyApiToken {
    access_token:string,
    token_type: string,
    expires_in: number
}

/** Artist Interface */
export interface Images {
    height:number,
    url: string,
    width: number
}

export interface Items {
    external_urls:{
        spotify:string
    },
    followers:{
        href:string,
        total: number
    },
    genres:string[],
    href:string,
    id:string,
    images: Images[],
    name:string,
    popularity:number,
    type:string,
    uri:string
}

export interface Artist {
    artists:{
        href:string,
        items:Items[],
        limit:number,
        next:string,
        offset:number,
        previous:any,
        total:number
    }
}
