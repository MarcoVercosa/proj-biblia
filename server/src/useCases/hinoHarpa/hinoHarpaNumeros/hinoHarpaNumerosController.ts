import { Request, Response } from "express";
import { HinoHarpaNumerosUseCase } from "./hinoHarpaNumerosUseCase";

interface IHinoHarpaController {
    Handle(request: Request, response: Response): void
}

export class HinoHarpaNumerosController implements IHinoHarpaController {

    constructor(
        private hinoHarpaUseCase: HinoHarpaNumerosUseCase
    ) { }

    async Handle(request: Request, response: Response): Promise<void> {

        try {
            let resultado: Array<{ numero: number }> = await this.hinoHarpaUseCase.Execute(request)
            response.status(200).json(resultado)
        }
        catch (err: any) {
            response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}