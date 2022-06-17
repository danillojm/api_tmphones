import ejs from 'ejs';
import { Router } from "express";
import pdf from 'html-pdf';
import path from "path";
import puppeteer from 'puppeteer';
import { CategoryController } from "./controllers/CategoryController";
import { ClientController } from "./controllers/ClientController";
import { PlatformPurchaseController } from "./controllers/PlatformPurchaseController";
import { ProductController } from "./controllers/ProductController";
import { PurchaseController } from "./controllers/PurchaseController";
import { ReceiptReportController } from './controllers/ReceiptReportController';
import { StockController } from './controllers/StockController';
import { SystemUserController } from './controllers/SystemUserController';
const router = Router();

// Router categories
router.get("/categories", new CategoryController().getAll);
router.post("/categories", new CategoryController().insert);
router.put("/categories", new CategoryController().update);
router.delete("/categories", new CategoryController().delete);
//router products
router.get("/products", new ProductController().getAll);
router.post("/products", new ProductController().insert);
router.delete("/products", new ProductController().delete);
router.get("/products/:id", new ProductController().getById);
router.put("/products/:id", new ProductController().update);
//Clients
router.post("/clients", new ClientController().insert);
router.get("/clients", new ClientController().getAll);
router.get("/clients/:id", new ClientController().getById);
router.delete("/clients/:id", new ClientController().delete);
router.put("/clients/:id", new ClientController().update);
// platformPurchases
router.post("/platformPurchases", new PlatformPurchaseController().insert);
router.get("/platformPurchases", new PlatformPurchaseController().getAll);
router.get("/platformPurchases/:id", new PlatformPurchaseController().getById);
router.delete("/platformPurchases/:id", new PlatformPurchaseController().delete);
router.put("/platformPurchases/:id", new PlatformPurchaseController().update);
// Purchases
router.post("/purchases", new PurchaseController().insert);
router.get("/purchases", new PurchaseController().getAll);
router.get("/purchases/:id", new PurchaseController().getById);
router.delete("/purchases/:id", new PurchaseController().delete);
router.put("/purchases/:id", new PurchaseController().update);

//stock
router.post("/stocks", new StockController().insert);
router.get("/stocks", new StockController().getAll);
//router.get("/stocks/:id", new StockController().getById);
//router.delete("/stocks/:id", new StockController().delete);
//router.put("/stocks/:id", new StockController().update);

// systemUser
router.post("/systemUsers", new SystemUserController().insert);
router.get("/systemUsers", new SystemUserController().getAll);
router.get("/systemUsers/:id", new SystemUserController().getById);
router.delete("/systemUsers/:id", new SystemUserController().delete);
router.put("/systemUsers/:id", new SystemUserController().update);

//report 
router.get("/generateReport", new ReceiptReportController().generateReport)
router.get("/generateReceiptReport", new ReceiptReportController().generateReceiptReport)
const product =
{
    nome: "IPHONE 11 128gb preto bateria 90%",
    imei: 12343636

}

const client =
{
    nome: "Danillo josé de melo",
    cpf: '103.716.604-32'

}

router.get('/recibo', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()

    await page.goto('http://localhost:3000/pdf', {
        waitUntil: 'networkidle0',
    })
    const pdf = await page.pdf({ path: 'hn.pdf', format: 'a4' });
    await browser.close()

    res.contentType("application/pdf")
    return res.send(pdf)
})

router.get('/pdf', (req, res) => {

    const filePath = path.join(__dirname, "report/print.ejs");
    ejs.renderFile(filePath, { product, client }, (err, data) => {
        if (err) {
            return res.send('Erro na leitura do arquivo')
        }

        pdf.create(data).toFile("recibo.pdf", (err, data) => {
            if (err) {
                return res.send('Erro ao gerar o pdf')
            }


        })
        return res.send(data)
    }

    )
})

export { router };

