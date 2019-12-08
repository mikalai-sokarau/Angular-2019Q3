import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public loadMore(): void {
    const size = this.coursesService.courses.length
      + CoursesService.DEFAULT_COURSES_SIZE;
    const queryParams: Params = { size };
    
    this.router.navigate([], { queryParams });
  }
}
