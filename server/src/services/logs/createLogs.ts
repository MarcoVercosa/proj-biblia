import winston from 'winston'
const { combine, timestamp, json, printf } = winston.format;

const errorFilter = winston.format((info, opts) => {
    return info.level === 'error' ? info : false;
});
const warnFilter = winston.format((info, opts) => {
    return info.level === 'warn' ? info : false;
});

const infoFilter = winston.format((info, opts) => {
    return info.level === 'info' ? info : false;
});
const httpFilter = winston.format((info, opts) => {
    return info.level === 'http' ? info : false;
});
const alertFilter = winston.format((info, opts) => {
    return info.level === 'alert' ? info : false;
});
const verboseFilter = winston.format((info, opts) => {
    return info.level === 'verbose' ? info : false;
});


let transports: Array<any> = []
let pathLogs = process.env.NODE_ENV == "production" ? `${__dirname}/../../../logs/production` : `${__dirname}/../../../logs/development`

let Printf = printf(
    (info) => `{"level":"${info.level}","message": ${JSON.stringify(info.message)},"Date":"${info.timestamp}"}`
)

// if (process.env.NODE_ENV == 'production') {
transports = [
    new winston.transports.File({
        filename: `${pathLogs}/error.log`, level: 'error',
        format: combine(errorFilter(),
            timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            Printf
        ),
    }),
    new winston.transports.File({
        filename: `${pathLogs}/warn.log`, level: 'warn',
        format: combine(warnFilter(),
            timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            Printf
        ),
    }),
    new winston.transports.File({
        filename: `${pathLogs}/info.log`, level: 'info',
        format: combine(infoFilter(),
            timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            Printf
        ),
    }),
    new winston.transports.File({
        filename: `${pathLogs}/http.log`, level: 'http',
        format: combine(httpFilter(),
            timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            Printf
        ),
    }),
    new winston.transports.File({
        filename: `${pathLogs}/alert.log`, level: 'alert',
        format: combine(alertFilter(),
            timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            Printf
        ),
    }),
    new winston.transports.File({
        filename: `${pathLogs}/verbose.log`, level: 'verbose',
        format: combine(verboseFilter(),
            timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            Printf
        ),
    })
]



const Logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
        timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        json(),
        Printf
    ),
    transports
});

export { Logger }