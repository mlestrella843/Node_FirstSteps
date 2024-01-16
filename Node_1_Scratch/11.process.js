//* guarda o presenta en un array desde el path desde donde se ha ejecutado node.
//* ademas del path del archivo ejecutado, 
//* y los argumentos entrados.

// console.log(process.argv);

// //* controlar el proceso y su salida
// process.exit();

// //* Podemos controlar eventos de un proceso
// process.on('exit', () => {
// })

//* Procesos como el current working directory.
process.cwd();
console.log(process.cwd());

//* procesos con variables de entorno, si se esta en ejecucion o produccion
console.log(process.env.NODE_ENV);
