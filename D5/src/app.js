import express from 'express'//
import { Server } from 'socket.io'
import { engine } from 'express-handlebars'

import productRouter  from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import viewRouter from './routes/views.routes.js'

import ProductManager from './controllers/ProductManager.controller.js'

import __dirname from './util.js'
import * as path from 'path'

const product = new ProductManager();
const PORT = 8080;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//Static
app.use('/', express.static(__dirname + '/public'))

//Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname + '/views'))

app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/', viewRouter)

const httpServer = app.listen(PORT, ( ) => {
    console.log(`Server SIO Online in Port ${PORT}`)
})
const socketServer = new Server(httpServer)

app.set('socketServer', socketServer)

socketServer.on('connection', async (socket) => {
    // console.log('a user connected');
  
    const products = await product.getProducts()
  
    socket.on('message', data =>{
      console.log(data)
    })
  
    socket.emit('products', products)
  });

// app.listen(PORT,()=>{
//     console.log(`Server Express online in Port ${PORT}`)
// })