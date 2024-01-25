import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { 
  public isSearchFieldVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private sb: SearchbarService) {}

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe((status) => {
      this.isSearchFieldVisible = status;
    });
  }

  onNavigateToLogin() {
    this.router.navigate(['/', 'login']);
  }

  filterBrowsingList(inputElement: HTMLInputElement) {
    // console.log(inputElement);
    this.inputFilterRes.emit(inputElement.value);
  }
}

