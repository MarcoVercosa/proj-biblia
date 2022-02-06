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
exports.BibliaCapitulosController = void 0;
class BibliaCapitulosController {
    constructor(bibliaCapitulosUseCase) {
        this.bibliaCapitulosUseCase = bibliaCapitulosUseCase;
    }
    Handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let versao_id = parseInt(request.params.versao_id);
            let livro_id = parseInt(request.params.livro_id);
            try {
                let resultado = yield this.bibliaCapitulosUseCase.Execute(versao_id, livro_id);
                return response.status(200).json(resultado);
            }
            catch (err) {
                return response.status(400).json(err.message);
            }
        });
    }
}
exports.BibliaCapitulosController = BibliaCapitulosController;
