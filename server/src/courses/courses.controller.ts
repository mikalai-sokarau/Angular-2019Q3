import { Controller, Res, HttpStatus, Get, Query, HttpException } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Response } from 'express';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  courses(
    @Res() res: Response,
    @Query('from') from: number,
    @Query('to') to: number
  ): void {
    const courses = this.coursesService.getCourses(from, to);

    if(!courses.length) {
        throw new HttpException('Courses not found', HttpStatus.NOT_FOUND);
    }

    res.status(HttpStatus.OK).send(courses);
  }
}
