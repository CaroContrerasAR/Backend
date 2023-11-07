import express from 'express'
import ProductManager from './ProductManager.js'
import products from './products.json'

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/products', (req, res) => {
    try{
        const limit = parseInt(req.query.limit)

        if (!limit) {
            
            res.status(400).send({ err: 'query: must be a number' })
        } else {
            const pm = new ProductManager()
            res.status(200).json(pm.getProducts()).slice(0,limit)
        }
    } catch(err){
        res.status(500).json({ err: err.message })
    }
})
  
app.get('/products/:pid',(req, res)=>{
    
    const id= parseInt(req.params.pid);

    try{
        const pm = new ProductManager().getProductById(id);
        res.status(200).json(pm);
    }
    catch(err){
        res.status(404).send(err.message);
    }
})


app.listen(PORT, () => {
    console.log(`Server Express online in Port ${PORT}`)
})