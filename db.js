const jsonServer = require('json-server')
const server = jsonServer.create()
require('dotenv').config()

const router = jsonServer.router('./json/cargo.json')
const routerFlight = jsonServer.router('./json/air.json')
const routerUser = jsonServer.router('./json/user.json')
const middleware = jsonServer.defaults()
const PORT = process.env.PORT || 3000

server.use(middleware)
server.use('/data',router)
server.use('/flight',routerFlight)
server.use('/user',routerUser)
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
