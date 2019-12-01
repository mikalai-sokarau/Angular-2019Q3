import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManipulationComponent } from './course-manipulation.component';

describe('CourseManipulationComponent', () => {
  let component: CourseManipulationComponent;
  let fixture: ComponentFixture<CourseManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
