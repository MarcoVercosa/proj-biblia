"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bibliaLivrosController = void 0;
const bibliaLivrosRepository_1 = require("../../../repositories/biblia/bibliaLivros/bibliaLivrosRepository");
const bibliaLivrosUseCase_1 = require("./bibliaLivrosUseCase");
const bibliaLivrosController_1 = require("./bibliaLivrosController");
let bibliaLivrosRepository = new bibliaLivrosRepository_1.BibliaLivrosRepository();
let bibliaLivrosUseCase = new bibliaLivrosUseCase_1.BibliaLivrosUseCase(bibliaLivrosRepository);
let bibliaLivrosController = new bibliaLivrosController_1.BibliaLivrosController(bibliaLivrosUseCase);
exports.bibliaLivrosController = bibliaLivrosController;
