export interface IBibliaVersaoRepository {

    BuscaVersaoBiblia(): Promise<Array<{ versao_id: Number, versao_nome: String }>>
}