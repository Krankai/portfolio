import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  @Input('align') alignment: string;
  @ViewChild('blockquoteRef') blockquoteRef: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const blockquoteEl : HTMLElement = this.blockquoteRef.nativeElement;
    if (this.alignment === 'left' || this.alignment === 'start')
    {
      blockquoteEl.classList.add('text-start');
    }
    else if (this.alignment === 'right' || this.alignment === 'end')
    {
      blockquoteEl.classList.add('text-end');
    }
    else if (this.alignment === 'middle' || this.alignment === 'center')
    {
      blockquoteEl.classList.add('text-center')
    }
  }

}
