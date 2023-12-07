import ProductManager from "./ProductManager.controller.js"

const product = new ProductManager()

export const getProductsS = async (limit)=>{
    try {
        const products = await product.getProducts()
        if(products.length <= 0) throw {name: 'db error', httpcode: 500, description: 'Products- not found'}
        if(limit){
            const limited = products.slice(0, limit)
            return limited
        }
        return products
    } catch (error) {
        throw error
    }
}


export const getProductByIdS = async (id)=>{
    try {
        const product = await product.getProductsById(Number(id))
        if(!product) throw {name: 'client error', httpcode: 404, description: 'Product- not found'}
        return product
    } catch (error) {
        throw error
    }
}

export const setNewProductS = async (title, description, code, price, stock, category)=>{
    try {
        const product = await product.addProduct(title, description, code, price, stock, category)
        if(!product) throw {name: 'client error', httpcode: 404, description: 'Error creating new product-'}
        return product
    } catch (error) {
        throw error
    }
}

export const updateProductS = async (id, newData)=>{
    try {
        const updateProduct = await product.updateProducts(id, newData)
        if(updateProduct.length <= 0) throw {name: 'client error', httpcode: 500, description: 'Error updating product-'}
        return updateProduct
    } catch (error) {
        throw error
    }
}

export const deleteProductS = async (id)=>{
    try {
        const deleteProduct = await product.deleteProducts(id)
        return deleteProduct
    } catch (error) {
        throw error
    }
}