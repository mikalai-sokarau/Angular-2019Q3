import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { courses } from '../db/courses';
import { ICourse } from './courses.interface';

@Injectable()
export class CoursesService {
  private readonly courses: Array<ICourse>

  constructor() {
    /* request to db */
    this.courses = courses;
  }

  getCourses(size: number): Array<ICourse> {
    return this.courses.slice(0, size);
  }

}
