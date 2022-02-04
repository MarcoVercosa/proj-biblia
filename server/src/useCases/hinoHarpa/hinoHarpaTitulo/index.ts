import { HinoHarpaTitulosUseCase } from "./hinoHarpaTitulosUseCase";
import { HinoHarpaTitulosController } from "./hinoHarpaTitulosController"
import { HinoHarpaTitulosRepository } from "../../../repositories/hinoHarpa/hinoHarpaTitulos/hinoHarpaTitulosRepository";

const hinoharpaTitulosRepository = new HinoHarpaTitulosRepository()
const hinoHarpaTitulosUseCase = new HinoHarpaTitulosUseCase(hinoharpaTitulosRepository)
const hinoHarpaTitulosController = new HinoHarpaTitulosController(hinoHarpaTitulosUseCase)

export { hinoHarpaTitulosController } 