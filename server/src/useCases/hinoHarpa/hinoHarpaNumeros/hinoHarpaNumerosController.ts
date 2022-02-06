import { Request, Response } from "express";
import { HinoHarpaNumerosUseCase } from "./hinoHarpaNumerosUseCase";

interface IHinoHarpaController {
    Handle(request: Request, response: Response): Promise<Response<Array<{ numero: number }>>>
}

export class HinoHarpaNumerosController implements IHinoHarpaController {

    constructor(
        private hinoHarpaUseCase: HinoHarpaNumerosUseCase
    ) { }

    async Handle(request: Request, response: Response): Promise<Response<Array<{ numero: number }>>> {

        try {
            let resultado: Array<{ numero: number }> = await this.hinoHarpaUseCase.Execute()
            return response.status(200).json(resultado)
        }
        catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}