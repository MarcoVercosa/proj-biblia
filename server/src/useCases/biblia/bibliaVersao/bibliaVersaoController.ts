import { Response } from "express";
import { BibliaVersaoUseCase } from "./bibliaVersaoUseCase";

interface IResultado {
    versao_id: string;
    versao_nome: string
}

interface IBibliaVersaoController {
    Handle: (response: Response) => Promise<Response<IResultado>>
}

export class BibliaVersaoController implements IBibliaVersaoController {

    constructor(
        private bibliaVersaoUseCase: BibliaVersaoUseCase
    ) { }

    async Handle(response: Response): Promise<Response<IResultado>> {

        try {
            let resultado: IResultado[] = await this.bibliaVersaoUseCase.Execute()
            return response.status(200).json(resultado)
        }
        catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}