import { Response } from "express";
import { BibliaTestamentoUseCase } from "./bibliaTestamentoUseCase"


interface IResultado {
    testamento_id: Number;
    testamento_nome: String
}

interface IBibliaTestamentoController {
    Handle: (response: Response) => Promise<Response<IResultado[]>>
}

export class BibliaTestamentoController implements IBibliaTestamentoController {

    constructor(
        private bibliaTestamentoUseCase: BibliaTestamentoUseCase
    ) { }

    async Handle(response: Response): Promise<Response<IResultado[]>> {

        try {
            let resultado: IResultado[] = await this.bibliaTestamentoUseCase.Execute()
            return response.status(200).json(resultado)
        }
        catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}