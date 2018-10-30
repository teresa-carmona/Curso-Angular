import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesPipe'
})
export class MinutesPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
