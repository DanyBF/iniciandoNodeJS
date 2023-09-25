const fs = require('node:fs')
// A partir de node 16 se recomienda usar el "node:"
const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)
