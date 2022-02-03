
export interface IBibliaTestamentoRepository {
    BuscaTestamento: () => Promise<Array<{ testamento_id: Number; testamento_nome: string }>>
}