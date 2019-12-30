//  Interfaces seem to be a lot like a View Model/ Entity/ Prop class
export interface IProduct{
    productId :  number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price:       number;
    description: string;
    starRating:  number;
    imageUrl:    string;
}