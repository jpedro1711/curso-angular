import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Bem vindo';
  constructor() {}

  ngOnInit(): void {
    console.log(this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'NgOnChange - título mudou (recebeu um dado de fora pelo @input())'
    );
  }

  ngOnDestroy(): void {
    console.log('Elemento destruído');
  }
}
