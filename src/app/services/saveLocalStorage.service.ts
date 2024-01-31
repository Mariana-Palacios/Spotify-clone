import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Description } from '@interfaces/card-description';
import { mockDescription } from '@components/artist/__mocks__/mockDescription';

@Injectable({
  providedIn: 'root'
})
export class SaveLocalStorageService {

  public _favoriteHistory:BehaviorSubject<Description[]> = new BehaviorSubject<any>([]);
  //private _favoriteHistory : Description[] = []
  constructor() {
    this.loadLocalStorage();
  }

  get favoriteHistory(){
    return this._favoriteHistory.asObservable()
  }

  organizeFavorite( favorite:Description ){
    let currentHistory = this._favoriteHistory.value

    if( currentHistory ){
      currentHistory = currentHistory.filter( (oldFavorite) => oldFavorite !== favorite )
    }
    currentHistory.unshift( favorite )
    currentHistory = currentHistory.slice(0,10)
    this._favoriteHistory.next(currentHistory);
    this.saveLocalStorage()
  }

  searchFavorite( favorite:Description ):void{ //poner esta vaina en el corazon 
    this.organizeFavorite( favorite )
  }

  //Local storage 

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._favoriteHistory.value));
  }

  private loadLocalStorage(): void {
    const storedHistory = localStorage.getItem('history');
    
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory) as Description[];
      this._favoriteHistory.next(parsedHistory);
    }
  }
  
}
