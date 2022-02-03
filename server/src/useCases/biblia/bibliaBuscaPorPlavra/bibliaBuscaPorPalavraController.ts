import { Request, Response } from "express";
import { IResultado } from "../../../entities/IBibliaBuscaPorPalavraRepository";
import { BibliaBuscaPorPalavraUseCase } from "./bibliaBuscaPorPalavraUseCase";

interface IBibliaBuscaPorPlavraController {
    Handle(request: Request, response: Response): Promise<Response<IResultado>>
}

export class BibliaBuscaPorPalavraController implements IBibliaBuscaPorPlavraController {

    constructor(private bibliaBuscaPorPlavraUseCase: BibliaBuscaPorPalavraUseCase) {

    }

    async Handle(request: Request, response: Response): Promise<Response<IResultado>> {
        let palavra_pesquisa: string = request.params.palavra
        try {
            let resultado: IResultado = await this.bibliaBuscaPorPlavraUseCase.Execute(palavra_pesquisa)
            return response.status(200).json(resultado)
        } catch (err: any) {
            return response.status(400).json(err.message || "Internal server error")
        }

    }
}