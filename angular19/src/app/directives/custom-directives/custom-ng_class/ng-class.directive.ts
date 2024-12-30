import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNgClass]'
})
export class NgClassDirective implements OnChanges{
 @Input('appNgClass') classObject!: {[key:string]:boolean};
  constructor(private el:ElementRef, private renderder: Renderer2) { }

  ngOnChanges(){
    if(this.classObject){
      Object.keys(this.classObject).forEach((className)=>{
        if(this.classObject[className]){
          this.renderder.addClass(this.el.nativeElement, className);
        }else{
          this.renderder.removeClass(this.el.nativeElement, className)
        }
      })
    }
  }

}
