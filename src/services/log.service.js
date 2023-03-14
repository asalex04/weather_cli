import chalk from 'chalk'

export const printError = (error) => {
    console.log(`${chalk.red('ERROR:')} ${error}`)
}

export const printWeather = (res) => {
    const {
        temperature, weather_descriptions, wind_speed, humidity, pressure
    } = res.current
    console.log(
        `${chalk.yellow('WEATHER')} Погода в городе ${res.location.name}
        ${weather_descriptions[0]}
        Температура: ${temperature} C,
        Влажность: ${humidity} %
        Давление: ${pressure * 0.75} мм.рт.ст
        Скорость ветра: ${(wind_speed * 10 / 36).toFixed(1)} м/с
        `
    )
}