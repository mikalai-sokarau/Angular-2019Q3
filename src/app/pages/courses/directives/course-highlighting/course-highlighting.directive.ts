import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ICourse } from '../../components/course/course.model';
import { CourseStatus } from './course-highlighting.model';

@Directive({
  selector: '[appCourseHighlighting]'
})
export class CourseHighlightingDirective implements OnInit {
  @Input() course: ICourse;

  private readonly today: Date;
  private readonly courseFreshnessPeriod = 14; // in days
  private readonly containerToHighlight = '.course-container';
  private readonly classToAdd = 'course-status-';

  constructor(private element: ElementRef) {
    this.today = new Date();
  }

  ngOnInit(): void {
    const status = this.getCourseStatus(this.course);
    const article = this.element.nativeElement.querySelector(this.containerToHighlight);

    article.classList.add(`${this.classToAdd}${status}`);
  }

  private getCourseStatus({ date }: ICourse): CourseStatus {
    const creationDate = new Date(date);
    const freshnessDate = new Date().setDate(this.today.getDate() - this.courseFreshnessPeriod);
    const isCreationDateLessThanToday = creationDate < this.today;
    const isCourseFresh = Number(creationDate) >= freshnessDate;

    if (isCreationDateLessThanToday && isCourseFresh) {
      return CourseStatus.fresh;
    } else if (creationDate > this.today) {
      return CourseStatus.upcoming;
    }

    return CourseStatus.regular;
  }
}
