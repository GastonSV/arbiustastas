var Logger = require('./logger.js')

// El nombre default es 'Arbusta'
const name = process.argv.length > 2 ? process.argv[2] : 'Arbusta'
const times = process.argv.length > 3 ? process.argv[3] : 10

const logger = new Logger()

for (let i = 0; i < times; i++) {
 logger.print(`Hola ${name} por vez número ${i + 1}`)
}