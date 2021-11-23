import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import GetAPI from "../../fetch/api"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function DialogSelect(props) {//props recebe ANTIGO TESTAMENTO" ou NOVO TESTAMENTO"

    const [antigoTestamento, setAntigoTestamento] = useState() //armazena a busca os livros
    const [idadeLivro, setIdadeLivro] = useState([])//usado como parâmetro para direcionar url componente painelLeitura
    const [selectLivro, setSelectLivro] = useState() //usado para poder alterar campo do livro
    const [selectCapitulo, setSelectCapitulo] = useState() // armazena a busca pelos capítulos
    const [selectCapituloAlteraCampo, setSelectCapituloAlteraCampo] = useState() //usado para poder alterar campo do capitulo


    const classes = useStyles();
    const [open, setOpen] = useState(false);


    useEffect(async () => { //assim que o módulo carregar buscar os livros

        if (props.idadeLivro === "ANTIGO TESTAMENTO") {// se antigo testamento, busque os respectivos livros
            const resultado = await GetAPI("buscalivroantigotesta")
            setIdadeLivro("antigo")
            setAntigoTestamento(resultado)

        } else {
            const resultado = await GetAPI("buscalivronovotesta")
            setIdadeLivro("novo")
            setAntigoTestamento(resultado)
        }
    }, [])


    const handleChange = (event) => {//QUANDO UM CAPITULO É SELECIONADO
        if (event.target.value === "SELECIONE") { setSelectLivro(false) } else {//se o valor do campo for SELECIONE, significa que não foi selecionado nenhum livro,
            setSelectLivro(event.target.value) //FIXA NO ESTADO O VALOR DO LIVO
            BuscaCapitulo(event.target.value) //CHAMA A FUNÇÃO PARA BUUSCAR OS CAPITULOS DO LIVRO
        }
    };

    async function BuscaCapitulo(recebe) { //busca o capitulo enviando o livro (recebe)
        if (props.idadeLivro === "ANTIGO TESTAMENTO") {
            const capitulos = await GetAPI(`buscacapituloantigotesta${recebe}`)
            setSelectCapitulo(capitulos)
        } else {
            const capitulos = await GetAPI(`buscacapitulonovotesta${recebe}`)
            setSelectCapitulo(capitulos)
        }

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div >
            <Button style={{ fontFamily: "Lora", fontSize: "25px", color: "White", borderRadius: "350px" }} onClick={handleClickOpen}>BUSCAR LIVRO</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle >{props.idadeLivro}</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-dialog-native">LIVRO</InputLabel>
                            <Select
                                native
                                value={selectLivro}
                                onChange={handleChange}
                                input={<Input id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="SELECIONE"> </option>

                                {antigoTestamento && antigoTestamento.data.map((recebe, index) => {
                                    return (
                                        < option key={index} > {recebe}</option>)
                                })}

                                {/* <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option> */}
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-dialog-select-label">CAPITULO</InputLabel>
                            <Select
                                native
                                value={selectCapituloAlteraCampo}
                                onChange={(recebe) => { //se o valor do campo for SELECIONE, significa que não foi selecionado nenhum versiculo, portanto conf o valor para fase e assim o botão ok não habilita
                                    if (recebe.target.value === "SELECIONE") { setSelectCapituloAlteraCampo(false) } else {
                                        setSelectCapituloAlteraCampo(recebe.target.value)
                                    }
                                }}
                                input={<Input id="demo-dialog-native" />}
                            >

                                <option aria-label="None" value="SELECIONE"> </option>
                                {selectCapitulo && selectCapitulo.data.map((recebe, index) => {
                                    return (

                                        <option key={index} >{recebe}</option>
                                    )


                                })}

                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>

                    <Link to={`/biblianvi/painelleitura/${idadeLivro}/${selectLivro}/${selectCapituloAlteraCampo}/m`} >
                        {/* o /M é pq na rota do routerdom pede o versiculo, e como o select não envia, para poder abrir o componente envia uma letra qualquer */}
                        {/* direciona para a URL/componente /biblianvi/painelleitura com os params forçando abrir o componente painelLeitura com o livro e o cap */}
                        <Button
                            disabled={!selectLivro || !selectCapituloAlteraCampo}
                            onClick={handleClose} color="primary">
                            Ok
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div >
    );
}
