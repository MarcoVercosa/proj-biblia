export interface IResultado {
    capitulo: number
}

export interface IBibliaCapitulosRepository {
    BuscaCapitulo: (versao_id: number, livro_id: number) => Promise<IResultado[]>
}