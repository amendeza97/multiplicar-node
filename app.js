const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(
                nombreArchivo => console.log('Se creó el archivo', colors.blue(nombreArchivo))
                //nombreArchivo => console.log(`Se creó el archivo ${nombreArchivo}`)
            )
            .catch(
                error => console.log(`Error: ${error}`)
            );
        break;
    default:
        console.log('Comando no encontrado');
        break;
}