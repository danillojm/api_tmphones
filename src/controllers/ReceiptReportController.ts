import ejs from 'ejs';
import { Request, Response } from "express";
import pdf from 'html-pdf';
import path from "path";
import puppeteer from 'puppeteer';
import { ReceiptReport } from '../model/ReceiptReport';
import { ReceiptReportService } from "../services/ReceiptReportService";

var receiptReport: ReceiptReport

export class ReceiptReportController {



    async generateReport(request: Request, response: Response) {
        const { clientName, cpf, brandName, description, imei, salePrice, observation } = request.body;

        const service = new ReceiptReportService();

        //    const receiptReport = await service.getReceiptReport({ clientName, cpf, brandName, description, imei, salePrice, observation, });

        const filePath = path.join(__dirname, "../report/receiptReport.ejs");
        console.log(receiptReport)
        console.log(receiptReport)
        ejs.renderFile(filePath, { receiptReport }, (err, data) => {
            if (err) {
                return response.send('Erro na leitura do arquivo')
            }

            pdf.create(data).toFile("recibo.pdf", (err, data) => {
                if (err) {
                    return response.send('Erro ao gerar o pdf')
                }


            })
            return response.send(data)
        }

        )



    }
    async generateReceiptReport(request: Request, response: Response) {
        const { clientName, cpf, brandName, description, imei, salePrice, observation } = request.query;
        // console.log('query - '+ request.query['clientName'])
        receiptReport = new ReceiptReport();
        receiptReport.clientName = request.query['clientName'].toString()
        receiptReport.cpf = request.query['cpf'].toString()
        receiptReport.brandName = request.query['brandName'].toString()
        receiptReport.description = request.query['description'].toString()
        receiptReport.imei = request.query['imei'].toString()
        receiptReport.salePrice = request.query['salePrice'].toString()
        receiptReport.observation = request.query['observation'].toString()

        console.log(clientName, cpf, brandName, description, imei, salePrice, observation)
        const browser = await puppeteer.launch();
        const page = await browser.newPage()

        await page.goto('http://localhost:3000/generateReport', {
            waitUntil: 'networkidle0',
        })
        const pdf = await page.pdf({ path: 'hn.pdf', format: 'a4' });
        await browser.close()

        response.contentType("application/pdf")
        return response.send(pdf)

    }

}