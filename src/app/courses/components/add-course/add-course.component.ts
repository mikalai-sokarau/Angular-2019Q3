import { DurationPipe } from './../../pipes/duration/duration-pipe.pipe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  providers: [DurationPipe]
})
export class AddCourseComponent {
  public courseDuration: number;
  public formattedCourseDuration: string;
  public readonly COURSE_MAX_DURATION_IN_MINUTES = 1440;

  constructor(private duration: DurationPipe) {}

  public onDurationChange(): void {
    if (this.courseDuration > this.COURSE_MAX_DURATION_IN_MINUTES) {
      this.courseDuration = this.COURSE_MAX_DURATION_IN_MINUTES;
    } else if (this.courseDuration <= 0) {
      this.courseDuration = null;
    }

    this.formattedCourseDuration = this.duration.transform(this.courseDuration);
  }

  public onCancel(): void {
    console.log('cancel click');
  }

  public onSave(): void {
    console.log('save click');
  }
}
