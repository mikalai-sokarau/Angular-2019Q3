import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../course/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-manipulation',
  templateUrl: './course-manipulation.component.html',
  styleUrls: ['./course-manipulation.component.scss']
})
export class CourseManipulationComponent implements OnInit {
  @Input() course: ICourse;
  @Output() saveCourse: EventEmitter<ICourse> = new EventEmitter();

  public author: string;
  public date: string;
  public description: string;
  public duration: string;
  public title: string;
  private id: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.course) {
      this.author = `${this.course.author.firstName} ${this.course.author.lastName}`;
      this.date = this.course.date;
      this.description = this.course.description;
      this.duration = this.course.duration;
      this.id = this.course.id;
      this.title = this.course.title;
    }
  }

  public onDurationChange(duration: string): void {
    this.duration = duration;
  }

  public onSave(): void {
    try {
      const authorData = this.author.split(' ');
      const course = {
        author: {
          firstName: authorData[0] || '',
          lastName: authorData[1] || ''
        },
        date: this.date,
        description: this.description,
        duration: this.duration,
        id: this.id,
        title: this.title
      } as ICourse;
  
      this.saveCourse.emit(course);
      this.router.navigate(['/courses']);
    } catch (e) {
      console.log('Create course failed, make sure that all required fields are filled.');
    }
  }

  public onDescriptionChange(newDescription: string): void {
    this.description = newDescription;
  }
}
