export interface IResultado {
    versao_id: number;
    livro_id: number;
    conteudo: string;
    capitulo: number;
    versiculo: number;
    livro_nome: string;
    livro_abreviado: string;
    livro_testamento_id: number;
}

export interface IBibliaBuscaPorPlavraRepository {

    PesquisaPorPalavra: (palavra_pesquisa: string) => Promise<IResultado>
}