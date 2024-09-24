export class AdminProfileModel {
    name!: string;
    specialization!: string;
    phone!: string;
    email!: string;
    birthday!: string;
    address!: string;
    gender!: string;
    avatar!: string;
    employeeId!: string;
    education!: Education[];
    experience!: Experience[];
  }
  
  export class Education {
    institution!: string;
    degree!: string;
    startYear!: string;
    endYear!: string;
  }
  
  export class Experience {
    position!: string;
    startDate!: string;
    endDate!: string;
  }
  