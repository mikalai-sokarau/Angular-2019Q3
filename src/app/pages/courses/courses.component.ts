import { CoursesService } from './services/courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { ICourse } from './components/course/course.model';
import { ModalService } from '../../shared/services/modal/modal.service';
import {
    DeleteConfirmationModalComponent
} from '../../shared/components/modals/deleteConfirmation/delete-confirmation-modal/delete-confirmation-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    public courses: Array<ICourse> = [];

    constructor(
        private coursesService: CoursesService,
        private modalService: ModalService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.queryParams
            .subscribe(({ from, to, find }) => {
                if (find) {
                    this.coursesService.findCourses(find);
                } else {
                    this.coursesService.loadCourses(from, to)
                }
            });
        
        this.coursesService.coursesUpdates()
            .subscribe(courses => this.courses = courses);
    }

    public onDeleteCourse(id: string): void {
        const modalRef = this.modalService.openModal(DeleteConfirmationModalComponent);

        modalRef.instance.userAction.subscribe(isDelete => {
            if (isDelete) {
                this.coursesService.removeCourse(id);
            }

            this.modalService.closeModal(modalRef);
        });
    }

    public trackByFn(index: number, course: ICourse): string {
        return course.id;
    }
}
