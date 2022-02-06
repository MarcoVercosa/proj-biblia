import { Request, Response } from "express";
import { HinoHarpaTitulosUseCase } from "./hinoHarpaTitulosUseCase";

interface IHinoHarpaTitulosController {
    Handle(request: Request, response: Response): Promise<Response<IResultado>>
}
interface IResultado {
    letra: string;
    titulo: string;
}

export class HinoHarpaTitulosController implements IHinoHarpaTitulosController {

    constructor(
        private hinoHarpaUseCase: HinoHarpaTitulosUseCase
    ) { }

    async Handle(request: Request, response: Response): Promise<Response<IResultado>> {
        const numero: number = parseInt(request.params.id)

        try {
            let resultado: IResultado = await this.hinoHarpaUseCase.Execute(numero)
            return response.status(200).json(resultado)
        }
        catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}