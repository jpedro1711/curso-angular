import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-angular',
  templateUrl: './diretiva-angular.component.html',
  styleUrls: ['./diretiva-angular.component.scss'],
})
export class DiretivaAngularComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string | null }> = [
    { nome: 'Item 1' },
    { nome: 'Item 2' },
    { nome: 'Item 3' },
  ];
  public nome: string = 'joao';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  onClickAddList() {
    let nome: string | null = prompt('Nome do item: ');
    while (nome == '') {
      alert('Item não pode ser vazio');
      nome = prompt('Nome do item: ');
    }
    const item = {
      nome: nome,
    };
    this.list.push(item);
  }

  onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
