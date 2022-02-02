export interface IHinoHarpaNumerosRepository {

    ListaNumeroHino(): Promise<Array<{ numero: number }>>
}