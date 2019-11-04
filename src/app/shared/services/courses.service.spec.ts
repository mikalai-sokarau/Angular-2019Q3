import { ICourse } from './../../courses/course/course.model';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoursesService } from './courses.service';
import { defer } from 'rxjs/internal/observable/defer';

describe('CoursesService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: CoursesService;

  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CoursesService(httpClientSpy as any);
  });

  it('should be created', () => {
    service = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });

  it('should return expected array with courses', () => {
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

    httpClientSpy.get.and.returnValue(asyncData(mockCourses));

    service.getCourses().subscribe(
      courses => expect(courses).toEqual(mockCourses, 'expected courses'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
