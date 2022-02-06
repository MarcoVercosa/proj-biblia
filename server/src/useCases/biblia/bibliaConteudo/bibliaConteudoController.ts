import { Request, Response } from "express"
import { BibliaConteudoUseCase } from "./bibliaConteudoUseCase";
import { IResultado } from "../../../entities/IBibliaConteudoRepository";

interface IBibliaConteudoController {
    Handle: (request: Request, response: Response) => Promise<Response<IResultado>>
}

export class BibliaConteudoController implements IBibliaConteudoController {

    constructor(
        private bibliaConteudoUseCase: BibliaConteudoUseCase
    ) { }

    async Handle(request: Request, response: Response) {
        let versao_id: number = Number(request.params.versao_id)
        let testamento_id: number = Number(request.params.testamento_id)
        let livro_id: number = Number(request.params.livro_id)
        let capitulo: number = Number(request.params.capitulo)

        try {
            let resultado: IResultado = await this.bibliaConteudoUseCase.Execute(versao_id, livro_id, testamento_id, capitulo)
            return response.status(200).json(resultado)
        } catch (err: any) {
            return response.status(400).json(err.message || "Internal error server")
        }

    }
}