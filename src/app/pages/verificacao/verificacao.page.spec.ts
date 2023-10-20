import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificacaoPage } from './verificacao.page';

describe('VerificacaoPage', () => {
  let component: VerificacaoPage;
  let fixture: ComponentFixture<VerificacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
