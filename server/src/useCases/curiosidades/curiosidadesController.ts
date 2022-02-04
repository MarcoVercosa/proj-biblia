import { Request, Response } from "express";
import { CuriosidadesUseCase } from "./curiosidadesUseCase";

interface IResultado {
    livro: string;
    conteudo: string;
}

export class CuriosidadesController {

    constructor(

        private curiosodadesHarpaUseCase: CuriosidadesUseCase

    ) { }

    async Handle(request: Request, response: Response): Promise<Response | undefined> {

        const palavra = request.params.id

        try {
            let resultado: IResultado = await this.curiosodadesHarpaUseCase.Execute(palavra)
            return response.status(200).json(resultado)
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }

    }
}