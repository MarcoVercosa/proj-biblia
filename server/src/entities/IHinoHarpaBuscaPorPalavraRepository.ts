
export interface IResultado {
    numero: number;
    titulo: string
}

export interface IHinoHarpaBuscaPorPalavraRepository {
    BuscaHinoPorPalavra(palavra: string): Promise<IResultado>
}