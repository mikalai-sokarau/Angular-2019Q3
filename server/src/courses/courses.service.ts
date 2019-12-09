import { Injectable } from '@nestjs/common';
import { courses } from '../db/courses';
import { ICourse } from './courses.interface';

@Injectable()
export class CoursesService {
  private readonly courses: Array<ICourse>

  constructor() {
    /* request to db */
    this.courses = courses;
  }

  getCourses(from: number, to: number): Array<ICourse> {
    return this.courses.slice(from, to);
  }

  findCourses(text: string): Array<ICourse> {
    return this.courses.filter(
      ({ title, description }) => this.findText(title, description, text)
    );
  }

  private findText(title: string, description: string, text: string): boolean {
    const normalizedTitle = title.toLowerCase();
    const normalizedDescription = description.toLowerCase();
    const normalizedText = text.toLowerCase();

    return normalizedTitle.includes(normalizedText)
      || normalizedDescription.includes(normalizedText);
  }
}
