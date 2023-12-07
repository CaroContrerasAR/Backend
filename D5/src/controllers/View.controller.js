import {getProductsS} from '../controllers/Product.controller.js'

export const viewHome = async (req,res) =>{
    const products = await getProductsS()
    res.render('home', {
        title:'Home',
        products: products
    })
}

export const viewRealTimeProduct = (req = request, res=response) =>{
    res.render('realTimeProducts', {
        title: 'Real Time Products'
    })
}