import { HinoHarpaBuscaPorPalavraRepository } from "../../../repositories/hinoHarpa/hinoHarpaBuscaPorPalavra/hinoHarpaBuscaPorPalavraRepository"
import { HinoHarpaBuscaPorPalavraUseCase } from "./hinoHarpaBuscaPorPalavraUseCase"
import { HinoHarpaBuscaPorPalavraController } from "./hinoHarpaBuscaPorPalavraController"

const hinoHarpaBuscaPorPalavraRepository = new HinoHarpaBuscaPorPalavraRepository()
const hinoHarpaBuscaPorPalavraUseCase = new HinoHarpaBuscaPorPalavraUseCase(hinoHarpaBuscaPorPalavraRepository)
const hinoHarpaBuscaPorPalavraController = new HinoHarpaBuscaPorPalavraController(hinoHarpaBuscaPorPalavraUseCase)

export { hinoHarpaBuscaPorPalavraController } 