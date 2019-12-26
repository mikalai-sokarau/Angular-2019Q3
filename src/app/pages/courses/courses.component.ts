import { CoursesService } from './services/courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { ICourse } from './components/course/course.model';
import { ModalService } from '../../shared/services/modal/modal.service';
import {
    DeleteConfirmationModalComponent
} from '../../shared/components/modals/deleteConfirmation/delete-confirmation-modal/delete-confirmation-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ICoursesState } from './store/courses.reducers';
import { coursesRequest } from './store/courses.actions';
import { Observable } from 'rxjs';
import { coursesFeatureKey } from './store';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    public courses$: Observable<ICoursesState> = this.store.pipe(select(coursesFeatureKey));

    constructor(
        private coursesService: CoursesService,
        private modalService: ModalService,
        private route: ActivatedRoute,
        private store: Store<{ courses: ICoursesState }>
    ) {}

    ngOnInit() {
        this.route.queryParams
            .subscribe(({ from, to, find }) => {
                if (find) {
                    this.coursesService.findCourses(find);
                } else {
                    this.store.dispatch(coursesRequest({ from, to }));
                }
            });
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
