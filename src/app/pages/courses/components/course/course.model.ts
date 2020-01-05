import { IAuthor } from '../input-author/input-author.model';

export interface ICourse {
    id: string;
    title: string;
    date: string;
    duration: string;
    description: string;
    image: string;
    authors: Array<IAuthor>;
    isTopRated: boolean;
}

export class Course implements ICourse {
    id: string;
    title: string;
    date: string;
    duration: string;
    description: string;
    image: string;
    authors: Array<IAuthor>;
    isTopRated: boolean;

    constructor(
        title = '',
        date = '',
        duration = '',
        description = '',
        authors = []
    ) {
        this.title = title,
        this.date = date,
        this.duration = duration,
        this.description = description,
        this.authors = authors;
    }
}
