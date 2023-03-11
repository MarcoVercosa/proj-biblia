import { Configuration, OpenAIApi } from "openai";
import { Request, Response } from "express";
import { request } from "http";
const OpenAI = require("express").Router()
import { dadosIAController } from "../../../useCases/dadosIA/index"

OpenAI.post("/dataai", async (request: Request, response: Response) => {
    // response.status(200).json({ result: "Recebemos" })
    dadosIAController.Handle(request, response)
})


export { OpenAI }
