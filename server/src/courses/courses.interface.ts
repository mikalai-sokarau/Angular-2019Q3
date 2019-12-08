export interface ICourse {
    id: string;
    title: string;
    date: string;
    duration: string;
    description: string;
    image: string;
    author: {
        firstName: string,
        lastName: string
    };
    isTopRated: boolean;
}
