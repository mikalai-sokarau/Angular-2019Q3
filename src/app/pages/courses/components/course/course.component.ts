import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ICourse } from './course.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DurationPipe } from '../../pipes/duration/duration-pipe.pipe';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [
    DurationPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, OnDestroy {
  @Input() course: ICourse;
  @Output() deleteCourse = new EventEmitter<string>();
  public locale: string;
  public duration: string;
  private subscription: Subscription;

  constructor(
    private translate: TranslateService,
    private durationPipe: DurationPipe
  ) {}

  ngOnInit(): void {
    this.duration = this.durationPipe.transform(Number(this.course.duration));
    this.locale = this.translate.currentLang;
    this.subscription = this.translate.onLangChange
        .subscribe((langChangeEvent: LangChangeEvent) => {
            this.locale = langChangeEvent.lang;
            this.duration = this.durationPipe.transform(Number(this.course.duration));
        });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onDeleteClick(): void {
    this.deleteCourse.emit(this.course.id);
  }
}
