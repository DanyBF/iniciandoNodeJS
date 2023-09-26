const http = require('node:http') // protocolo HTTP

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

server.listen(0, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  )
})
