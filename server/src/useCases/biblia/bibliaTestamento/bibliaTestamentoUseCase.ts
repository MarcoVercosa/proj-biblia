import { IBibliaTestamentoRepository } from "../../../repositories/biblia/bibliaTestamento/IBibliaTestamentoRepository"

interface IResultado {
    testamento_id: Number;
    testamento_nome: String
}

interface IBibliaTestamentoUseCase {
    Execute: () => Promise<IResultado[]>
}

export class BibliaTestamentoUseCase implements IBibliaTestamentoUseCase {
    constructor(
        private bibliaTestamentoRepository: IBibliaTestamentoRepository
    ) { }

    async Execute(): Promise<IResultado[]> {
        let resultado: any = await this.bibliaTestamentoRepository.BuscaTestamento()
        return resultado
    }
}