export interface IResultado {
    livro_id: Number;
    livro_testamento_id: Number;
    livro_posicao: Number;
    livro_nome: String;
    livro_abreviado: String;
}

export interface IBibliaLivrosRepository {
    BuscaLivros: (testamento_id: number) => Promise<IResultado[]>
}