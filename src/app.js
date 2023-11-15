import express from 'express'
import productRouter  from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'

const app = express()
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)

app.get('/', (req, res) => {
    res.status(200).send('Hello from Entrega1 of Carolina Contreras')
})

app.listen(PORT,()=>{
    console.log(`Server Express online in Port ${PORT}`)
})