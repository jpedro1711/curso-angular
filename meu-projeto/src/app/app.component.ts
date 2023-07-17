import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `{{ valor }}<button (click)="adicionar()">Adicionar</button>
    <app-title *ngIf="destruir"></app-title>
    <br />
    <button (click)="destruirComponente()">Destruir componente</button>
    <router-outlet></router-outlet>`,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public valor: number = 1;
  constructor() {}

  public destruir: boolean = true;

  public destruirComponente() {
    this.destruir = false;
  }

  public adicionar(): number {
    return (this.valor += 1);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(
        'OnInit - pode ser usado para buscar dados do server, por exemplo'
      );
    }, 5000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck - verifica se houve alteração');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - Chama caso houve alteração');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log(
      'ngAfterViewChecked - Chama caso houve alteração quando a view é renderizada'
    );
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  /*
  ngOnInit: é executado uma vez quando o componente é inicializado;

  ngOnChanges: executado também uma vez na criação do componente e toda vez que ele sofrer alguma mudança;

  ngDoCheck: executado a cada mudança que o ngOnChange não detecta;

  ngOnDestroy: executado na destruição do componente.

  Além desses existem outros quatros hooks dentro do ngDoCheck:

  ngAfterContentInit: sempre que um conteúdo vindo de uma fonte externa do componente é inserido;

  ngAfterContentChecked: quando o conteúdo externo é verificado;

  ngAfterViewInit: executado logo após os dados dos filhos e do próprio componente ser inicializado;

  ngAfterViewChecked: sempre que é detectado uma alteração do conteúdo é chamado esse cara.
  */
}
