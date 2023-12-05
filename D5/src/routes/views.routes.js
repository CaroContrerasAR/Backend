import { Router } from "express";
import ProductManager from '../controllers/ProductManager.controller.js'

const router = Router()

const product = new ProductManager();

router.get('/', async(req,res) => {
    try {
        const allProducts = await product.getProducts()
        res.status(200).render('home',{
                    title:'Home',
                    products : allProducts
        })
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
})

router.get('/realTimeProduct', async (req, res) => {
    try{
        res.status(200).render('realTimeProducts', {
            title: 'Real Time Products'
        })
    } catch(err){
        res.status(500).send({ err: err.message })
    }
})

export default router
