import { Request, Response } from "express";
import { Router } from "express"
import LiberaOrigemRegistraLog from "./midware/checkorigem"
import { curiosidadesController } from "../../../useCases/curiosidades/index"

// =========== CURIOSIDADES =================

let RotaCuriosidades = Router()

RotaCuriosidades.get("/buscacuriosidade/:id", LiberaOrigemRegistraLog, (request: Request, response: Response) => {//busca curiosidades dado o nome do livro
    curiosidadesController.Handle(request, response)
})

export { RotaCuriosidades }

