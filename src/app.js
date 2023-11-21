import express from 'express'
import productRouter  from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import ProductManager from './controllers/ProductManager.controller.js'
import Router from '/routes/views.router.js'

import { engine } from 'express-handlebars'
import __dirname from './util.js'
import * as path from 'path'
import { Server } from 'socket.io'

export const app = express()
const PORT = 8080;
const product = new ProductManager();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname + '/views'))

//Static
app.use('/', express.static(__dirname + '/public'))

const httpServer = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

const socketServer = new Server(httpServer)

socketServer.on('connection', async (socket) => {
    // console.log('a user connected');
  
    const products = await product.getProducts()
  
    socket.on('message', data =>{
      console.log(data)
    })
  
    socket.emit('products', products)
  });
  

// app.get('/', async (req, res) => {
//     const allProducts = await product.getProducts()
//     res.render('index',{
//         title:'Express Avanzado & Handlebars',
//         products : allProducts
//     })
// })

// app.get('/:id', async (req, res) => {
//     const prod = await product.getProductsById(req.params.id)
//     res.render('prod',{
//         title:'Express Avanzado & Handlebars',
//         products : prod
//     })
// })
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)

app.listen(PORT,()=>{
    console.log(`Server Express online in Port ${PORT}`)
})