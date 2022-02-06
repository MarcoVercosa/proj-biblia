import { HinoHarpaTitulosRepository } from "../../../repositories/hinoHarpa/hinoHarpaTitulos/hinoHarpaTitulosRepository"

interface IHinoHarpaTitulosUseCase {
    letra: string;
    titulo: string;
}

export class HinoHarpaTitulosUseCase {

    constructor(
        private hinoHarpaTitulosRepository: HinoHarpaTitulosRepository
    ) { }

    async Execute(numero: number): Promise<IHinoHarpaTitulosUseCase> {
        let resultado: any = await this.hinoHarpaTitulosRepository.BuscaHinoPorNumero(numero)
        return resultado
    }
}