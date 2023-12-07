const socket = io()
const tabla = document.getElementById('tabla');
//const btnCreateProduct = document.getElementById('btnCreateP');
//const btnDelete = document.getElementById('btnDelete')

socket.on('connect', ()=>{
    console.log('Connected Customer')
})

socket.on('products', (data)=>{
    // console.log(data)
    let conjunto = ''
     data.map((e)=> {
        conjunto += 
         `
            <tr>
              <th scope="row">${e.id}</th>
              <td>${e.title}</td>
              <td>${e.description}</td>
              <td>$${e.price}</td>
              <td colspan="2">${e.stock}</td>
              <td>
                <img style="height: 18px;" src="${e.thumbnail}" >
              </td>
              <td>
                <button type="button" class="btn btn-danger btn-sm" onclick="deleteProduct(${e.id})" >Delete</button>
              </td>
            </tr>
         `
        tabla.innerHTML = conjunto
    })
})

const deleteProduct = async (id) =>{
    fetch(`http://localhost:8080/api/products/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => console.log(res))
}