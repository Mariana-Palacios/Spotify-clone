import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyApiToken } from '@interfaces/spotifyApi';
import { Subject } from 'rxjs';
import { ENV } from '@constants/env';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  private http = inject( HttpClient )

  public actristList = new Subject<any>();

  constructor(){
    this.actristList.next([{'name':'','id':''}])
  }

 /**
 * Get spotify token.
 * @param {string} clientId 
 * @param {string} clientSecret 
 * @return 
 */
  getToken(clientId: string, clientSecret: string): Observable<any> {
    const requestBody = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
    const headers = new HttpHeaders()
    .set('accept', 'application/json')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    return this.http.post<SpotifyApiToken>(ENV.tokenUrl, requestBody, { headers: headers });
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
}
