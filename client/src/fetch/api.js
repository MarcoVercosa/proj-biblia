import axios from "axios"

let local = "localhost"
let publico = "fontedevida.mavs.vps-kinghost.net"


export default async function GetAPI(livro, nome) {

    const resultado = await axios.get(`http://${publico}:9000/${livro}`)
    //console.log(resultado)
    return resultado


}