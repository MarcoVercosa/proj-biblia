"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HinoHarpaTitulosUseCase = void 0;
class HinoHarpaTitulosUseCase {
    constructor(hinoHarpaTitulosRepository) {
        this.hinoHarpaTitulosRepository = hinoHarpaTitulosRepository;
    }
    Execute(numero) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado = yield this.hinoHarpaTitulosRepository.BuscaHinoPorNumero(numero);
            return resultado;
        });
    }
}
exports.HinoHarpaTitulosUseCase = HinoHarpaTitulosUseCase;
