import GetAPI from "../../../fetch/api"

export async function SelectOption(versao_id, testamento_id, livro_id, capituloSelecionado){
    const {data} = await GetAPI(`mais/buscaconteudo/${versao_id}/${testamento_id}/${livro_id}/${capituloSelecionado}`)
    // match.params.capitulo = capituloSelecionado
    // setConteudo(data)
    window.scroll({
        top: 60,
        left: 0,
        behavior: 'smooth'
    });
    return data
}