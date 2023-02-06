import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idToName'
})
export class IdToNamePipe implements PipeTransform {

  transform(view_id: string): string {
    let base = (view_id.split(":")[1]).split("_");

    base.forEach((word, index) => {
      let formattedWord = word.charAt(0).toUpperCase() + word.substring(1, word.length);
      base[index] = formattedWord
    });

    return base.join(" ");
  }

}
