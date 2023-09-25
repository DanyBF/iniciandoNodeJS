const fs = require('node:fs')

console.log('leyendo el primer archivo..')
// eslint-disable-next-line n/handle-callback-err
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log('primer texto ::: ', text)
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo..')
// eslint-disable-next-line n/handle-callback-err
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('leyendo el segundo texto: ', text)
})
