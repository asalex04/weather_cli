import http from "http";
import "dotenv/config.js";
import getArgs from "./helpers/args.js";
import {printError, printWeather} from "./services/log.service.js";

const API_KEY = process.env.ACCESS_KEY
const BASE_URL = process.env.BASE_URL

export const getForecast = async () => {
    const city = getArgs(process.argv)._[0]
    if (!city) {
        return printError("Не передан город")
    }
    console.log('waite...')

    const url = `${BASE_URL}current?access_key=${API_KEY}&query=${city}`

    http.get(url, (response) => {
        let res = ''
        response.on('data', (chunk) => {
            res += chunk
        })
        response.on('end', () => {
            printWeather(JSON.parse(res))
        })
    })
}
