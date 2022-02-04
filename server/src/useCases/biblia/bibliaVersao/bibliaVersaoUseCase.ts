import { IBibliaVersaoRepository } from "../../../entities/IBibliaVersaoRepository";

interface IResultado {
    versao_id: string;
    versao_nome: string
}

interface IBibliaVersaoUseCase {
    Execute: () => Promise<IResultado[]>
}

export class BibliaVersaoUseCase implements IBibliaVersaoUseCase {
    constructor(
        private bibliaVersaoRepository: IBibliaVersaoRepository
    ) { }

    async Execute(): Promise<IResultado[]> {
        let resultado: any = await this.bibliaVersaoRepository.BuscaVersaoBiblia()
        return resultado
    }
}