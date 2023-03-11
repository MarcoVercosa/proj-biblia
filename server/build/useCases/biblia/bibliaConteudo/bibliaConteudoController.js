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
exports.BibliaConteudoController = void 0;
class BibliaConteudoController {
    constructor(bibliaConteudoUseCase) {
        this.bibliaConteudoUseCase = bibliaConteudoUseCase;
    }
    Handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let versao_id = Number(request.params.versao_id);
            let testamento_id = Number(request.params.testamento_id);
            let livro_id = Number(request.params.livro_id);
            let capitulo = Number(request.params.capitulo);
            try {
                let resultado = yield this.bibliaConteudoUseCase.Execute(versao_id, livro_id, testamento_id, capitulo);
                return response.status(200).json(resultado);
            }
            catch (err) {
                return response.status(400).json(err.message || "Internal error server");
            }
        });
    }
}
exports.BibliaConteudoController = BibliaConteudoController;
