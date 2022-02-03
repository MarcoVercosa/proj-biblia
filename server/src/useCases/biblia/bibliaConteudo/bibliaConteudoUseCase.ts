import { IBibliaConteudoRepository, IResultado } from "../../../repositories/biblia/bibliaConteudo/IBibliaConteudoRepository";

interface IBibliaConteudoUseCase {
    Execute: (versao_id: number, livro_id: number, testamento_id: number, capitulo: number) => Promise<IResultado>
}

export class BibliaConteudoUseCase implements IBibliaConteudoUseCase {
    bibliaConteudoRepository: IBibliaConteudoRepository

    constructor(bibliaConteudoRepository: IBibliaConteudoRepository) {
        this.bibliaConteudoRepository = bibliaConteudoRepository
    }

    async Execute(versao_id: number, livro_id: number, testamento_id: number, capitulo: number) {
        let resultado: IResultado = await this.bibliaConteudoRepository.BuscaConteudo(versao_id, livro_id, testamento_id, capitulo)
        return resultado
    }
}

