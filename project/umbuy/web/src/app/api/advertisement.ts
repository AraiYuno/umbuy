export class Advertisement{
    id: number;
    userId: number;
    title: string;
    description: string;
    price: DoubleRange;
    last_updated: Date;
    deleted_on: Date;
    imageUrl: string;
    category: string;
}