import { Component, OnInit } from '@angular/core';
import { ICourse } from './components/course/course.model';
import { ModalService } from '../../shared/services/modal/modal.service';
import {
    DeleteConfirmationModalComponent
} from '../../shared/components/modals/deleteConfirmation/delete-confirmation-modal/delete-confirmation-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ICoursesState } from './store/courses.reducers';
import { coursesRequest, coursesRequestFind, coursesRequestDelete } from './store/courses.actions';
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
        private modalService: ModalService,
        private route: ActivatedRoute,
        private store: Store<{ courses: ICoursesState }>
    ) {}

    ngOnInit() {
        this.route.queryParams
            .subscribe(({ from, to, find }) => {
                if (find) {
                    this.store.dispatch(coursesRequestFind({ find }));
                } else {
                    this.store.dispatch(coursesRequest({ from, to }));
                }
            });
    }

    public onDeleteCourse(id: string): void {
        const modalRef = this.modalService.openModal(DeleteConfirmationModalComponent);

        modalRef.instance.userAction.subscribe(isDelete => {
            if (isDelete) {
                this.store.dispatch(coursesRequestDelete({ id }));
            }

            this.modalService.closeModal(modalRef);
        });
    }

    public trackByFn(index: number, course: ICourse): string {
        return course.id;
    }
}
