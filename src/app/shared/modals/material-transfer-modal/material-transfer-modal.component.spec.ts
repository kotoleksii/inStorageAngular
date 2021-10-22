import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTransferModalComponent } from './material-transfer-modal.component';

describe('MaterialTransferModalComponent', () => {
  let component: MaterialTransferModalComponent;
  let fixture: ComponentFixture<MaterialTransferModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTransferModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTransferModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
