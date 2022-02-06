interface IResultado {
    letra: string;
    titulo: string
}

interface IHinoHarpaTitulosRepository {
    BuscaHinoPorNumero(numero: number): Promise<Array<IResultado>>
}