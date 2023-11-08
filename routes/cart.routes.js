import { Router } from "express";

const router = Router()

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
//id = q products
//products= []
///api/carts/1/products/5 en el carrito1 agregar el producto 5

router.put('/',)

router.delete('/',)
