import { DadosIAUseCase } from "./dadosIAUseCase"
import { DadosIAController } from "./dadosIAController"

const dadosIAUseCase = new DadosIAUseCase()
const dadosIAController = new DadosIAController(dadosIAUseCase)

export { dadosIAController } 