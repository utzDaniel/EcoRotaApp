import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetarSenhaPage } from './resetar-senha.page';

describe('ResetarSenhaPage', () => {
  let component: ResetarSenhaPage;
  let fixture: ComponentFixture<ResetarSenhaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResetarSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
