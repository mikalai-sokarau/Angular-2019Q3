import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from './course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: ICourse;
  @Output() deleteCourse = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.deleteCourse.emit(this.course.id);
  }
}
