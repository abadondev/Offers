import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetNavbar]'
})
export class SetNavbarDirective implements OnInit {

  userRole = 'admin';

  constructor(private elementRef: ElementRef) { }

ngOnInit() {
  this.setNavbar ();
}

  setNavbar () {
    if (this.userRole == 'admin') {
      this.elementRef.nativeElement.style.display = 'block';
    } else {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }
}
