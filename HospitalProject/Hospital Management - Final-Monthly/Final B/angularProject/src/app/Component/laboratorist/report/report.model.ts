export class Report {
    id!: number;

    reportName!: string;
    reportResult!: string;
    
    description!: string;
    sampleId!: string;
    interpretation!: string;

    testDate!: Date;
    createdAt!: Date;
    updatedAt!: Date;

    user!: {
        id: number;
    };
    test!: {
        id: number;
    };
}
