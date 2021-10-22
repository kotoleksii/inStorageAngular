import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogModalComponent } from './confirm-dialog-modal.component';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogModalComponent;
  let fixture: ComponentFixture<ConfirmDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
