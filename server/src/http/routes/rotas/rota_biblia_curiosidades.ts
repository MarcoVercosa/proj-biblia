import { Request, Response } from "express";
import { Router } from "express"
import { Logger } from "../../../services/logs/createLogs";
import { LiberaOrigemRegistraLog } from "../../../services/middleware/checkorigem"
import { curiosidadesController } from "../../../useCases/curiosidades/index"

// =========== CURIOSIDADES =================

let RotaCuriosidades = Router()

RotaCuriosidades.get("/buscacuriosidade/:id", LiberaOrigemRegistraLog, (request: Request, response: Response) => {//busca curiosidades dado o nome do livro
    Logger.http("Solicitado CURIOSIDADES na rota /buscacuriosidade/:id")
    curiosidadesController.Handle(request, response)
})

export { RotaCuriosidades }

