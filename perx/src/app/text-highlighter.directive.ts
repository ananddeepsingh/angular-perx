import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextHighlighter]'
})
export class TextHighlighterDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.textShadow = '5px 2px #000';
  }

}
