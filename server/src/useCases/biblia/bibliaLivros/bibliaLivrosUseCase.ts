import { IBibliaLivrosRepository } from "../../../entities//IBibliaLivrosRepository";
import { IResultado } from "../../../entities//IBibliaLivrosRepository";

interface IBibliaLivrosUseCase {
    Execute: (testamento_id: number) => Promise<IResultado[]>
}

export class BibliaLivrosUseCase implements IBibliaLivrosUseCase {
    constructor(
        private bibliaLivrosRepository: IBibliaLivrosRepository
    ) { }

    async Execute(testamento_id: number) {
        let resultado: IResultado[] = await this.bibliaLivrosRepository.BuscaLivros(testamento_id)
        return resultado
    }
}