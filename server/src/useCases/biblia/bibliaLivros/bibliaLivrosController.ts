import { Request, Response } from "express"
import { BibliaLivrosUseCase } from "./bibliaLivrosUseCase";
import { IResultado } from "../../../entities/IBibliaLivrosRepository"

interface IBibliaLivrosController {
    Handle: (request: Request, response: Response) => Promise<Response<IResultado[]>>
}

export class BibliaLivrosController implements IBibliaLivrosController {
    constructor(
        private bibliaLivrosUseCase: BibliaLivrosUseCase
    ) { }

    async Handle(request: Request, response: Response) {
        let testamento_id: number = parseInt(request.params.testamento_id)

        try {
            let resultado: IResultado[] = await this.bibliaLivrosUseCase.Execute(testamento_id)
            return response.status(200).json(resultado)
        } catch (err: any) {
            return response.status(400).json(err.message)
        }

    }
}