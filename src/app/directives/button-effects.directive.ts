import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[ButtonEffects]'
})
export class ButtonEffectsDirective implements OnInit {

  @Input() defaultButton: string = 'rgb(113, 8, 30)';
  @Input() hoverButton: string = 'rgb(215, 72, 92)'

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.changeButtonColor(this.defaultButton);
  }

  @HostListener("mouseenter")
  onHover() {
    this.changeButtonColor(this.hoverButton);
  }

  @HostListener("mouseleave")
  onLeave() {
    this.changeButtonColor(this.defaultButton);
  }

  changeButtonColor(color: string) {
    this.element.nativeElement.style.background = color;
  }
}
