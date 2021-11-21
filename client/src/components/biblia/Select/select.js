import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import GetAPI from "../../../fetch/api";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const [versao, setVersao] = useState([]);
  const [testamento, setTestamento] = useState([]);
  const [livro, setLivro] = useState([]);
  const [capitulo, setCapitulo] = useState({numero_total: undefined,renderiza_componente_option: []});
  const [conteudo, setConteudo] = useState([]);

  //armazena os itens selecionados
  const [camposSelecionados, setCamposSelecionados] = useState({
    versao:"selecione",
    versao_id:undefined,
    testamento:"selecione",
    testamento_id: undefined,
    livro: "selecione",
    livro_id: undefined,
    capitulo:"selecione",
    conteudo: "selecione",
    conteudo_id: undefined
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };


  useEffect(async() =>{

    const { data } = await GetAPI("mais/buscaversao");
    setVersao(data)
    

  }, [])

  async function BuscaOpcoesSelecionadas(opcao, dadoSelecionado,){
    if(opcao==="versao"){
         
      let Get_ID = []
      //obtem o ID da versão selecionada
      versao.map((dados) => { 
        if(dadoSelecionado == dados.versao_nome){Get_ID.push(dados.versao_id)}
      });      
      // atualiza o obj para armazenar a opção selecionada
      setCamposSelecionados(prevStat => {
        return {... prevStat, versao: dadoSelecionado, versao_id: Get_ID}
      });    

      // busca os dados da proxima opção que é testamento
      const { data } = await GetAPI("mais/buscatestamento")
      setTestamento(data)

      return;
    }
    
    if(opcao==="testamento"){      

      let Get_ID = []
      //obtem o ID do testamento selecionada
      testamento.map((dados) => { 
        if(dadoSelecionado == dados.testamento_nome){Get_ID.push(dados.testamento_id)}
      });
      //armazena a opcao selecionada
      setCamposSelecionados(prevStat => {
        return {... prevStat, testamento: dadoSelecionado, testamento_id:Get_ID}
      })

      //busca os dados da proxima opção que é livros
      const { data } = await GetAPI("mais/buscalivros")
      setLivro(data);

      return;
      
    }
    if(opcao==="livro"){
      //obtem os id do livro
      let Get_ID = []
      livro.map((dados) => { 
        if(dadoSelecionado == dados.livro_nome){Get_ID.push({livroid: dados.livro_id, livro_abreviado:dados.livro_abreviado, livro_posicao:dados.livro_posicao, livro_testamento_id: dados.livro_testamento_id })}
      });
      //armazena  as opções no useState
      setCamposSelecionados(prevStat => {
        return {... prevStat, livro: dadoSelecionado, livro_id:Get_ID}
      });

      //busca os dados dos capítulos
      const { data } = await GetAPI(`mais/buscacapitulo/${camposSelecionados.versao_id[0]}/${Get_ID[0].livro_posicao}`)
 
      let render = []
      for(let i = 0; i < data[data.length -1 ].capitulo; i++){
        render.push(<option key={i +1}  value={i +1 }>{i +1}</option>)
      }
      setCapitulo(prevState => {
        return {... prevState, numero_total: data[data.length -1].capitulo, renderiza_componente_option: render}
      }) 

      return
    }        
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ fontSize: "20px", fontFamily: "Times New Roman" }}
        onClick={handleClickOpen}
      >
        SELECIONE AS OPÇÕES PARA A LEITURA
      </Button>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Selecione suas opções:</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">VERSÃO</InputLabel>
              <Select
                native
                onChange={(dados)=> {BuscaOpcoesSelecionadas("versao", dados.target.value)}}                
                input={<Input id="demo-dialog-native" />}
                value={camposSelecionados.versao}
              >
                <option> {camposSelecionados.versao}</option>
                {
                  versao &&
                  versao.map((data)=>{
                    return (
                      <option key={data.versao_id}   value={data.versao_nome}>
                        {data.versao_nome}
                      </option>
                    )
                  })
                }                
     
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">TESTAMENTO</InputLabel>
              <Select
                native
                value={camposSelecionados.testamento}
                onChange={(dados)=> {BuscaOpcoesSelecionadas("testamento", dados.target.value, dados)}}  
                input={<Input id="demo-dialog-native" />}
              >
                <option> {camposSelecionados.testamento}</option>
                {
                  testamento &&
                  testamento.map((data)=>{
                    return(
                      <option key={data.testamento_id}  value={data.testamento_nome}>
                        {data.testamento_nome}
                      </option>
                    )
                  })
                }
                <option aria-label="None" value="" />

              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">LIVRO</InputLabel>
              <Select
                native
                value={camposSelecionados.livro}
                onChange={(dados)=> {BuscaOpcoesSelecionadas("livro", dados.target.value)}}  
                input={<Input id="demo-dialog-native" />}
              >
                <option> {camposSelecionados.livro}</option>
                {
                  livro &&
                  livro.map((data)=>{
                    return(
                      <option key={data.livro_id} value={data.livro_nome}>
                        {data.livro_nome}
                      </option>
                    )
                  })
                }
                <option aria-label="None" value="" />

              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">CAPITULO</InputLabel>
              <Select
                native
                value={camposSelecionados.capitulo}
                onChange={(dados)=> setCamposSelecionados(prevStat => {
                  return {... prevStat, capitulo: dados.target.value}
                })}  
                input={<Input id="demo-dialog-native" />}
              >
                <option> {camposSelecionados.capitulo}</option>
                {
                  capitulo.renderiza_componente_option &&
                  capitulo.renderiza_componente_option
                }
                <option aria-label="None" value="" />

              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
