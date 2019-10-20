export interface ICourse {
    id: number;
    title: string;
    creation: Date;
    duration: number;
    description: string;
}

export class Course implements ICourse {
    id: number;
    title: string;
    creation: Date;
    duration: number;
    description: string;
}
