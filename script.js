class ProductManager{
    static id = 0;
    
    constructor(){
        this.products = []
    }

    addProduct (product){
        if(!product.title||!product.description||!product.price||!product.thumbnail||!product.code||!product.stock){
            console.log('All fields are required')
            return;
        }
        const existingProduct = this.products.find(existingProduct=>existingProduct.code === product.code)
        if(existingProduct){
            console.log(`Code ${product.code} exists`)
            return;
        }
        const newProduct ={     
            ...product,
            id: ProductManager.id
        }
        this.products.push(newProduct);
        ProductManager.id++;
        console.log('adding products..');

    }

    getProduct(){
        return this.products;
    }

    existe (id){
        return this.products.find((producto)=> producto.id === id)
    }

    getProductById(id){
        !this.existe(id)? console.log(`Id (${id}), Product Not Found`): console.log(`Product Id (${id}) Found:`,this.existe(id))
    }
}

const productos = new ProductManager()
//mostrar arreglo vacio
console.log(productos.getProduct())

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
productos.addProduct({
    title:'third product',
    description:'description of product3',
    price:250.80,
    thumbnail: 'ruta/image3.jpg',
    code:'P124',
    stock:30});
console.log(productos.getProduct())

