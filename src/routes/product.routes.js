import { Router } from "express";
import ProductManager from '../controllers/ProductManager.controller.js'

const router = Router()
const product = new ProductManager();

router.get('/', async(req,res) => {
    try {
        res.status(200).send(await product.getProducts())
    } catch (error) {
        res.status(500).send({ err: err.message })
    }
})

router.get('/:pid', async(req,res) => {
    try {
        const id = req.params.pid
        res.status(200).send(await product.getProductsById(id))
    } catch (error) {
        res.status(500).send({ err: err.message })
    }
})

router.post("/", async(req,res) => {
    try {
        const newProduct = req.body
        return res.status(200).send(await product.addProducts(newProduct))
    } catch (error) {
        res.status(500).send({ err: err.message })
    }
})

router.put('/:pid', async(req,res) => {
    try {
        const id = req.params.pid
        const updateProduct = req.body
        res.status(200).send(await product.updateProducts(id, updateProduct))
    } catch (error) {
        res.status(500).send({ err: err.message })
    }
})

router.delete('/:pid', async(req,res) => {
    try {
        const id = req.params.pid
        res.status(200).send(await product.deleteProducts(id))
    } catch (error) {
        res.status(500).send({ err: err.message })
    }
})

// router.get('/',)

// router.get('/:pid', async(req,res)=>{
//     //getproductById()
//     res.send([req.params.pid])
// })

// router.post('/', async (req, res) => {
//     try{
//         const productId = parseInt(req.params.pid)
//         const product = await ProductManager.addProduct(p)

//         return res.status(200).json(productInCart)

//     } catch(err){
//         res.status(500).send({ err: err.message })
//     }
// })

// router.put('/', async (req, res) => {
//     try{
//         //const product = await ProductManager.addProduct(p)
//         return res.status(200).json(productInCart)

//     } catch(err){
//         res.status(500).send({ err: err.message })
//     }
// })

// router.delete('/', async (req, res) => {
//     try{
//         //const product = await ProductManager.eleteProductsById(id)
//         return res.status(200).send({})

//     } catch(err){
//         res.status(500).send({ err: err.message })
//     }
// })

export default router
