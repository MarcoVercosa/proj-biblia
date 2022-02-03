import { BibliaBuscaPorPalavraRepository } from "../../../repositories/biblia/bibliaBuscaPorPalavra/bibliaBuscaPorPalavraRepository";
import { IResultado } from "../../../entities/IBibliaBuscaPorPalavraRepository";

interface IBibliaBuscaPorPlavraUseCase {

    Execute: (palavra_pesquisa: string) => Promise<IResultado>
}

export class BibliaBuscaPorPalavraUseCase implements IBibliaBuscaPorPlavraUseCase {

    constructor(private bibliaBuscaPorPlavraRepository: BibliaBuscaPorPalavraRepository) {

    }

    async Execute(palavra_pesquisa: string): Promise<IResultado> {
        let resultado: IResultado = await this.bibliaBuscaPorPlavraRepository.PesquisaPorPalavra(palavra_pesquisa)
        return resultado
    }


}