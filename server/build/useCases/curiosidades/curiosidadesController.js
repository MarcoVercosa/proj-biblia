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
exports.CuriosidadesController = void 0;
class CuriosidadesController {
    constructor(curiosodadesHarpaUseCase) {
        this.curiosodadesHarpaUseCase = curiosodadesHarpaUseCase;
    }
    Handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const palavra = request.params.id;
            try {
                let resultado = yield this.curiosodadesHarpaUseCase.Execute(palavra);
                return response.status(200).json(resultado);
            }
            catch (err) {
                return response.status(400).json({
                    message: err.message || 'Unexpected error.'
                });
            }
        });
    }
}
exports.CuriosidadesController = CuriosidadesController;
