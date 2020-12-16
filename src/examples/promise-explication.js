/*
1 - ¿Qué es una promesa?
Es un objeto que representa la terminación 
o el fracaso de una operación asíncrona
*/

const p1 = Promise.resolve(2);
console.log('Promesa normal -> ' + p1);
/*
¿Cómo accedo a los valores de una promesa ?
    - con .then(...)
*/

/*Pasándo directamente la variable*/
p1.then(value => value * 5).then(value =>
  console.log(
    'Valor de la promesa multiplicado por 5 con variable -> ' + value,
  ),
);

/*Pasándolo como función*/
const sum = number => number * 5;
p1.then(value => sum(value)).then(value =>
  console.log('Valor de la promesa multiplicado por 5 con función -> ' + value),
); /*Buscar datos en Api [simulación de la refactorización que nos pide Carlos]*/ //después entra otra vez y la próxima vez a la función.

/*
¿Cómo devuelvo una promesa dentro de otra pormesa?
*/
/*p1.then(value => value * 5).then(value =>
  Promise.resolve(value * 5).then(value =>
    console.log('Promesa dentro de promesa ->' + value),
  ),
);*/

/*
¿Cómo controlo los fallos en las promesas?
    - rechazando la promesa con reject, y un catch
*/
/*p1.then(value => value * 5).then(value =>
  Promise.resolve(value * 5).then(_ =>
    Promise.reject('Error! algo salió mal bro!')
      .then(_ => console.log('NUNCA LLEGARÁ AQUÍ.'))
      .catch(err => console.log(err)),
  ),
);*/

/*
PROMESAS ASÍNCRONAS
*/
/*const delayed = value =>
  new Promise((resolve, rject) => setTimeout(() => resolve(value), 900));*/

/*delayed(7) //ejecutamos delaye con 7
  .then(value => {
    //retornamos el 7
    console.log('Primera vez ->' + value);
    return delayed(value + 7);
  })
  .then(value => console.log('Tercera vez ->' + value))
  .then(_ => Promise.reject('Rechazado ;('))
  .catch(err => console.log(err));*/

//Con esto nos deja disponible de forma global la API de fetch

/*require('isomorphic-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(value => value.json())
  .then(value => console.log(value));*/
