import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../course/course.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { durationValidator } from '../../directives/duration-validator/duration-validator.directive';
import { InputDurationComponent } from '../input-duration/input-duration.component';

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

  get duration() {
    return this.courseForm.get('duration');
  }

  get description() {
    return this.courseForm.get('description');
  }

  get title() {
    return this.courseForm.get('title');
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.courseForm = this.createForm(this.course);
  }

  public onSave(): void {
    console.log(this.courseForm.value);
    
    try {
      const authorData = this.course.author;
      const course = {
        author: {
          firstName: authorData[0] || '',
          lastName: authorData[1] || ''
        },
        date: this.course.date,
        description: this.course.description,
        duration: this.course.duration,
        id: this.course.id,
        title: this.course.title
      } as ICourse;
  
      this.saveCourse.emit(course);
      // this.router.navigate(['/courses']);
    } catch (e) {
      console.log('Create course failed, make sure that all required fields are filled.');
    }
  }

  private createForm(course: ICourse): FormGroup {
    const author = new FormControl(
      course.author,
      [ Validators.required ]
    );
    const date = new FormControl(
      course.date,
      [ Validators.required ]
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
      author,
      date,
      description,
      duration,
      title,
    });
  }
}
