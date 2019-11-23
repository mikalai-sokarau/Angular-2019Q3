import { CoursesService } from './services/courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { ICourse } from './components/course/course.model';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ModalService } from '../shared/services/modal/modal.service';
import {
    DeleteConfirmationModalComponent
} from './../shared/components/modals/deleteConfirmation/delete-confirmation-modal/delete-confirmation-modal.component';

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
        private filter: FilterPipe,
        private modalService: ModalService
    ) {}

    ngOnInit() {
        this.allCourses = this.coursesService.getCourses();
        this.courses = this.allCourses;
    }

    onDeleteCourse(id: string) {
        const modalRef = this.modalService.openModal(DeleteConfirmationModalComponent);

        modalRef.instance.userAction.subscribe(isDelete => {
            if (isDelete) {
                this.courses = this.coursesService.removeCourse(id);
            }

            this.modalService.closeModal(modalRef);
        });
    }

    onExecuteSearch(text: string) {
        this.courses = this.filter.transform(this.allCourses, text);
    }
}
