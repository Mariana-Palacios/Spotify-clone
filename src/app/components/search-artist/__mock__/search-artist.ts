import { Artist, Items, SpotifyApiToken } from '@interfaces/spotifyApi';

export const mockItems: Items = {
    external_urls: {
        spotify: ''
    },
    followers: {
        href: '',
        total: 0
    },
    genres: [],
    href: '',
    id: '',
    images: [],
    name: '',
    popularity: 0,
    type: '',
    uri: ''
};

export const artist:Artist = {
    artists:{
        href: '',
        items: [mockItems],
        limit: 0,
        next: '',
        offset: 0,
        previous: null,
        total: 0
    }
};

export const spotifyToken:SpotifyApiToken = {
    access_token:'',
    token_type: '',
    expires_in: 0
}