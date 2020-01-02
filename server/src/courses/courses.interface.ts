export interface ICourse {
    id: string;
    title: string;
    date: string;
    duration: string;
    description: string;
    image: string;
    author: IAuthor;
    isTopRated: boolean;
}

export interface IAuthor {
    firstName: string,
    lastName: string
}
