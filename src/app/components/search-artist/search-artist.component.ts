import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SpotifyApiService } from '@services/spotifyApi.service';
import { artist, spotifyToken } from './__mock__/search-artist';
import { Artist, Items, SpotifyApiToken } from '@interfaces/spotifyApi';

@Component({
  selector: 'app-search-artist',
  standalone: true,
  imports: [
  CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, 
    MatSortModule, MatPaginatorModule
  ],
  templateUrl: './search-artist.component.html',
  styleUrl: './search-artist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchArtistComponent {     

  displayedColumns: string[] = ['id','img','name'];
  dataSource: MatTableDataSource<Items>;

  public isSearching:boolean = false
  token = signal(spotifyToken)
  public filterValue:string
  public prueba = artist

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public spotifyService = inject(SpotifyApiService)
  users = signal(artist)

  constructor() {
    this.spotifyService.getToken().subscribe(
      (data) => {
        this.prueba = artist
        this.token.set(data)
        this.setDataSource()
      },
      (error) => {
        console.error('Error:', error);
      }
    )

  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setDataSource(){
    this.dataSource = new MatTableDataSource(this.prueba.artists.items /*this.users().artists.items*/);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  toggleSearching(){
    this.isSearching = true 
    if(this.isSearching){
      this.spotifyService.getArtistByTabName(this.filterValue, this.token()).subscribe(
        (data) => {
          this.isSearching = false
          this.prueba = data
          this.setDataSource()
          this.users.set(data)
          console.log(this.users())
        },
        (error)=>{
          this.isSearching = false
        }
      )
    }
  }
}
