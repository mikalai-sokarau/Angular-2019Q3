import { ICourse } from '../../components/course/course.model';
import { Injectable } from '@angular/core';
import { courses } from '../../../../../assets/mock-data/courses-data.js';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Array<ICourse> = [];

  constructor() {
    this.courses = courses;
  }

  public getCourses(): Array<ICourse> {
    return this.courses;
  }

  public createCourse(course: ICourse): ICourse {
    this.courses.push(course);

    return course;
  }

  public getCourseById(id: string): ICourse {
    return this.courses.find(course => id === course.id);
  }

  public updateCourse(config: ICourse): ICourse {
    const courseToUpdate = this.courses.find(course => config.id === course.id);

    Object.assign(courseToUpdate, config);

    return courseToUpdate;
  }

  public removeCourse(id: string): Array<ICourse> {
    this.courses = this.courses.filter(course => course.id !== id);

    return this.courses;
  }
}
