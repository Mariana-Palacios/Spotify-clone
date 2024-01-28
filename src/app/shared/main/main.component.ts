import { CommonModule  } from '@angular/common';
import { ChangeDetectionStrategy, Component, AfterViewInit, ViewChild, Input, OnInit, inject, Signal, WritableSignal } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SpotifyApiService } from '@services/spotifyApi.service';



export interface ArtistData {
  name: string,
  id: string
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-main',
  styleUrls: ['main.component.css'],
  templateUrl: 'main.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class MainComponent implements AfterViewInit {
    displayedColumns: string[] = ['id', 'name'];
    dataSource: MatTableDataSource<ArtistData>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    public spotifyService = inject(SpotifyApiService)
    public users:any
    constructor() {
      //Array.from({length: 100}, (_, k) => createNewUser(k + 1));
      this.spotifyService.getActristList().subscribe(
        (data) => {
          this.users = data
          console.log(this.users)
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (error) => {
          console.error('Error:', error);
        }
      )
      //console.log(this.users)
      //this.dataSource = new MatTableDataSource(this.users);
    }
  
    ngAfterViewInit() {
      

    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  
  /*
  function createNewUser(id: number): ArtistData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      id: id.toString(),
      name: name,
    };
  }
  */
/*
export class MainComponent implements AfterViewInit {

  public spotifyService = inject(SpotifyApiService)

  displayedColumns: string[] = ['position', 'name', 'weight'];

  public artistList = [{'name':'hola','id':'id'}]

  public dataSource: any

  @ViewChild(MatPaginator) paginator : MatPaginator;
  
  counter:Signal<any[]> = toSignal(this.spotifyService.getActristList(), {initialValue: [{'name':'hola','id':'id'}]});

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Signal<any[]>>(this.counter());
    this.dataSource.paginator = this.paginator;
  } 
}
*/