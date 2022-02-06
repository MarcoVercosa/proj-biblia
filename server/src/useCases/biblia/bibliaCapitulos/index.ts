import { BibliaCapitulosUseCase } from "./bibliaCapitulosUseCase"
import { BibliaCapitulosController } from "./bibliaCapitulosController"
import { BibliaCapitulosRepository } from "../../../repositories/biblia/bibliaCapitulos/bibliaCapitulosRepository"

let bibliaCapitulosRepository = new BibliaCapitulosRepository()
let bibliaCapitulosUseCase = new BibliaCapitulosUseCase(bibliaCapitulosRepository)
let bibliaCapitulosController = new BibliaCapitulosController(bibliaCapitulosUseCase)

export { bibliaCapitulosController }