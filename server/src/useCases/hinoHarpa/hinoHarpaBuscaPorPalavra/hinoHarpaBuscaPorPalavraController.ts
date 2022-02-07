import { Request, Response } from "express";
import { HinoHarpaBuscaPorPalavraUseCase } from "./hinoHarpaBuscaPorPalavraUseCase";

interface IHinoHarpaBuscaPorPalavraController {
    Handle(request: Request, response: Response): Promise<Response<IResultado>>
}

interface IResultado {
    numero: number;
    titulo: string;
}

export class HinoHarpaBuscaPorPalavraController implements IHinoHarpaBuscaPorPalavraController {

    constructor(
        private hinoHarpaBuscaPorPalavraUseCase: HinoHarpaBuscaPorPalavraUseCase
    ) { }

    async Handle(request: Request, response: Response): Promise<Response<IResultado>> {
        const palavra: string = request.params.id
        try {
            let resultado: IResultado = await this.hinoHarpaBuscaPorPalavraUseCase.Execute(palavra)
            return response.status(200).json(resultado)
        }
        catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}