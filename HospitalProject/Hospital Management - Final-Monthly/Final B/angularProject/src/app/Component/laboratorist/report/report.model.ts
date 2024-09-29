export class Report {
    id?: number;
    reportName!: string;
    description!: string;
    summary!: string;

    diagnosticsId!: number;
    createdById!: number;

    createdAt?: Date;
    updatedAt?: Date;
    isFinalized!: boolean;
}
