import { ICourse } from './course.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { CourseComponent } from './course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  const mockCourse: ICourse = {
    id: '5db5a69973813c0a0f99def4',
    title: 'officia minim Lorem est aliquip qui officia',
    duration: 44,
    date: new Date('2020-05-18T07:27:55'),
    description: 'Elit consectetur irure deserunt veniam sunt labore',
    image: 'https://picsum.photos/220/150',
    author: {
      firstName: 'Walton',
      lastName: 'Decker'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises delete event when the trash button clicked', () => {
    const trashButton = fixture.debugElement.query(By.css('.trash-alt'));

    component.deleteCourse.subscribe((id: string) => expect(id).toBe(mockCourse.id));
    trashButton.triggerEventHandler('click', null);
    fixture.detectChanges();
  });
});
