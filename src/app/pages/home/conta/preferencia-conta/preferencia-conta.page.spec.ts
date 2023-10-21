import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferenciaContaPage } from './preferencia-conta.page';

describe('PreferenciaContaPage', () => {
  let component: PreferenciaContaPage;
  let fixture: ComponentFixture<PreferenciaContaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreferenciaContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
