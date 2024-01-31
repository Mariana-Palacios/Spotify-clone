import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeMs',
  standalone: true,
})
export class TimeMsPipe implements PipeTransform {

  transform(milisegundos: number): string {
    if (milisegundos == null || isNaN(milisegundos)) {
      return '-';
    }

    const segundos = Math.floor(milisegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    const minutosStr = minutos > 0 ? `${minutos}min` : '';
    const segundosStr = `${segundosRestantes}sec`;

    return `${minutosStr} ${segundosStr}`;
  }
}