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

  getFromSpotifyApi(url:string, token:SpotifyApiToken): Observable<any>{
    const headers = new HttpHeaders()
    .set('accept', 'application/json')
    .set('Authorization', `Bearer ${token.access_token}`)
    return this.http.get(url, { headers: headers });
  }

  //HU1
  /** @return  the artists by tab name */
  getArtistByTabName( artist: string, token:SpotifyApiToken ): Observable<any>{
    const artistUrl = `${ENV.spotifyApiUrl}/search?q=${artist}&type=artist`;
    return this.getFromSpotifyApi(artistUrl,token)
  }

  /** @return  the artist album by id */
  getArtistAlbumById( id:string, token:SpotifyApiToken ): Observable<any>{
    const artistUrl = `${ENV.spotifyApiUrl}/artists/${id}/albums`;
    return this.getFromSpotifyApi(artistUrl,token)
  }
}
