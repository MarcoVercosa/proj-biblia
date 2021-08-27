import axios from "axios"


export default async function GetAPI(livro, nome) {

    const resultado = await axios.get(`http://191.181.11.42:9000/${livro}`)
    console.log(resultado)
    return resultado


}