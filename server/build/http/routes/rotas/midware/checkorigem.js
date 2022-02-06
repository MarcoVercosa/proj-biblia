"use strict";
//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiberaOrigemRegistraLog = void 0;
const fs_1 = __importDefault(require("fs"));
function LiberaOrigemRegistraLog(request, response, next) {
    const origem = request.headers.origin || "indefinido";
    console.log(origem);
    if (origem.match(/vidadafonte.com.br/) || origem.match(/localhost/) && request.method === "GET") {
        // if (origem.match(/vidadafonte.com.br/) && req.method === "GET") {
        //se conter :vidadafonte.com.br na origem solicitante ou localhost e for do método get
        let now = new Date;
        fs_1.default.appendFile("./logs.txt", `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}-- ${now.getHours()} horas e ${now.getMinutes()} minutos => LIBERADO acesso da origem
         - ${request.headers.origin} com o método - ${request.method} na rota - ${request.originalUrl}\n`, (err) => {
            if (err) {
                console.log("Houve algum erro ao escrever o log" + err);
            }
        });
        next();
    }
    else {
        let now = new Date;
        fs_1.default.appendFile("./logs.txt", `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} -- ${now.getHours()}horas e ${now.getMinutes()} minutos => NEGADO acesso da origem
         - ${request.headers.origin} com o método - ${request.method}  na rota - ${request.originalUrl}\n`, (err) => {
            if (err) {
                console.log("Houve algum erro ao escrever o log" + err);
            }
        });
        response.status(403).send("Não permitido");
    }
}
exports.LiberaOrigemRegistraLog = LiberaOrigemRegistraLog;
