export interface ICourse {
    id: string;
    title: string;
    date: Date;
    duration: number;
    description: string;
    image: string;
    author: {
        firstName: string,
        lastName: string
    };
    isTopRated: boolean;
}

export class Course implements ICourse {
    id: string;
    title: string;
    date: Date;
    duration: number;
    description: string;
    image: string;
    author: {
        firstName: string,
        lastName: string
    };
    isTopRated: boolean;
}
