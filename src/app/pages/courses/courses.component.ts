import { CoursesService } from './services/courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { ICourse } from './components/course/course.model';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ModalService } from '../../shared/services/modal/modal.service';
import {
    DeleteConfirmationModalComponent
} from '../../shared/components/modals/deleteConfirmation/delete-confirmation-modal/delete-confirmation-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    providers: [FilterPipe]
})
export class CoursesComponent implements OnInit {
    public courses: Array<ICourse> = [];
    private allCourses: Array<ICourse>;

    constructor(
        private coursesService: CoursesService,
        private filter: FilterPipe,
        private modalService: ModalService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => this.coursesService.loadCourses(Number(params.size)));
        
        this.coursesService.coursesUpdates()
            .subscribe(courses => this.courses = courses);
    }

    public onDeleteCourse(id: string): void {
        const modalRef = this.modalService.openModal(DeleteConfirmationModalComponent);

        modalRef.instance.userAction.subscribe(isDelete => {
            if (isDelete) {
                this.courses = this.coursesService.removeCourse(id);
            }

            this.modalService.closeModal(modalRef);
        });
    }

    public onExecuteSearch(text: string): void {
        this.courses = this.filter.transform(this.allCourses, text);
    }

    public trackByFn(index: number, course: ICourse): string {
        return course.id;
    }
}
