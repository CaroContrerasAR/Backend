import { Router } from "express";

const router = Router()

router.get('/',)

router.get('/:pid', async(req,res)=>{
    //getproductById()
    res.send([req.params.pid])
})

router.post('/', async (req, res) => {
    try{
        const productId = parseInt(req.params.pid)
        const product = await ProductManager.addProduct(p)

        return res.status(200).json(productInCart)

    } catch(err){
        return console.error(err)
    }
})

router.put('/',)

router.delete('/',)

