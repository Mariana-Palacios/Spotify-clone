export interface Description{
        logo:{
                url:string,
        }
        type:string,
        title:string,
        img?:{
                url:string,
        },
        nameArtist:string,
        nameAlbum?:string,
        year:string,
        countSongs?: number,
        time?:number,
}
