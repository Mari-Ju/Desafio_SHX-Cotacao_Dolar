import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaCotacaoComponent } from './moeda-cotacao.component';

describe('MoedaCotacaoComponent', () => {
  let component: MoedaCotacaoComponent;
  let fixture: ComponentFixture<MoedaCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedaCotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoedaCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
