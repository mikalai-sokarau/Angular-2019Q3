import { ICourse } from '../../../courses/components/course/course.model';
import { Injectable } from '@angular/core';
import { courses } from '../../../../assets/mock-data/courses-data.js';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Array<ICourse> = [];

  constructor() {
    this.courses = courses;
  }

  getCourses(): Array<ICourse> {
    return this.courses;
  }

  createCourse(course: ICourse): ICourse {
    this.courses.push(course);

    return course;
  }

  getCourseById(id: string): ICourse {
    return this.courses.find(course => id === course.id);
  }

  updateCourse(config: ICourse): ICourse {
    const courseToUpdate = this.courses.find(course => config.id === course.id);

    Object.assign(courseToUpdate, config);

    return courseToUpdate;
  }

  removeCourse(id: string): Array<ICourse> {
    this.courses = this.courses.filter(course => course.id !== id);

    return this.courses;
  }
}
