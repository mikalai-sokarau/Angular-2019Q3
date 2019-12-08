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
        const size = this.route.snapshot.queryParams.size;
        
        this.coursesService.getCourses(size)
            .subscribe(courses => {
                this.allCourses = courses;
                this.courses = this.allCourses;
            });
    }

    public onDeleteCourse(id: string) {
        const modalRef = this.modalService.openModal(DeleteConfirmationModalComponent);

        modalRef.instance.userAction.subscribe(isDelete => {
            if (isDelete) {
                this.courses = this.coursesService.removeCourse(id);
            }

            this.modalService.closeModal(modalRef);
        });
    }

    public onExecuteSearch(text: string) {
        this.courses = this.filter.transform(this.allCourses, text);
    }
}
