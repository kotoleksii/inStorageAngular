import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialActionModalComponent } from './material-action-modal.component';

describe('MaterialAddModalComponent', () => {
  let component: MaterialActionModalComponent;
  let fixture: ComponentFixture<MaterialActionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialActionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialActionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
