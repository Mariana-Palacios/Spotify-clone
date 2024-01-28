import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SpotifyApiService } from '@services/spotifyApi.service';
import { artist, spotifyToken } from './__mock__/search-artist';
import { Artist, SpotifyApiToken } from '@interfaces/spotifyApi';

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

  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<Artist>;

  public isSearching:boolean = false
  token = signal(spotifyToken)
  public filterValue:string

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public spotifyService = inject(SpotifyApiService)
  public users:any = [artist]

  constructor() {
    this.spotifyService.getToken().subscribe(
      (data) => {
        this.token.set(data)
      },
      (error) => {
        console.error('Error:', error);
      }
    )
    this.dataSource = new MatTableDataSource([artist]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toggleSearching(){
    this.isSearching = true 
    if(this.isSearching){
      this.spotifyService.getArtistByTabName(this.filterValue, this.token()).subscribe(
        (data) => {
          this.isSearching = false
          console.log(data)
        },
        (error)=>{
          console.log(error)
          this.isSearching = false
        }
      )
    }
  }
}
