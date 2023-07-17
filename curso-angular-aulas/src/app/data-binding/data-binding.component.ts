import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public nome: string = 'joao';
  public idade: number = 18;
  public checkDisabled: boolean = true;
  public imgSrc: string =
    'https://www.adobe.com/br/express/feature/image/media_142f9cf5285c2cdcda8375c1041d273a3f0383e5f.png?width=750&format=png&optimize=medium';
  public imgTitle: string = 'cachorro';
  constructor() {}

  ngOnInit(): void {}

  public position: { x: number; y: number } = { x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
