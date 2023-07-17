import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.scss'],
})
export class DiretivasAtributoComponent implements OnInit {
  public valor: boolean = true;
  public altura: string = '20px';
  public backgroundColor: string = 'red';
  public nome: string = '';
  public list: Array<{ nome: string }> = [];
  public date: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
      if (this.altura == '20px') {
        this.altura = '50px';
        this.backgroundColor = 'blue';
      } else {
        this.altura = '20px';
        this.backgroundColor = 'red';
      }
    }, 2000);
  }
  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}
