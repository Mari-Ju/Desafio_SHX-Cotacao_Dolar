import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemAlertaComponent } from './mensagem-alerta.component';

describe('MensagemAlertaComponent', () => {
  let component: MensagemAlertaComponent;
  let fixture: ComponentFixture<MensagemAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemAlertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
