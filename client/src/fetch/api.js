import axios from "axios"

let local = "192.168.0.14"
let publico = "fontedevida.mavs.vps-kinghost.net"


export default async function GetAPI(livro, nome) {

    const resultado = await axios.get(`http://${publico}:9000/${livro}`)
    //console.log(resultado)
    return resultado


}