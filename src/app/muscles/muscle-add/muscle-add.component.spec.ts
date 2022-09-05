import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleAddComponent } from './muscle-add.component';

describe('MuscleAddComponent', () => {
  let component: MuscleAddComponent;
  let fixture: ComponentFixture<MuscleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuscleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
