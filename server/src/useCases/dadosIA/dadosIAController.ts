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
        const askedToAI: string = request.body.askedToAI || ''
        const pass: string = request.body.pass || ''

        try {
            if (pass != "we8lBr0X_-7-u80ohi??ap_u2ip?c2") { throw `Not authorized => ${pass}` }
            let resultado: IParams = await this.dadosIAUseCase.Execute(askedToAI)
            return response.status(resultado.response.status).json({ response: resultado.response })

        } catch (error) {
            console.log(error)
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