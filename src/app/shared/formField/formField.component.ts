import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Description } from '@interfaces/card-description'

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder, FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SaveLocalStorageService } from '@services/saveLocalStorage.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './formField.component.html',
  styleUrl: './formField.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormFieldComponent {

  private fb = inject(FormBuilder)
  public saveLocalStorage = inject(SaveLocalStorageService)

  isActive = signal(false)  

  newSongOrAlbumGroup: FormGroup = this.fb.group({
    logo: ['', [ Validators.required, Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/) ] ], // ya
    type: ['', [ Validators.required ] ], // ya 
    title: ['', [ Validators.required ] ], // ya 
    img: ['', [ Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/) ]], // ya
    nameArtist: ['', [ Validators.required ] ], // ya 
    year: ['', [ Validators.required ] ], // ya 
    countSongs: ['', [ Validators.required ] ],
    nameAlbum: [''], // ya 
  });

  createCommonObject = (description: any) => {
    return {
      logo: {
        url: description.logo ? description.logo : 'assets/spotify_logo.png'
      },
      type: description.type,
      title: description.title,
      img: {
        url: ''
      },
      nameArtist: description.nameArtist,
      year: description.year,
      countSongs: description.countSongs
    };
  };

  onSubmit():void{
    console.log('Hello submit')
    console.log(this.newSongOrAlbumGroup.value)
    const description = this.newSongOrAlbumGroup.value
    switch (description.type) {
      case 'Album':
        const album: Description = {
          ...this.createCommonObject(description),
        };
        this.isActive.set(!this.isActive());
        this.saveLocalStorage.organizeFavorite(album)
        break;
    
      case 'Song':
        const song: Description = {
          ...this.createCommonObject(description),
          nameAlbum: description.nameAlbum,
        };
        this.isActive.set(!this.isActive());
        this.saveLocalStorage.organizeFavorite(song)
        break;
    
      default:
        console.log('Default');
        this.isActive.set(!this.isActive());
    }
  }

}
