import { Injectable } from '@nestjs/common';
import { courses, getRandomCourseImage } from '../db/courses';
import { ICourse, IAuthor } from './courses.interface';

@Injectable()
export class CoursesService {
  private courses: Array<ICourse>

  constructor() {
    /* request to db */
    this.courses = courses;
  }

  getCourses(from: number, to: number): Array<ICourse> {
    return this.courses.slice(from, to);
  }

  getAuthors(): Array<IAuthor> {
    return this.courses.reduce((acc, course) => {
      return acc.push(...course.authors), acc;
    }, []);
  }

  findCourses(text: string): Array<ICourse> {
    return this.courses.filter(
      ({ title, description }) => this.findText(title, description, text)
    );
  }

  deleteCourse(courseId: string): boolean {
    this.courses = this.courses.filter(
      ({ id }) => id !== courseId
    );

    return !this.courses.some(({ id }) => id === courseId);
  }

  createCourse(course: string): boolean {
    const newCourse = JSON.parse(course) as ICourse;

    newCourse.id = String(Date.now());
    newCourse.isTopRated = false;
    newCourse.image = getRandomCourseImage();

    this.courses.push(newCourse);

    return this.courses.some(({ id }) => id === newCourse.id);
  }

  updateCourse(course: ICourse): ICourse {
    const index = this.courses.findIndex(c => c.id === course.id);
    const updatedCourse = { ...this.courses[index], ...course };

    this.courses[index] = updatedCourse;

    return updatedCourse;
  }

  private findText(title: string, description: string, text: string): boolean {
    const normalizedTitle = title.toLowerCase();
    const normalizedDescription = description.toLowerCase();
    const normalizedText = text.toLowerCase();

    return normalizedTitle.includes(normalizedText)
      || normalizedDescription.includes(normalizedText);
  }
}
