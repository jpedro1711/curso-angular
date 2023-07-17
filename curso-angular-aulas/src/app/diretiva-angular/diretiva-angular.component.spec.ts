import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaAngularComponent } from './diretiva-angular.component';

describe('DiretivaAngularComponent', () => {
  let component: DiretivaAngularComponent;
  let fixture: ComponentFixture<DiretivaAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaAngularComponent]
    });
    fixture = TestBed.createComponent(DiretivaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
