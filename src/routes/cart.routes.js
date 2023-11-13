import { Router } from "express";
import CartManager from '../controllers/CartManager.controller.js'

const router = Router()
const cart = new CartManager();

router.post('/',)
//id = q products
//products= []

router.get('/:cid', async(req,res)=>{
    //getCartById()
    res.send([req.params.pid])
})

router.post('/:cid/product/:pid', async (req, res) => {
    try{
        const cartId = parseInt(req.params.cid)
        const productId = parseInt(req.params.pid)
        const productInCart = await CartManager.addProductInCart(cartId,productId)

        return res.status(200).json(productInCart)

    } catch(err){
        return console.error(err)
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




router.put('/',)

router.delete('/',)
