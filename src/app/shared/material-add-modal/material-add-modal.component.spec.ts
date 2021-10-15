import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAddModalComponent } from './material-add-modal.component';

describe('MaterialAddModalComponent', () => {
  let component: MaterialAddModalComponent;
  let fixture: ComponentFixture<MaterialAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
