import { BibliaVersaoRepository } from "../../../repositories/biblia/bibliaVersao/bibliaVersaoRepository";
import { BibliaVersaoUseCase } from "./bibliaVersaoUseCase";
import { BibliaVersaoController } from "./bibliaVersaoController";

let bibliaVersaoRepository = new BibliaVersaoRepository()
let bibliaVersaoUseCase = new BibliaVersaoUseCase(bibliaVersaoRepository)
let bibliaVersaoController = new BibliaVersaoController(bibliaVersaoUseCase)

export { bibliaVersaoController } 