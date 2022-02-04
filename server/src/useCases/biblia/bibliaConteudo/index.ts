import { BibliaConteudoRepository } from "../../../repositories/biblia/bibliaConteudo/bibliaConteudoRepository";
import { BibliaConteudoUseCase } from "./bibliaConteudoUseCase";
import { BibliaConteudoController } from "./bibliaConteudoController";

let bibliaConteudoRepository = new BibliaConteudoRepository()
let bibliaConteudoUseCase = new BibliaConteudoUseCase(bibliaConteudoRepository)
let bibliaConteudoController = new BibliaConteudoController(bibliaConteudoUseCase)

export { bibliaConteudoController }