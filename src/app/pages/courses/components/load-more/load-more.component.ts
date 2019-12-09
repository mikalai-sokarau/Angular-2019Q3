import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public loadMore(): void {
    const from = Number(this.activatedRoute.snapshot.queryParams.to) || 0;
    const to = from + CoursesService.DEFAULT_COURSES_SIZE;
    
    const queryParams: Params = { to };
    
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge' });
  }
}
