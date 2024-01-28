import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist, SpotifyApiToken } from '@interfaces/spotifyApi';
import { Subject } from 'rxjs';
import { ENV } from '@constants/env';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  private http = inject( HttpClient )

  public actristList = new Subject<any>();
  public spotifyToken = new Subject<any>();

  constructor(){
    this.actristList.next([{'name':'','id':''}])
  }

 /**
 * Get spotify token.
 * @param {string} clientId 
 * @param {string} clientSecret 
 * @return 
 */
  getSpotifyToken(clientId: string, clientSecret: string): Observable<any> {
    const requestBody = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
    const headers = new HttpHeaders()
    .set('accept', 'application/json')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    const token = this.http.post<SpotifyApiToken>(ENV.tokenUrl, requestBody, { headers: headers });
    return token
  }

  setToken(token: any) {
    this.spotifyToken.next(token)
  }

  getToken(){
    return this.spotifyToken.asObservable();
  }

  /** @return  the playlist from spotify*/
  getPlaylist( token: string ): Observable<any> {
    const artistUrl = `${ENV.spotifyApiUrl}/playlists/${ENV.playlistID}`;
    const headers = new HttpHeaders()
    .set('accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    return this.http.get<any>(artistUrl, { headers: headers });
  }
  
 /** @return  the artist List from the spotify playlist*/
  getArtists(spotifyApiRes: any): never[] {
    return spotifyApiRes.tracks.items.flatMap((artistItem:any) => {
      return artistItem.track.artists.map((artist:any) => {
        return {
          name: artist.name,
          id: artist.id
        };
      });
    });
  }

  /** @return  the artist List */
  getActristList() {
    return this.actristList.asObservable();
  }

  // Update the artist List
  setActristList(value: any) {
    this.actristList.next(value);
  }

  //HU1
  /** @return  the artist by tab name */
  getArtistByTabName( artist: string, token:SpotifyApiToken ): Observable<any> {
    const artistUrl = `${ENV.spotifyApiUrl}/search?q=${artist}&type=artist`;
    const headers = new HttpHeaders()
    .set('accept', 'application/json')
    .set('Authorization', `Bearer ${token.access_token}`)
    return this.http.get<Artist[]>(artistUrl, { headers: headers });
  }
}
