//addProductInCart(cartId,productId)

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