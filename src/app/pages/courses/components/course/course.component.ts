import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from './course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: ICourse;
  @Output() deleteCourse = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onDeleteClick(): void {
    this.deleteCourse.emit(this.course.id);
  }
}
