import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { ICourse } from './course/course.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  courses: Array<ICourse> = [];
  private readonly coursesPath = '../../assets/mock-data/courses-data.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Array<ICourse>>(this.coursesPath)
    .subscribe((courses: Array<ICourse>) => {
      courses.length = 5;
      this.courses = courses;
    });
  }

  onDeleteCourse(id: string) {
    console.log(`Delete: ${id}`);
  }

  // tslint:disable no-conflicting-lifecycle
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  // tslint:enable no-conflicting-lifecycle
}
