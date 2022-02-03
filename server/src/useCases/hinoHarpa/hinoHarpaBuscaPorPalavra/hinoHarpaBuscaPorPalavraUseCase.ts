import { IHinoHarpaBuscaPorPalavraRepository } from "../../../repositories/hinoHarpa/hinoHarpaBuscaPorPalavra/IHinoHarpaBuscaPorPalavraRepository"

interface IResultado {
    numero: number;
    titulo: string;
}

interface IHinoHarpaBuscaPorPalavraUseCase {
    Execute(palavra: string): Promise<IResultado>
}

export class HinoHarpaBuscaPorPalavraUseCase implements IHinoHarpaBuscaPorPalavraUseCase {

    constructor(
        private hinoHarpaBuscaPorPalavraRepository: IHinoHarpaBuscaPorPalavraRepository
    ) { }

    async Execute(palavra: string): Promise<IResultado> {
        let resultado: any = await this.hinoHarpaBuscaPorPalavraRepository.BuscaHinoPorPalavra(palavra)
        return resultado
    }
}