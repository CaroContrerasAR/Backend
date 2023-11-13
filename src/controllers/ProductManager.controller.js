import { promises as fs } from 'fs';
import { nanoid } from 'nanoid';

export class ProductManager {
    //static id = 0;
    
    constructor() {
        this.path = './src/models/products.json'
        this.products = [];
    }

    /*addProduct = async (product) => {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log('All fields are required');
            return;
        }
        const existingProduct = this.products.find(existingProduct => existingProduct.code === product.code);
        if (existingProduct) {
            console.log(`Code ${product.code} exists`);
            return;
        }
        const newProduct = {
            ...product,
            id: ProductManager.id
        };
        this.products.push(newProduct);
        ProductManager.id++;
        await fs.writeFile(this.path, JSON.stringify(this.products));

        return newProduct;
    };

    readProducts = async () => {
        try {
            const respuesta = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(respuesta);
        } catch (error) {
            return [];
        }
    };

    getProducts = async () => {
        let respuesta2 = await this.readProducts();
        return console.log(respuesta2);
    };

    getProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        if (!respuesta3.find(product => product.id === id)) {
            console.log('Product not found');
        } else {
            console.log(respuesta3.find(product => product.id === id));
        }
    };

    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id);
        await fs.writeFile(this.path, JSON.stringify(productFilter));
        console.log('Deleted products');
    };

    updateProducts = async ({ id, ...producto }) => {
        await this.deleteProductsById(id);
        let productOld = await this.readProducts();
        //console.log(productOld)
        let productsModif = [{ ...producto, id }, ...productOld];
        await fs.writeFile(this.path, JSON.stringify(productsModif));
    };*/
    
    readProducts= async () => {
        let products = await fs.readFile(this.path, 'utf-8')
        return JSON.parse(products)
    };
    
    writeProducts= async (product)=>{
        await fs.writeFile(this.path,JSON.stringify(product))
        
    }
    
    exist = async(id) => {
        const products = await this.readProducts()
        return products.find(prod => prod.id === id)
    }

    addProducts = async (product) =>{
        let productsOld = await this.readProducts()
        product.id = nanoid()
        let productAll = [...productsOld, product]
        await this.writeProducts(productAll)
        return "Producto Agregado"
    };

    getProducts = async () =>{
        return await this.readProducts()
    };

    getProductsById = async (id) =>{
        const productById = await this.exist(id)
        if(!productById) return 'Product Not found'
        return productById
    };

    
    updateProducts= async (id, product) => {
        const productById = await this.exist(id)
        if(!productById) return 'Product Not found'
        await this.deleteProducts(id)
        const productsOld = await this.readProducts()
        const products = [{...product, id: id}, ...productsOld]
        await this.writeProducts(products)
        return 'Updated product'
    }

    deleteProducts = async (id) => {
        const products = await this.readProducts()
        const existProducts = products.some(prod => prod.id === id)
        if (existProducts){
            const filterproducts = products.filter(prod => prod.id !== id)
            await this.writeProducts(filterproducts)
            return 'Deleted products'
        }
        return 'the product to be eliminated does not exist'
    }
}

export default ProductManager