import { Request, Response } from "express"
import { BibliaCapitulosUseCase } from "./bibliaCapitulosUseCase";
import { IResultado } from "../../../entities/IBibliaCapitulosRepository"

interface IBibliaCapitulosController {
    Handle: (request: Request, response: Response) => Promise<Response<IResultado[]>>
}


export class BibliaCapitulosController implements IBibliaCapitulosController {
    constructor(private bibliaCapitulosUseCase: BibliaCapitulosUseCase) {

    }
    async Handle(request: Request, response: Response) {
        let versao_id: number = parseInt(request.params.versao_id)
        let livro_id: number = parseInt(request.params.livro_id)

        try {
            let resultado: IResultado[] = await this.bibliaCapitulosUseCase.Execute(versao_id, livro_id)
            return response.status(200).json(resultado)
        } catch (err: any) {
            return response.status(400).json(err.message)
        }
    }
}