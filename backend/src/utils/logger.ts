import {pino} from "pino";
import dayjs from "dayjs";

const logger = pino({
    transport:{
        target: "pino-pretty",  
        options: {
            colorize: true,
            ignore: "pid,hostname",
        }
    },
    timestamp: () => `,"time":"${dayjs().format('YYYY/MM/DD HH:mm:ss')}"`,
})

export default logger;