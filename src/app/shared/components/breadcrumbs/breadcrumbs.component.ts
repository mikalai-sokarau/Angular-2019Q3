import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from './breadcrumbs.model';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/pages/courses/services/courses/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  private readonly DEFAULT_BREADCRUMB: IBreadcrumb = { name: 'courses', link: '/courses' };
  public breadcrumbs: Array<IBreadcrumb> = [this.DEFAULT_BREADCRUMB];

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      try {
        const id = params.get('id');
        const course = this.coursesService.getCourseById(id);
        const breadcrumb = { name: course.title, link: '' };
        
        this.breadcrumbs.push(breadcrumb);
      } catch (e) { /* do nothing */ }
    })
  }

}
