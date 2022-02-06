import { HinoHarpaNumerosUseCase } from "./hinoHarpaNumerosUseCase";
import { HinoHarpaNumerosController } from "./hinoHarpaNumerosController";
import { HinoHarpaNumerosRepository } from "../../../repositories/hinoHarpa/hinoHarpaNumeros/hinoHarpaNumerosRepository";

const hinoharpaNumerosRepository = new HinoHarpaNumerosRepository()
const hinoHarpaNumerosUseCase = new HinoHarpaNumerosUseCase(hinoharpaNumerosRepository)
const hinoHarpaNumerosController = new HinoHarpaNumerosController(hinoHarpaNumerosUseCase)

export { hinoHarpaNumerosController } 