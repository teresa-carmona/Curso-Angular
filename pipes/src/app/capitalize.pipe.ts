import { Pipe, PipeTransform } from '@angular/core';
import { CapitalizeService } from './capitalize.service';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  constructor(private capitalizeServ : CapitalizeService) {}


  transform(value: string): string {
    return this.capitalizeServ.transformInService(value);
}

}
