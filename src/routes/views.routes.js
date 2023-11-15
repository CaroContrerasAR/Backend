import { Router } from "express";
import ProductManager from '../controllers/ProductManager.controller.js'

const router = Router()

const product = new ProductManager();

router.get('/', async(req,res) => {
    try {
        res.status(200).send(await product.getProducts())
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
})

export default router
