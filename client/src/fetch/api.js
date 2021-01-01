import axios from "axios"


export default async function GetAPI(livro, nome) {

    const resultado = await axios.get(`http://192.168.0.6:9000/${livro}`)
    console.log(resultado)
    return resultado


}