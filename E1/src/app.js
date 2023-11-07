import express from 'express'
//import productRouter  from './routes/product.routes.js'
//import cartRouter from './routes/cart.routes.js'

const PORT = 8080

const app = express()
app.use(express.urlencoded({ extended: true }))

// app.use('/api/product', productRouter)
// app.use('/api/cart', cartRouter)
const users = [
    { firstName: 'Carlos', lastName: 'Perren', age: 48, mail: 'cperren@gmail.com' },
    { firstName: 'Juan', lastName: 'Perez', age: 30, mail: 'jperez@gmail.com' },
    { firstName: 'Carolina', lastName: 'Perez', age: 28, mail: 'cperez@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('Hello from Entrega1 of Carolina Contreras')
})

app.get('/welcome', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenido en azul</h1>')
})

app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/userparams/:uid', (req, res) => {
    res.send(users[req.params.uid])
})

app.get('/userquery', (req, res) => {
    res.send(users[req.query.uid])
})


app.listen(PORT,()=>{
    console.log(`Server online in Port ${PORT}`)
})