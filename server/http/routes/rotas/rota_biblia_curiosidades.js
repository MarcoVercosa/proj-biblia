// const Atendimento = require("../models/atendimentos")  // recebe a class Atendimento do Models
const AlteraDadosBD = require("../../../infrabd/curiosidade_harpa_bd")
const RotasCuriosidades = require("express").Router()
const LiberaOrigemRegistraLog = require("./midware/checkorigem")

// =========== CURIOSIDADES =================


RotasCuriosidades.get("/buscacuriosidade/:id", LiberaOrigemRegistraLog, (req, res) => {//busca curiosidades dado o nome do livro

    const palavra = req.params.id
    //console.log("/buscacuriosidade " + req.params.id)

    AlteraDadosBD.BuscaCuriosidade(palavra, res)


})


module.exports = RotasCuriosidades




