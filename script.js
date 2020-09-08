class Product {
    constructor(name, price, year){
        this.name = name
        this.price = price
        this.year = year
    }

}

class UI {
    addProduct(product){
        const lista = document.getElementById(`product-list`)
        const elemento =  document.createElement(`div`)
        elemento.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Name</strong>: ${product.price}
                    <strong>Product Name</strong>: ${product.year}
                    <a name="delete" href="#" class="btn btn-danger">Delete</a>
                </div>
            </div>
        `

        lista.appendChild(elemento)

        this.resetForm()
    }

    resetForm(){                // reset    resetea el formulario
        document.getElementById(`product-form`).reset()

    }


    deleteProduct(element){
        if(element.name === 'delete'){

                    // como el elemento del boton a esta arriba de un contenedos, ponemos el padre del padre del padre 
                        //para eliminar todo el contenedor del producto
            console.log(element.parentElement.parentElement.parentElement.remove())    
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage("Product Delete Succesfully", "info")        // Por si lo eliminamos aparezca mensaje de borrado conla clase danger que es rojo
        } 
    }

            // primer parametro de exito y el segundo de error
    showMessage(message, cssClass){
        const div = document.createElement(`div`)
        div.className = `alert alert-${cssClass} mt-2` 
        div.appendChild(document.createTextNode(message))
            // Mostrando en el DOM 

        const container = document.querySelector(`.container`)        // Para seleccionar todo el contenido del documento
        const app = document.querySelector(`#App`)  // Para que aparezca mensaje en pantalla 
        container.insertBefore(div, app)        // Para que se inserte el elemento del mensaje a mostrar

            // El tiempo en que desaparezca cada que se agrega un elemento
            // debe tener dos parametor 
        setTimeout(function(){
            document.querySelector(`.alert`).remove()     // como el div tiene un alert, asi que todos los elementos con alert seran borradas en 3 segundos
        },3000)
    }
}






        // EVENTOS DEL DOM

const click = document.getElementById(`product-form`)
                    //Submit es que cada que se envie algo realiza la funcion
click.addEventListener("submit", function(e){
   const name = document.getElementById(`name`).value 
   const price = document.getElementById(`price`).value
   const year = document.getElementById(`year`).value

   

   const product = new Product(name, price,year)
   const u1 = new UI()
   
   if (name === '' || price === '' || year === ''){
       return u1.showMessage("Completed Fiels, Please", "danger")   // return para que si unicamente no los tiene envie el mensaje y no envie el color verde de igual manera
   }

   u1.addProduct(product)
   u1.resetForm()
   u1.showMessage(`Product added succesfully`, `success`)


   e.preventDefault()   
})



document.getElementById(`product-list`).addEventListener("click", function(e){
    const ui = new UI()
    ui.deleteProduct(e.target)
})