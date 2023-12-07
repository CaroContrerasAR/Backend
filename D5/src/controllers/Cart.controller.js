import CartManager from "../controllers/CartManager.controller.js"

const cartManager = new CartManager('/models/cart.json', '/models/products.json')

export const createNewCartS = async ()=>{
    try {
        const newCart = await cartManager.createNewCartManager()
        if(!newCart) throw {name: 'server error', httpcode: 500, description: 'Error en crear producto nuevo service'}
        return newCart
    } catch (error) {
        throw error
    }
}

export const getCartByIdS = async (cid)=>{
    try {
        const cart = cartManager.getCartByIdManager(Number(cid))
        if(!cart) throw {name: 'client error', httpcode: 404, description: 'Cart not found service'}
        return cart
    } catch (error) {
        throw error
    }
}

export const setProductIntoCartS = async (cid, pid)=>{
    try {
        const data = await cartManager.setProductIntoCartManager(cid, pid)
        return data
    } catch (error) {
        throw error
    }
}