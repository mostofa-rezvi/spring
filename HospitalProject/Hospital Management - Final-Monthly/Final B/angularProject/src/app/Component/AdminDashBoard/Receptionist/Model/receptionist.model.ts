export class ReceptionistModel {
    id!: string;
    name!: string;
    phone!: string;
    email!: string;
    gender!: boolean;
    shift!: string;  // e.g., "Morning", "Evening", "Night"
    status!: string;  // e.g., Active", "Inactive" 
}
