const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: opciones.base,
        limite: opciones.limite
    })
    .command('crear', 'Crea un archivo en el directorio ./tablas/ con la tabla de multiplicar', {
        base: opciones.base,
        limite: opciones.limite
    })
    .argv;

module.exports = { argv };