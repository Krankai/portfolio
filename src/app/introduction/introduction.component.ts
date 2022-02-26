import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  @Output('focusProject') projectEvent = new EventEmitter<string>();

  constructor() { }

  focusProject(name: string) {
    this.projectEvent.emit(name);
    //console.log(name);
  }
}
