import { ReceiptReport } from "../model/ReceiptReport";
type ReceiptReportType = {
    clientName: string;
    cpf: string;
    brandName: string;
    description: string;
    imei: string;
    salePrice: number;
    observation: string
}
export class ReceiptReportService {


    async getReceiptReport({ clientName, cpf, brandName, description, imei, salePrice, observation }: ReceiptReportType): Promise<ReceiptReport> {

        const receiptReport = new ReceiptReport();

        receiptReport.clientName = clientName
        receiptReport.cpf = cpf
        receiptReport.brandName = brandName
        receiptReport.description = description
        receiptReport.imei = imei
        receiptReport.salePrice = salePrice
        receiptReport.observation = observation


        return receiptReport

    }
}