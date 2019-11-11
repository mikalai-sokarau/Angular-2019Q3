import { CoursesService } from './../shared/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ICourse } from './components/course/course.model';
import { FilterPipe } from './pipes/filter/filter.pipe';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    providers: [FilterPipe]
})
export class CoursesComponent implements OnInit {
    public courses: Array<ICourse> = [];
    public readonly coursesLimit = 5;
    private allCourses: Array<ICourse>;

    constructor(
        private coursesService: CoursesService,
        private filter: FilterPipe
    ) {}

    ngOnInit() {
        this.coursesService.getCourses()
            .subscribe((courses: Array<ICourse>) =>
                this.allCourses = this.courses = courses
            );
    }

    onDeleteCourse(id: string) {
        console.log(`Delete: ${id}`);
    }

    onExecuteSearch(text: string) {
        this.courses = this.filter.transform(this.allCourses, text);
    }
}
