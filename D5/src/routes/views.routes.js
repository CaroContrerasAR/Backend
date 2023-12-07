import { Router } from "express";
import { viewHome, viewRealTimeProduct} from '../controllers/View.controller.js'

const router = Router()

router.get('/', viewHome)
// router.get('/', async(req,res) => {
//     try {
//         const allProducts = await product.getProductsS( )
//         res.status(200).render('home',{
//                     title:'Home',
//                     products : allProducts
//         })
//     } catch (err) {
//         res.status(500).send({ err: err.message })
//     }
// })

router.get('/realTimeProduct', viewRealTimeProduct)
// router.get('/realTimeProduct', async (req, res) => {
//     try{
//         res.status(200).render('realTimeProducts', {
//             title: 'Real Time Products'
//         })
//     } catch(err){
//         res.status(500).send({ err: err.message })
//     }
// })

export default router
