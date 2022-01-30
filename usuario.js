const app = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('p')
    name.innerHTML = data.name
    const email = document.createElement('p')
    email.innerHTML = data.email
    const phone = document.createElement('p')
    phone.innerHTML = data.phone
    app.appendChild(name)
    app.appendChild(email)
    app.appendChild(phone)
})