import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  isHidden: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(({ find }) => this.isHidden = Boolean(find));
  }

  public loadMore(): void {
    const defaultSize = CoursesService.DEFAULT_COURSES_SIZE;
    const from = this.route.snapshot.queryParams.from || 0;
    const to = Number(this.route.snapshot.queryParams.to || defaultSize) + defaultSize;
    const queryParams: Params = { from, to };
    
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge' });
  }
}
