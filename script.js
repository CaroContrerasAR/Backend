class ProductManager{
    static id = 0;
    
    constructor(){
        this.products = []
    }

    addProduct (title, description,price,image, code, stock){
        ProductManager.id++
        this.products.push({title, description, price, image, code, stock, id:ProductManager.id});
    }

    getProduct(){
        return this.products;
    }
}

const Productos = new ProductManager
console.log(Productos.getProduct())

//agrego productos
Productos.addProduct('title1','description1', 1500, 'imagen1', 'abc123', 50)
Productos.addProduct('title2','description2', 2350, 'imagen2', 'abc124', 40)
console.log(Productos.getProduct())