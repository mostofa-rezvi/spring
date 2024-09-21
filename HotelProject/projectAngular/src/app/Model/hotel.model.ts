import { LocationModel } from "./location.model";

export class HotelModel {

    id!: number;
    name!: string;
    image!: string;
    address!: string;
    maxPrice!: number;
    minPrice!: number;
    rating!: string;

    location!: LocationModel;
}