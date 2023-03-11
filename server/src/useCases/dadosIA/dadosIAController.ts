import { Request, Response } from "express";
import { DadosIAUseCase } from "./dadosIAUseCase";

interface IParams {
    response: {
        result?: string | any
        message: string,
        status: number
    }
}

interface IDadosIAController {
    Handle(request: Request, response: Response): Promise<Response<IParams>> | Promise<any>

}


export class DadosIAController implements IDadosIAController {

    constructor(
        private dadosIAUseCase: DadosIAUseCase
    ) { }

    async Handle(request: Request, response: Response): Promise<Response<DadosIAController>> {
        const params: string = request.body.requestToAI || ''

        try {
            let resultado: IParams = await this.dadosIAUseCase.Execute(params)
            return response.status(resultado.response.status).json({ response: resultado.response })

        } catch (error) {
            return response.status(401).json({
                response: {
                    message: error,
                    status: 401,
                    result: []
                }
            })
        }

    }

}