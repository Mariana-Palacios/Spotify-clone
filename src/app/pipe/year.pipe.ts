import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'year',
  standalone: true,
})
export class YearPipe implements PipeTransform {

  transform(dateString: string): string {
    if (!dateString) {
      return '';
    }

    // Extraer el año de la cadena de fecha
    const year = dateString.split('-')[0];

    return year;
  }
}
