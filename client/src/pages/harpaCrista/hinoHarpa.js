import { React, useState, useEffect } from 'react';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import LinearIndeterminate from "../../components/progresso/progresso"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"
import "./hinoHarpa.css"
import GetAPI from "../../fetch/api"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import HEAD from '../../components/headHelmet/head';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 80,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function HinoHarpa() {
    const classes = useStyles();
    const [numerosHinos, setNumerosHinos] = useState()  //armazena numeros dos hinos vindos do bd
    const [alteraCampoNumero, setAlteraCampoNumero] = useState(false) //responspavel por fixar o campo numero selecionado
    const [letraHino, setLetraHino] = useState(false) //armazena a letra do Hino. é falso para renderizar somente quando houver dados
    const [tituloHino, setTituloHino] = useState(false) //armazena o título do Hino
    const [campoTituloBusca, setCampoTituloBusca] = useState()// armazena dados do campo busca titulo
    const [dadosBuscaPesquisaPorTitulo, setDadosBuscaPesquisaPorTitulo] = useState(false) //armazena os dados da pesquisa por nome. é falso para renderizar somente quando houver dados
    const [erroPesquisaPorPalavra, setErroPesquisaPorPalavra] = useState(false)

    useEffect(async () => {
        const resultado = await GetAPI("hinoharpa/buscanumeroharpa")
        setNumerosHinos(resultado)
    }, [])
    
    async function BuscarHinoPorNumero(recebe) {//recebe só terá valor se for chamada pelo buscar por título Gambi, pq demora para atualizar o estado do setAlteraCampoNumero
        if (recebe) {
            setAlteraCampoNumero(recebe)
            const buscaHino = await GetAPI(`hinoharpa/buscatitulopornumero/${recebe}`)
            var armazena = []
            armazena = buscaHino.data[0].letra.split("%")
            setErroPesquisaPorPalavra(false)
            setLetraHino(armazena)//armazena array com as linhas já divididas
            setTituloHino(buscaHino.data[0].titulo) //armazena o titulo do hino
        } else {

            const buscaHino = await GetAPI(`hinoharpa/buscatitulopornumero/${alteraCampoNumero}`)
            var armazena = []
            armazena = buscaHino.data[0].letra.split("%")
            setErroPesquisaPorPalavra(false)
            setLetraHino(armazena)//armazena array com as linhas já divididas
            setTituloHino(buscaHino.data[0].titulo) //armazena o titulo do hino
        }
    }
    async function BuscahinoPorLetraTitulo() {//busca título hino por letra
        if (campoTituloBusca === undefined || campoTituloBusca.length < 2) {
            alert("Digite ao menos 2 letras para iniciar a pesquisa")
            return
        }
        const recebe = await GetAPI(`hinoharpa/buscatituloporpalavra/${campoTituloBusca}`)
        if (recebe.data.length < 1) {// se não retornar nada
            setErroPesquisaPorPalavra(true)
            setDadosBuscaPesquisaPorTitulo(false)
            setLetraHino(false)
            setTituloHino(false)

        } else {
            setLetraHino(false)//não permitindo renderizar as letras do hino que estiver sendo mostrado
            setTituloHino(false)//não permitindo renderizar o titulo do hino que estiver sendo mostrado

            setDadosBuscaPesquisaPorTitulo(recebe) //armazena os dados da busca
            setErroPesquisaPorPalavra(false)
        }
    }
    if (!numerosHinos) {
        return (
            <LinearIndeterminate />
        )
    }
    return (
        <>
            <nav className="hinoharpa-nav">
            <HEAD title="Fonte de vida - Biblia Online - Hino da harpa" description = "Os 524 hinos da harpa cristã disponíveis onde você estiver" url="http://vidadafonte.com.br/harpacrista"  keyWord={"Vida da fonte - Harpa cristã"}/>
                <Header />
                <article className="hinoharp-article">
                    <div className="hinoharpa-article-div-numero">
                        <label className="hinoharpa-article-div-label-numero" >NÚMERO</label>

                        <form className="hinoharpa-article-div-form">
                            <select className="hinoharpa-article-div-select"
                                value={alteraCampoNumero}
                                onChange={(recebe) => setAlteraCampoNumero(recebe.target.value)}
                            >
                                <option></option>
                                {numerosHinos.data.map((recebe, index) => {
                                    return (
                                        <option key={index} >{recebe.numero}</option>
                                    )
                                })}
                            </select>
                            <TextField
                                multiline={true}
                                rows={2}
                                style={{ marginLeft: "10px", width: "50%", justifyContent: "center", textAlign: "center", marginBottom: "10px" }}
                                disabled={true}
                                size="small"
                                id="outlined-basic"
                                label={tituloHino} />

                            <Button style={{ backgroundColor: "#14a37f", color: "White", marginLeft: "15px" }} variant="contained" disabled={!alteraCampoNumero}
                                onClick={() => { BuscarHinoPorNumero() }}
                            >BUSCAR</Button>
                        </form>
                    </div>
                    <div className="hinoharpa-article-div-titulo">
                        <div>
                            <label className="hinoharpa-article-div-label-titulo" >PALAVRA</label>
                        </div>

                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                onChange={(recebe) => {
                                    setCampoTituloBusca(recebe.target.value)
                                }}
                                size="small" id="outlined-basic" label="DIGITE" variant="outlined"
                            />
                        </form>
                        <div>
                            <Button style={{ backgroundColor: "#14a37f", color: "White", marginLeft: "10px" }}
                                variant="contained"
                                onClick={() => { BuscahinoPorLetraTitulo() }}
                            >BUSCAR</Button>
                        </div>
                    </div>
                </article>
                <hr></hr>
                {erroPesquisaPorPalavra
                    &&
                    <menu className="hinoharpa-busca-menu-erro">
                        <spam><i class="far fa-frown fa-4x"></i></spam>
                        <p>Não encontrei o Hino desejado.</p>
                    </menu>
                }
                <div className="hinoharpaleitura-div" style={{display: "flex", width:"100%", marginLeft:"2px"}}>
                    <article className="hinoharpaleitura-article">
                        <h3>{tituloHino}</h3>
                        {letraHino &&

                            letraHino.map((recebe, index) => {
                                return (
                                    <>
                                        <p key={index}>{recebe}</p>
                                    </>
                                )
                        }   )}
                        <menu className="hinoharpa-busca-menu">
                            {dadosBuscaPesquisaPorTitulo &&
                                dadosBuscaPesquisaPorTitulo.data.map((recebe, index) => {
                                    return (
                                        <div
                                            key={recebe.numero}
                                            onClick={() => {
                                                setDadosBuscaPesquisaPorTitulo(false)
                                                BuscarHinoPorNumero(recebe.numero)
                                            }}
                                        >
                                            <p key={index}>
                                                <i class="icone fas fa-music fa-2x"></i>HINO: {recebe.numero}
                                            </p>
                                            <p
                                                key={index + 1}>{recebe.titulo}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </menu>
                    </article>      
                    <aside className="aside-select">
                        <PainelMenuLateral />
                    </aside>            
                </div>                
            </nav>   
            <Footer />
        </>
    )

}