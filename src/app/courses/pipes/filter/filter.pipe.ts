import { ICourse } from './../../components/course/course.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(courses: Array<ICourse>, filterBy: string): Array<ICourse> {
    return courses.filter(course => course.title.indexOf(filterBy) >= 0);
  }

}
