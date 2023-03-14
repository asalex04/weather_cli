import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const getArgs = () => {
    const { argv } = yargs(hideBin(process.argv))
        .scriptName('weather')
        .example(
            '$0 Moscow ',
            'Returns the current weather in Moscow',
        )
        .option('h', { alias: 'help', describe: ('Show help.') })
        .alias('version', 'v')
        .epilog('copyright 2023');
    return argv
}
export default getArgs