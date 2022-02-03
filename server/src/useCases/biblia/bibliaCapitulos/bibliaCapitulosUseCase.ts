import { BibliaCapitulosRepository } from "../../../repositories/biblia/bibliaCapitulos/bibliaCapitulosRepository";
import { IResultado } from "../../../repositories/biblia/bibliaCapitulos/IBibliaCapitulosRepository";

interface IBibliaCapitulosUseCase {
    Execute: (versao_id: number, livro_id: number) => Promise<IResultado[]>
}

export class BibliaCapitulosUseCase implements IBibliaCapitulosUseCase {

    constructor(private bibliaCapitulosRepository: BibliaCapitulosRepository) {
    }

    async Execute(versao_id: number, livro_id: number) {
        let resultado: IResultado[] = await this.bibliaCapitulosRepository.BuscaCapitulo(versao_id, livro_id)
        return resultado
    }
}
