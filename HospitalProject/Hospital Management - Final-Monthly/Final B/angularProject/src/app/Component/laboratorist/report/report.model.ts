export class Report {
    id!: number;

    reportName!: string;
    description!: string;
    sampleId!: string;
    reportResult!: string;
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
