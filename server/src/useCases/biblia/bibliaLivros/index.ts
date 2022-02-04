import { BibliaLivrosRepository } from "../../../repositories/biblia/bibliaLivros/bibliaLivrosRepository";
import { BibliaLivrosUseCase } from "./bibliaLivrosUseCase";
import { BibliaLivrosController } from "./bibliaLivrosController";

let bibliaLivrosRepository = new BibliaLivrosRepository()
let bibliaLivrosUseCase = new BibliaLivrosUseCase(bibliaLivrosRepository)
let bibliaLivrosController = new BibliaLivrosController(bibliaLivrosUseCase)

export { bibliaLivrosController }