import { Router } from "express";
import CartManager from '../controllers/CartManager.controller.js'

const router = Router()
const carts = new CartManager();

router.post('/', async (req, res) => {
    try{
        res.status(200).send(await carts.addCarts() )                
    } catch(error){
        res.status(500).send({ err: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        res.status(200).send(await carts.readCarts())
    } catch (error) {
        res.status(500).send({ err: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        res.status(200).send( await carts.getCartsById(req.params.id))
    } catch (error) {
        res.status(500).send({ err: err.message })
    }
})

router.post('/:cid/product/:pid', async (req, res) => {
    try{
        const cartId = req.params.cid  //parseInt(req.params.cid)
        const productId = req.params.pid  //parseInt(req.params.pid)
        res.send (await carts.addProductInCart(cartId,productId))
        //const productInCart = await carts.addProductInCart(cartId,productId)
        //return res.status(200).json(productInCart)

    } catch (error) {
        res.status(500).send({ err: err.message })
    }
})

// router.post('/:cid/product/:pid/quantity/:qty', async (req, res) => {
//     try{
//         const cartId = req.params.cid
//         const productId = req.params.pid
//         const quantity = req.params.qty //undefined, cero da error
// //         paso1 llama asincrona al metodo getCatById(CartId)
// //         objeto con el Actual dal carrito (cart)        

//  //        paso 2:  armat objeto con el nuevo producto para el carrito
//  //        const newProduct = { id:productsId, quantity: quantity}    

//  //        paso 3:  actualiza carrito en (updateCartById) 

router.put('/:pid', async(req,res) => {
    const id = req.params.pid
    const updateCart = req.body
    res.status(200).send(await product.updateCart(id, updateCart))
})

router.delete('/:pid', async(req,res) => {
    const id = req.params.pid
    res.status(200).send(await product.deleteCart(id))
})

export default router
