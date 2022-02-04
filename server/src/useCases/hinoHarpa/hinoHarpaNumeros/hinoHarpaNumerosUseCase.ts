import { IHinoHarpaNumerosRepository } from "../../../entities/IHinoHarpaNumerosRepository";

interface IHinoHarpaNumerosUseCase {
    Execute(): Promise<Array<{ numero: number }>>
}

export class HinoHarpaNumerosUseCase implements IHinoHarpaNumerosUseCase {

    constructor(
        private hinoHarpaRepository: IHinoHarpaNumerosRepository
    ) { }

    async Execute() {
        let resultado: Array<{ numero: number }> = await this.hinoHarpaRepository.ListaNumeroHino()
        return resultado
    }
}