import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../course/course.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { durationValidator } from '../../directives/duration-validator/duration-validator.directive';
import { InputDurationComponent } from '../input-duration/input-duration.component';
import { dateValidator } from '../../directives/date-validator/date-validator.directive';
import { InputDateComponent } from '../input-date/input-date.component';
import { Store, select } from '@ngrx/store';
import { ICoursesState } from '../../store/courses.reducers';
import { Observable } from 'rxjs';
import { coursesFeatureKey } from '../../store';
import { authorsRequest } from '../../store/courses.actions';
import { authorsValidator } from '../../directives/authors-validator/authors-validator.directive';

@Component({
  selector: 'app-course-manipulation',
  templateUrl: './course-manipulation.component.html',
  styleUrls: ['./course-manipulation.component.scss']
})
export class CourseManipulationComponent implements OnInit {
  @Input() course: ICourse;
  @Output() saveCourse: EventEmitter<ICourse> = new EventEmitter();

  public courseForm: FormGroup;
  public readonly minDuration = InputDurationComponent.MIN_DURATION_IN_MINUTES;
  public readonly maxDuration = InputDurationComponent.MAX_DURATION_IN_MINUTES;
  public readonly maxDescriptionLength = 500;
  public readonly maxTitleLength = 50;
  public authors$: Observable<ICoursesState> = this.store.pipe(select(coursesFeatureKey));

  get duration() {
    return this.courseForm.get('duration');
  }

  get description() {
    return this.courseForm.get('description');
  }

  get title() {
    return this.courseForm.get('title');
  }

  get date() {
    return this.courseForm.get('date');
  }

  get authors() {
    return this.courseForm.get('authors');
  }

  constructor(
    private router: Router,
    private store: Store<{ courses: ICoursesState }>
  ) {}

  ngOnInit() {
    this.store.dispatch(authorsRequest());
    this.courseForm = this.createForm(this.course);
  }

  public onSave(): void {
    const date = InputDateComponent.formatDate(this.courseForm.value.date, true)
    this.saveCourse.emit({ ...this.course, ...this.courseForm.value, date });
    this.router.navigate(['/courses']);
  }

  private createForm(course: ICourse): FormGroup {
    const authors = new FormControl(
      course.authors,
      [
        Validators.required,
        authorsValidator()
      ]
    );
    const date = new FormControl(
      InputDateComponent.formatDate(course.date),
      [
        Validators.required,
        dateValidator()
      ]
    );
    const description = new FormControl(
      course.description,
      [
        Validators.required,
        Validators.maxLength(this.maxDescriptionLength)
      ]
    );
    const duration = new FormControl(
      course.duration,
      [
        Validators.required,
        durationValidator()
      ]
    );
    const title = new FormControl(
      course.title,
      [
        Validators.required,
        Validators.maxLength(this.maxTitleLength)
      ]
    );

    return new FormGroup({
      authors,
      date,
      description,
      duration,
      title,
    });
  }
}
