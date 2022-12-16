import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
