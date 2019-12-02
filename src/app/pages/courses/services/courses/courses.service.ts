import { ICourse } from '../../components/course/course.model';
import { Injectable } from '@angular/core';
import { courses } from '../../../../../assets/mock-data/courses-data.js';
import { getRandomCourseImage } from '../../../../../assets/mock-data/courses-data';

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
    course.id = String(Date.now());
    course.isTopRated = false;
    course.image = getRandomCourseImage();

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
