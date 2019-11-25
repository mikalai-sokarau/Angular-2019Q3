import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  public courseTitle: string;

  constructor() {}

  public onDurationChange(duration: number): void {
    console.log('duration: ' + duration);
  }

  public onCancel(): void {
    console.log('cancel click');
  }

  public onSave(): void {
    console.log('save click');
  }
}
