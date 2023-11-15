import express from 'express'
import productRouter  from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'

import { engine } from 'express-handlebars'
import __dirname from './util.js'
import * as path from 'path'

const app = express()
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname + '/views'))

app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)

// app.get('/', (req, res) => {
//     //res.status(200).send('Desafio Handlebars y Websocket by Carolina Contreras')
//     res.render('home',{
//         title:'Backend / Handlebars',
//     })
// })


app.listen(PORT,()=>{
    console.log(`Server Express online in Port ${PORT}`)
})