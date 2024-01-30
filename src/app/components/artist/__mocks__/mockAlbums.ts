import { Images } from '@interfaces/spotifyApi'; 
import { Items, Albums } from '@interfaces/albums'; 
import { Artist } from '@interfaces/tracks'; 

const mockImages: Images = {
  height: 0,
  url: '',
  width: 0,
};

const mockArtist:Artist = {
  external_urls: {
    spotify: '',
  },
  href: '',
  id: '',
  name: '',
  type: '',
  uri: '',
};

// Define valores por defecto para la interfaz 'Items'
const mockItem: Items = {
  album_group: '',
  album_type: '',
  artists: [mockArtist],
  available_markets: [],
  external_urls: {
    spotify: '',
  },
  href: '',
  id: '',
  images: [mockImages],
  name: '',
  release_date: '',
  release_date_precision: '',
  total_tracks: 0,
  type: '',
  uri: '',
};

// Define valores por defecto para la interfaz 'Albums'
export const mockAlbums: Albums = {
  href: '',
  items: [mockItem],
  limit: 0,
  next: '',
  offset: 0,
  previous: null,
  total: 0,
};

