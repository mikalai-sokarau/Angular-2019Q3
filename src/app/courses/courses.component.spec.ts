import { of, Observable } from 'rxjs';
import { CoursesService } from './../shared/services/courses.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ICourse } from './course/course.model';

const mockCourses: ICourse[] = [
  {
    id: '5db5a6997605146e68ffbd7d',
    title: 'labore dolor qui duis aliquip magna dolore',
    duration: 56,
    date: new Date('2020-06-29T12:35:19'),
    description: 'Sit commodo eiusmod velit elit. Ex tempor quis e',
    image: 'https://picsum.photos/220/150',
    author: {
      firstName: 'Hyde',
      lastName: 'Francis'
    }
  },
  {
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
  }
];

class MockCoursesService {
  getCourses(): Observable<ICourse[]> {
    return of(mockCourses);
  }
}

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      imports: [ FontAwesomeModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CoursesService, useClass: MockCoursesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    coursesService = TestBed.get(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain courses after ngOnInit', () => {
    expect(component.courses).toBe(mockCourses);
  });
});
