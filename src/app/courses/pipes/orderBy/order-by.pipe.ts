import { ICourse } from '../../components/course/course.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(courses: Array<ICourse>, value: string, limit: number): Array<ICourse> {
    return courses
      .sort((a, b) => a[value] < b[value] ? -1 : 1)
      .slice(0, limit);
  }

}
