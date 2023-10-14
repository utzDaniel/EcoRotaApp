import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmartionPage } from './confirmartion.page';

describe('ConfirmartionPage', () => {
  let component: ConfirmartionPage;
  let fixture: ComponentFixture<ConfirmartionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmartionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
