import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {


    transform(value: number): string {
        var minutes = Math.floor(value / 60);
        var seconds = value - minutes * 60;

        return `${minutes}'${seconds}`;
    }
}