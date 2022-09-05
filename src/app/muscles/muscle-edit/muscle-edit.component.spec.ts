import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleEditComponent } from './muscle-edit.component';

describe('MuscleEditComponent', () => {
  let component: MuscleEditComponent;
  let fixture: ComponentFixture<MuscleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuscleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
