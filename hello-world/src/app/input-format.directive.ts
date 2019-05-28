import { Directive, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appInputFormat]"
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}
  @Input("format") format: string;

  @HostListener("blur") onblur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == "uppercase")
      this.el.nativeElement.value = value.toUpperCase();
    else this.el.nativeElement.value = value.toLowerCase();
  }
}
