export class Advertisement{
    id: number;
    userId: number;
    title: string;
    description: string;
    price: DoubleRange;
    created_on: Date;   
    last_updated: Date;
    deleted_on: Date;
    imageUrl: string;
    category: string;
}