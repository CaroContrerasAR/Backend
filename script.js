import fs from 'fs'

class ProductManager{
    static id = 0;
    
    constructor(path){
        this.path= path
        this.products = []
    }

    async addProduct (product){
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
        await fs.promises.writeFile(this.path, JSON.stringify([...this.products]))
        console.log('adding products..');

    }

    async getProduct(){
        const data = await fs.promises.readFile(this.path,'utf-8')
        let parsedData = JSON.parse(data);
        return parsedData
    }

    async getProductById(id){
        const data = await fs.promises.readFile(this.path,'utf-8')
        const parsedData = JSON.parse(data)
        const idFinded = parsedData.find((producto)=> producto.id === id)
        //find devuelve undefined si no encuentra algo

        //devolver un objeto
        !idFinded? console.log(`Id (${id}), Product Not Found`): console.log(`Product Id (${id}) Found:`,idFinded)
    }

    //argumentos de  2 parametros: id , objeto o campo en particular
    async updateProduct(id, newData){
        const data = await fs.promises.readFile(this.path,'utf-8')
        const parsedData = JSON.parse(data)
        const oldData = parsedData.findIndex((producto)=> producto.id === id)
    //findIndex devuelve -1 si no encuentra algo, por lo tanto si findIndex devuelve algo distinto a -1 se actualiza
        oldData !== -1? productos[oldData]=newData:console.log("--not found--")

        await fs.promises.writeFile(this.path, JSON.stringify(productos))
    }

    async deleteProduct(id){
    const data = await fs.promises.readFile(this.path,'utf-8')
        const parsedData = JSON.parse(data)
        const oldData = parsedData.findIndex((producto)=> producto.id === id)
    //findIndex devuelve -1 si no encuentra algo, por lo tanto si findIndex devuelve algo distinto a -1 se actualiza
        if(oldData !== -1)productos.splice(oldData,1)
        await fs.promises.writeFile(this.path, JSON.stringify(productos))
    }
}


const productos = new ProductManager('./products.json')
//mostrar arreglo vacio
console.log(productos.getProduct()); 

//agrego productos
productos.addProduct({
    title:'first product',
    description:'description of product1',
    price:150.30,
    thumbnail:'ruta/image1.jpg',
    code:'P123',
    stock:50});
productos.addProduct({
    title:'second product',
    description:'description of product2',
    price:235.20,
    thumbnail:'ruta/image2.jpg',
    code:'P124',
    stock:40});
//Muestro productos agregados:
console.log('Products List:',productos.getProduct());

//Busco por Id
productos.getProductById(0);
productos.getProductById(2);

//probar si CODE repite:
/*productos.addProduct({
    title:'third product',
    description:'description of product3',
    price:250.80,
    thumbnail: 'ruta/image3.jpg',
    code:'P124',
    stock:30});
console.log(productos.getProduct())*/

productos.updateProduct(1, {
    title:'third product',
    description:'description of product3',
    price:250.80,
    thumbnail: 'ruta/image3.jpg',
    code:'P125',
    stock:30});
console.log(productos.getProduct())