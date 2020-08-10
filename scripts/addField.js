
document.querySelector("#add-time")
.addEventListener('click', cloneField)


function cloneField() {
    //duplicar o campo
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(function(field){
        field.value = ""
    }) 

    //colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}