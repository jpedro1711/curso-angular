import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <!--<app-diretiva-angular></app-diretiva-angular> -->
    <app-diretivas-atributo>
      <h1>Aula de diretivas de atributo</h1>
      <hr />
    </app-diretivas-atributo>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
