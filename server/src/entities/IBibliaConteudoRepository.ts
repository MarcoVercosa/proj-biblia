export interface IPromessa1 {
    conteudo: string
}
export interface IPromessa2 {
    livro_nome: string;
    livro_abreviado: string
}
export interface IPromessa3 {
    capitulo: number
}
export interface IPromessa4 {
    versao_nome: string;
}


export interface IResultado {
    conteudo: Array<{ conteudo: string }>;
    nomeLivro: { livro_nome: string, livro_abreviado: string };
    quantidadecapitulo: { capitulo: number };
    nomeVersao: { versao_nome: string; }
    capituloAtual: number
}

export interface IBibliaConteudoRepository {
    BuscaConteudo: (versao_id: number, livro_id: number, testamento_id: number, capitulo: number) => Promise<IResultado>
}