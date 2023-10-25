import {promises as fs} from 'fs'

class ProductManager{
    static id = 0
    
    constructor(path){
        this.path =path
        this.products = []
    }
    
    addProduct = async (product) => {
        if(!product.title||!product.description||!product.price||!product.thumbnail||!product.code||!product.stock){
            console.log('All fields are required')
            return;
        }
        // const existingProduct = this.products.find(existingProduct=>existingProduct.code === product.code)
        // if(existingProduct){
        //     console.log(`Code ${product.code} exists`)
        //     return;
        // }
        const newProduct ={     
            ...product,
            id: ProductManager.id
        }
        this.products.push(newProduct);
        ProductManager.id++;
        //console.log('adding products..');
        await fs.writeFile(this.path,JSON.stringify(this.products));

    }
    
    readProducts = async () => {
        try{
            const respuesta = await fs.readFile(this.path,'utf-8');
            return JSON.parse(respuesta)
        } catch (error){
            return [];
        }
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
    }

    getProductsById = async (id) => {
        let respuesta3 = await this.readProducts()
        if(!respuesta3.find(product => product.id === id)){
            console.log('Product not found')
        }else {
            console.log(respuesta3.find(product => product.id === id))
        }
    }

    deleteProductsById = async(id) =>{
        let respuesta3 = await this.readProducts()
        let productFilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.path,JSON.stringify(productFilter));
        console.log('Deleted products')
    }

    updateProducts = async ({id, ...producto}) => {
        await this.deleteProductsById(id)
        let productOld = await this.readProducts()
        //console.log(productOld)
        let productsModif = [{...producto, id}, ...productOld]
        await fs.writeFile(this.path,JSON.stringify(productsModif));
    }
}

const productos = new ProductManager('./products.json')

productos.addProduct({
    title:'first product',
    description:'description of product1',
    price:150.30,
    thumbnail:'ruta/image1.jpg',
    code:'P123',
    stock:50})
productos.addProduct({
    title:'second product',
    description:'description of product2',
    price:235.20,
    thumbnail:'ruta/image2.jpg',
    code:'P124',
    stock:40})
productos.addProduct({
    title:'third product',
    description:'description of product3',
    price:250.80,
    thumbnail: 'ruta/image3.jpg',
    code:'P125',
    stock:30})
//muestro los productos    
productos.getProducts()

// productos.getProductsById(2)
// productos.getProductsById(4)

//productos.deleteProductsById(2)

// productos.updateProducts({
//     title: 'title of product3',
//     description: 'description product3',
//     price: 1400.80, //cambio precio
//     thumbnail: 'ruta/image3.jpg',
//     code: 'P125',
//     stock: 30,
//     id: 3
// })