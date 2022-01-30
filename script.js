const app = document.querySelector('.container')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        console.log(usuario.name)
        const p = document.createElement('p')
        p.setAttribute('id', usuario.id)
        //Se puede hacer de dos formas primero esta la siguiente
        //Utilizo este ejemplo para darle un estilo basico
        p.innerHTML = `<a href=./usuario.html?id=${usuario.id}>`+usuario.name
        //Y luego esta la de abajo
        /*p.addEventListener('click', function(){
            window.location.href = `./usuario.html?id=${usuario.id}`
        })*/
        app.appendChild(p)
    });
    //console.log(data)
})
.catch(err => console.log(err))
