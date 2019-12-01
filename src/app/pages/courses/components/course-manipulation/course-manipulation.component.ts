import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../course/course.model';

@Component({
  selector: 'app-course-manipulation',
  templateUrl: './course-manipulation.component.html',
  styleUrls: ['./course-manipulation.component.scss']
})
export class CourseManipulationComponent implements OnInit {
  @Input() course: ICourse;
  @Output() saveCourse: EventEmitter<ICourse> = new EventEmitter();

  public author: string;
  public date: Date;
  public description: string;
  public duration: number;
  public title: string;

  constructor() { }

  ngOnInit() {
    console.log(this.course);

    if (this.course) {
      this.author = `${this.course.author.firstName} ${this.course.author.lastName}`;
      this.date = this.course.date;
      this.description = this.course.description;
      this.duration = this.course.duration;
      this.title = this.course.title;
    }
  }

  public onDurationChange(duration: number): void {
    this.duration = duration;
  }

  public onCancel(): void {
    console.log('cancel click');
  }

  public onSave(): void {
    const authorData = this.author.split(' ');
    const course = {
      author: {
        firstName: authorData[0] || '',
        lastName: authorData[1] || ''
      },
      date: this.date,
      description: this.description,
      duration: this.duration,
      title: this.title
    } as ICourse;

    console.log(course);
    
    this.saveCourse.emit(course);
  }

  public onDescriptionChange(newDescription: string): void {
    this.description = newDescription;
  }
}
