import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Description } from '@interfaces/card-description';
import { mockDescription } from '@components/artist/__mocks__/mockDescription';

@Injectable({
  providedIn: 'root'
})
export class SaveLocalStorageService {

  private _favoriteHistory : Description[] = []
  constructor() {
    this.loadLocalStorage();
  }

  get favoriteHistory(){
    return [...this._favoriteHistory]
  }

  organizeFavorite( favorite:Description ){
    if( this._favoriteHistory ){
      this._favoriteHistory = this._favoriteHistory.filter( (oldFavorite) => oldFavorite !== favorite )
    }
    this._favoriteHistory.unshift( favorite )
    this._favoriteHistory = this.favoriteHistory.slice(0,10)
    this.saveLocalStorage()
  }

  searchFavorite( favorite:Description ):void{ //poner esta vaina en el corazon 
    this.organizeFavorite( favorite )
  }

  //Local storage 

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify( this._favoriteHistory ));
  }
  
  private loadLocalStorage():void {
    if( !localStorage.getItem('history')) return;

    this._favoriteHistory = JSON.parse( localStorage.getItem('history')! );

    if ( this._favoriteHistory.length === 0 ) return;
  }
  
}
