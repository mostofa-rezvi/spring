import { LocationModel } from "./location.model";

export class HotelModel {

    id!: number;
    name!: string;
    address!: string;
    rating!: string;
    startPrice!: number;
    image!: string;

    location!: LocationModel;
}