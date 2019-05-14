import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "summary"
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (value.length > 3) {
      return value.substr(0, 3);
    }
  }
}
