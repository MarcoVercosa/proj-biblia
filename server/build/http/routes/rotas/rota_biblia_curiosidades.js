"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotaCuriosidades = void 0;
const express_1 = require("express");
const checkorigem_1 = require("./midware/checkorigem");
const index_1 = require("../../../useCases/curiosidades/index");
// =========== CURIOSIDADES =================
let RotaCuriosidades = (0, express_1.Router)();
exports.RotaCuriosidades = RotaCuriosidades;
RotaCuriosidades.get("/buscacuriosidade/:id", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => {
    index_1.curiosidadesController.Handle(request, response);
});
