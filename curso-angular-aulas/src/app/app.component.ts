import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <!--<app-diretiva-angular></app-diretiva-angular> -->
    <app-new-component></app-new-component>
    <app-diretivas-atributo>
      <h1>Aula de diretivas de atributo</h1>
      <hr />
    </app-diretivas-atributo>
    <app-input [contador]="addValue"></app-input>
    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h2>{{ getDados.idade }}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <button (click)="add()">Add</button>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  public getDados: { nome: string; idade: number } | undefined;

  ngOnInit(): void {}

  add() {
    this.addValue += 1;
  }

  setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }

  public addValue: number = 10;
}
