import { Controller, Res, HttpStatus, Get, Query, HttpException, Delete, Put, Body } from '@nestjs/common';
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

  @Get('find')
  findCourse(
    @Res() res: Response,
    @Query('text') text: string
  ): void {
    const courses = this.coursesService.findCourses(text);
    
    if(!courses.length) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }

    res.status(HttpStatus.OK).send(courses);
  }

  @Get('authors')
  authors(
    @Res() res: Response
  ): void {
    const authors = this.coursesService.getAuthors();

    if(!authors.length) {
      throw new HttpException('Authors not found', HttpStatus.NOT_FOUND);
    }

    res.status(HttpStatus.OK).send(authors);
  }

  @Delete('delete')
  deleteCourse(
    @Res() res: Response,
    @Query('id') id: string
  ): void {
    const isDeleted = this.coursesService.deleteCourse(id);
    
    if(!isDeleted) {
      throw new HttpException('There are no courses left', HttpStatus.NOT_FOUND);
    }

    res.status(HttpStatus.OK).send({ id });
  }

  @Put('create')
  createCourse(
    @Res() res: Response,
    @Body('course') course: string
  ) {
    const isCreated = this.coursesService.createCourse(course);

    if(!isCreated) {
      throw new HttpException('Error during the course creation', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    res.status(HttpStatus.OK).send();
  }

  @Put('update')
  updateCourse(
    @Res() res: Response,
    @Body('course') course: string
  ) {
    const updatedCourse = this.coursesService.updateCourse(JSON.parse(course));

    if(!updatedCourse) {
      throw new HttpException('Error during course updating', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    res.status(HttpStatus.OK).send(updatedCourse);
  }
}
