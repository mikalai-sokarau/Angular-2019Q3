import { ICourse } from './../../interfaces/course.interface';

export class Course implements ICourse {
    id: number;
    title: string;
    creation: Date;
    duration: number;
    description: string;
}
