import { BibliaTestamentoRepository } from "../../../repositories/biblia/bibliaTestamento/bibliaTestamentoRepository"
import { BibliaTestamentoUseCase } from "./bibliaTestamentoUseCase"
import { BibliaTestamentoController } from "./bibliaTestamentoController"

let bibliaTestamentoRepository = new BibliaTestamentoRepository()
let bibliaTestamentoUseCase = new BibliaTestamentoUseCase(bibliaTestamentoRepository)
let bibliaTestamentoController = new BibliaTestamentoController(bibliaTestamentoUseCase)

export { bibliaTestamentoController } 