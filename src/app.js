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
/*const users = [
    { firstName: 'Carlos', lastName: 'Perren', age: 48, mail: 'cperren@gmail.com' },
    { firstName: 'Juan', lastName: 'Perez', age: 30, mail: 'jperez@gmail.com' },
    { firstName: 'Carolina', lastName: 'Perez', age: 28, mail: 'cperez@gmail.com' }
]
app.get('/', (req, res) => {
    res.status(200).send('Hello from Entrega1 of Carolina Contreras')
})

app.get('/welcome', (req, res) => {
    res.status(200).send('<h1 style="color: blue">Bienvenido en azul</h1>')
})

app.get('/users', (req, res) => {
    res.status(200).send(users)
})
app.get('/userparams/:uid', (req, res) => {
    res.status(200).send(users[req.params.uid])
})  //http://localhost:8080/userparams/0

app.get('/userquery', (req, res) => {
    res.status(200).send(users[req.query.uid])
}) //http://localhost:8080/userquery?uid=2
*/

app.listen(PORT,()=>{
    console.log(`Server Express online in Port ${PORT}`)
})