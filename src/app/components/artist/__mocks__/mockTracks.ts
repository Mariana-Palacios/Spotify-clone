import {Images, Artist, Album, Track, Tracks } from '@interfaces/tracks'


//TRACKS 

const mockImages: Images = {
        height: 0,
        url: '',
        width: 0,
};
      
const mockArtist: Artist = {
        external_urls: {
          spotify: '',
        },
        href: '',
        id: '',
        name: '',
        type: '',
        uri: '',
};
      
const mockAlbum: Album = {
        album_type: '',
        artists: [mockArtist],
        external_urls: {
          spotify: '',
        },
        href: '',
        id: '',
        images: [mockImages],
        is_playable: false,
        name: '',
        release_date: '',
        release_date_precision: '',
        total_tracks: 0,
        type: '',
        uri: '',
};
      
const mockTrack: Track = {
        album: [mockAlbum],
        artists: [mockArtist],
        disc_number: 0,
        duration_ms: 0,
        explicit: false,
        external_ids: {
          isrc: '',
        },
        external_urls: {
          spotify: '',
        },
        href: '',
        id: '',
        is_local: false,
        is_playable: false,
        name: '',
        popularity: 0,
        preview_url: null, // Puedes cambiar esto según tus necesidades, si 'preview_url' debe ser un string
        track_number: 0,
        type: '',
        uri: '',
};
      
export const mockTracks: Tracks = {
        tracks: [mockTrack],
};
            
