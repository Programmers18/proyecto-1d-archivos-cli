#!/usr/bin/env node

const shelljs = require('shelljs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

ficheroOK = filePath => {
    console.log(
        chalk.white.bgGreen.bold(
            `¡Muy bien! Archivo creado correctamente en directorio: ${filePath}`
        )
    );
}
const crearArchivo = (nombreArchivo, extension) => {
    const pathArchivo = `${process.cwd()}/${nombreArchivo}.${extension}`;
    shelljs.touch(pathArchivo);
    return pathArchivo;
};
const hacerPreguntas = () => {
    const preguntas = [
        {
            name: 'FICHERO',
            type: 'input',
            message: '¿Cómo se va llamar tu archivo? (sin las extensión)'
        },
        {
            name: 'EXTENSION',
            type: 'list',
            message: '¿Qué extensión tiene tu archivo?',
            choices: ['.rb', '.js', '.kt', '.java', '.ts', '.php'],
            filter: function(val) {
                return val.split('.')[1];
            }
        }
    ];
    return inquirer.prompt(preguntas);
};
const iniciar = () => {
    console.log(
        chalk.green(
            figlet.textSync('Crear Archivos', {
                font: 'Bubble',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );
};
const ejecutar = async () => {
    // Mostrar la información de la libreria en la cabecera, el titulo con figlet
    iniciar();
    // Preguntas necesarias para crear el archivo, el nombre y la extensión
    const respuestas = await hacerPreguntas();
    const { FICHERO, EXTENSION } = respuestas;
    console.log(respuestas);
    // Creamos el archivo
    const pathArchivo = crearArchivo(FICHERO, EXTENSION);
    // Añadimos mensaje que fichero se ha creado correctamente
    ficheroOK(pathArchivo);
}

ejecutar();