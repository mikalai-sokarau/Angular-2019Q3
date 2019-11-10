import { CoursesService } from './../shared/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ICourse } from './components/course/course.model';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    public courses: Array<ICourse> = [];
    public readonly coursesLimit = 5;

    constructor(
        private coursesService: CoursesService
    ) {}

    ngOnInit() {
        this.coursesService.getCourses()
            .subscribe((courses: Array<ICourse>) => this.courses = courses);
    }

    onDeleteCourse(id: string) {
        console.log(`Delete: ${id}`);
    }
}
