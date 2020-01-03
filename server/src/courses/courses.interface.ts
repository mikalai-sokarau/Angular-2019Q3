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

export interface IAuthor {
    firstName: string,
    lastName: string
}
