import { HinoHarpaNumerosRepository } from "../../../repositories/hinoHarpaNumeros/hinoHarpaNumerosRepository";


export class HinoHarpaNumerosUseCase {

    constructor(
        private hinoHarpaRepository: HinoHarpaNumerosRepository
    ) { }

    async Execute(request: any) {
        let resultado: Array<{ numero: number }> = await this.hinoHarpaRepository.ListaNumeroHino()
        return resultado
    }
}