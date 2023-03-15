import OS from "os"
import cluster from "cluster"
import { Logger } from "./services/logs/createLogs"
import { StartServer } from "./http"

function RunPrimaryProcess() {

    let cpus: number = process.env.NODE_ENV == "production" ? OS.cpus().length - 1 : 4
    //if environment is a not production, use only 4 core of CPU (my pc)

    for (let index = 0; index < cpus; index++) {
        Logger.warn(`${process.pid} is started`)
        cluster.fork()
    }
    cluster.on("exit", (worker, code, signal) => {
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            //se o processo finalizou com err e não foi o S.O que o desconectou, gere uma nova copia
            Logger.warn(` Worker ${worker.process.pid} - code ${code} Signal ${signal} died. Scheduling another process`)
            cluster.fork()
        }
    })
}

async function RunWorkerProcess() {
    StartServer()
    // for each cluster.fork() above, a new server instance will be created calling the function StartServer()
}
cluster.isPrimary ? RunPrimaryProcess() : RunWorkerProcess()
// if there is not process  running, so make one process for each cpu , else only one process