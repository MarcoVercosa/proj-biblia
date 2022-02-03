import { IBibliaLivrosRepository } from "../../repositories/biblia/bibliaLivros/IBibliaLivrosRepository";
import { IResultado } from "../../repositories/biblia/bibliaLivros/IBibliaLivrosRepository";

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