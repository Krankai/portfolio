import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  @ViewChild('milu') projectMilu: ElementRef;
  @ViewChild('dinoage') projectDinoAge: ElementRef;
  @ViewChild('prisonbreak') projectPrisonBreak: ElementRef;

  constructor() { }

  scrollToProject(name: string) {
    
    let focusElement: HTMLElement = null;
    switch (name) {
      case 'milu':
        focusElement = this.projectMilu.nativeElement as HTMLElement;
        break;
      case 'dinoage':
        focusElement = this.projectDinoAge.nativeElement as HTMLElement;
        break;
      case 'prisonbreak':
        focusElement = this.projectPrisonBreak.nativeElement as HTMLElement;
        break;
    }

    if (focusElement) focusElement.scrollIntoView();
  }
}
