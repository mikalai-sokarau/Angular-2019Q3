import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from './breadcrumbs.model';
import { ActivatedRoute } from '@angular/router';
import { ICoursesState } from 'src/app/pages/courses/store/courses.reducers';
import { Store, select } from '@ngrx/store';
import { coursesFeatureKey } from 'src/app/pages/courses/store';

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
    private store: Store<{ courses: ICoursesState }>
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        
        this.store
          .pipe(select(coursesFeatureKey))
          .subscribe(({ items }) => {
            try {
              const course = items.find(c => id === c.id);
              const breadcrumb = { name: course.title, link: '' };
              
              if (this.breadcrumbs.length <= 1) {
                this.breadcrumbs.push(breadcrumb);
              }
            } catch (e) { /* do nothing */ }
          });
        
    })
  }

}
