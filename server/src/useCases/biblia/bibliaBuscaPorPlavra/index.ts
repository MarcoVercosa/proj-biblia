import { BibliaBuscaPorPalavraUseCase } from "./bibliaBuscaPorPalavraUseCase"
import { BibliaBuscaPorPalavraController } from "./bibliaBuscaPorPalavraController"
import { BibliaBuscaPorPalavraRepository } from "../../../repositories/biblia/bibliaBuscaPorPalavra/bibliaBuscaPorPalavraRepository"

let bibliaBuscaPorPalavraRepository = new BibliaBuscaPorPalavraRepository()
let bibliaBuscaPorPalavraUseCase = new BibliaBuscaPorPalavraUseCase(bibliaBuscaPorPalavraRepository)
let bibliaBuscaPorPalavraController = new BibliaBuscaPorPalavraController(bibliaBuscaPorPalavraUseCase)

export { bibliaBuscaPorPalavraController }