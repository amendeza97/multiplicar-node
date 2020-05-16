const fs = require('fs');
const colors = require('colors');

const rutaArchivo = './tablas/'
const nombreInicioArchivo = 'tabla'

const listarTabla = (base, limite) => {
    console.log(colors.green('==============================='));
    console.log(colors.blue(`Tabla del ${base}`));
    console.log(colors.green('==============================='));
    console.log(_buildTable(base, limite));
}

const _buildTable = (base, limite = 10) => {
    let tabla = ""
    for (let index = 0; index < limite; index++) {
        const multiplicador = index + 1;
        tabla += `${base} x ${multiplicador}  = ${base * multiplicador}\n`;
    }
    return tabla;
};

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject(`El dato ingresado ${base} no es un número`);
        }
        const data = _buildTable(base, limite);
        fs.writeFile(`${rutaArchivo}${nombreInicioArchivo}${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`${nombreInicioArchivo}${base}.txt`);
            }
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
};