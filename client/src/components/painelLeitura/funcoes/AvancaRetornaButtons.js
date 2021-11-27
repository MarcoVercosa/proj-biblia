import GetAPI from "../../../fetch/api"

export async function AvancaCapitulo(versao_id, testamento_id, livro_id, capitulo){
    const {data} = await GetAPI(`mais/buscaconteudo/${versao_id}/${testamento_id}/${livro_id}/${Number(capitulo) + 1}`)
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return data
}


export async function RetornaCapitulo(versao_id, testamento_id, livro_id, capitulo){
    const {data} = await GetAPI(`mais/buscaconteudo/${versao_id}/${testamento_id}/${livro_id}/${Number(capitulo) - 1}`)
    window.scroll({
        top: 60,
        left: 0,
        behavior: 'smooth'
    });
    return data
}