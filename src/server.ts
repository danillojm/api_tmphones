import express from "express";
import "reflect-metadata";
import "./database";
import { router } from "./routes";
import path from 'path';
var cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.set(" view engine", "ejs")
app.use(express.static('src/public'))
app.use('/static', express.static(path.join(__dirname,'public')))
app.use(express.urlencoded())

app.use(router)

app.listen(3000, () => console.log('Iniciado..' + path.join(__dirname,'public/css')));