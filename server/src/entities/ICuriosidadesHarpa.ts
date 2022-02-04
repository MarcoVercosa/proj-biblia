export interface ICuriosidadesRepository {
    BuscaCuriosidade(palavra: string): Promise<{ livro: string, conteudo: string }>
}