import { Request, Response } from "express";
const OpenAI = require("express").Router()
import { dadosIAController } from "../../../useCases/dadosIA/index"
import { Logger } from "../../../services/logs/createLogs";

OpenAI.post("/dataai", async (request: Request, response: Response) => {
    Logger.http("Solicitado IA  na rota /dataai")
    dadosIAController.Handle(request, response)
})


export { OpenAI }
