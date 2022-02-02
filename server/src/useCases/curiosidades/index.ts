import { CuriosidadesUseCase } from "./curiosidadesUseCase";
import { CuriosidadesController } from "./curiosidadesController";
import { CuriosidadesRepository } from "../../repositories/curiosidades/curiosidadesRepository";

const curiosidadesRepository = new CuriosidadesRepository()
const curiosidadesUseCase = new CuriosidadesUseCase(curiosidadesRepository)
const curiosidadesController = new CuriosidadesController(curiosidadesUseCase)

export { curiosidadesUseCase, curiosidadesController }
