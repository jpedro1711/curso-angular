import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-diretiva-angular></app-diretiva-angular>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
