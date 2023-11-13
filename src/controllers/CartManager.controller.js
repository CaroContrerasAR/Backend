import { promises as fs } from 'fs';
import { nanoid } from 'nanoid';
import ProductManager from './ProductManager.controller.js';

const productsAll = new  ProductManager

export class CartManager {

    constructor() {
        this.path = './src/models/carts.json'
        //this.products = [];
    }

    readCarts= async () => {
        let carts = await fs.readFile(this.path, 'utf-8')
        return JSON.parse(carts)
    };
    
    writeCarts= async (cart)=>{
        await fs.writeFile(this.path,JSON.stringify(cart))
    }

    exist = async(id) => {
        const carts = await this.readCarts()
        return carts.find(cart => cart.id === id)
    }

    addCarts = async (cartId,productId) =>{
        const cartsOld = await this.readCarts();
        const id = nanoid()
        const cartsConcat = [ {id : id, products : []}, ...cartsOld]
        await this.writeCarts(cartsConcat)
        return 'added Carts'
    }

    getCartsById = async (id) =>{
        const cartsById = await this.exist(id)
        if(!cartsById) return 'Cart Not found'
        return cartsById
    };

    addProductInCart = async (cartId, productId) => {
        const cartsById = await this.exist(cardId)
        if(!cartsById) return 'Cart Not found'
        const productById = await productsAll.exist(productId)
        if(!cartsById) return 'Product Not found'

        const cartAll = await this.readCarts()
        const cartFilter = cartAll.filter(prod => prod.id !== productId)
        const cartsConcat = [{id: cartId, products: [{id: productById, quantity: 1}]}, ...cartFilter];
        await this.writeCarts(cartsConcat)
        return 'Added Product in Carts'
    }

// updateCartById = async ({id, ...producto}) => {
//     await this.deleteCartById(id)
//     let cartOld = await this.readCart()
//     //console.log(productOld)
//     let cartsModif = [{...producto, id}, ...productOld]
//     await fs.writeFile(this.path,JSON.stringify(productsModif));
// }
// getCartById(cartId)
// updateCartById(CartId, newContent)
/* 
    leer el contenido completo del archivo (fs.promises.readfle)
    buscar el carrito por el campo id y sobreescribir al rarray products
    grabar TODO el array actualizado a archivo
    updateCartById usa findIndex(CartId) y reemplazan carts[index]=newContent
*/

}
export default CartManager