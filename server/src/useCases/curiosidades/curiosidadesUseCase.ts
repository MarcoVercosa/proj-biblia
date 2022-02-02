import { ICuriosidadesRepository } from "../../repositories/curiosidades/ICuriosidadesHarpa";

interface IResultado {
    livro: string;
    conteudo: string;
}
interface ICuriosidadesUseCase {
    Execute(palavra: string): Promise<IResultado>
}


export class CuriosidadesUseCase implements ICuriosidadesUseCase {

    constructor(
        private curiosidadesRepository: ICuriosidadesRepository
    ) { }

    async Execute(palavra: string): Promise<IResultado> {
        let resultado: IResultado = await this.curiosidadesRepository.BuscaCuriosidade(palavra)
        return resultado
    }

}
