export interface ICourse {
    id: number;
    title: string;
    date: Date;
    duration: number;
    description: string;
    image: string;
    author: {
        firstName: string,
        lastName: string
    };
}

export class Course implements ICourse {
    id: number;
    title: string;
    date: Date;
    duration: number;
    description: string;
    image: string;
    author: {
        firstName: string,
        lastName: string
    };
}
