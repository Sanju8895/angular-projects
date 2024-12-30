import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appNgStyle]'
})
export class NgStyleDirective implements OnChanges{
  @Input('appNgStyle') styleObject!: {[key:string]:string};
  constructor(private el: ElementRef, private renderer:Renderer2) { }

  ngOnChanges() {
     if(this.styleObject){
        Object.keys(this.styleObject).forEach((styleName)=>{
           this.renderer.setStyle(this.el.nativeElement, styleName, this.styleObject[styleName]);
        })
     }
  }
}
