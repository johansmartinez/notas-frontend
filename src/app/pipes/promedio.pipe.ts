import { Pipe, PipeTransform } from '@angular/core';
import { CreateNotaDTO, Nota } from '../models/nota';

@Pipe({
  name: 'promedio',
  pure: false
})
export class PromedioPipe implements PipeTransform {

  transform(nota: Nota|CreateNotaDTO): unknown {
    return Number(((nota.parcial1+nota.parcial2+nota.parcial3)/3)).toFixed(1);
  }

}
