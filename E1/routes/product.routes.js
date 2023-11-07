import { Router } from "express";

const router = Router()

router.get('/',)

router.get('/:pid', async(req,res)=>{
    //getproductById()
    res.send([req.params.pid])
})

router.post('/',)

router.put('/',)

router.delete('/',)

