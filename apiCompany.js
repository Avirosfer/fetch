let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {
        body += `
            <tr>
                <td>${data[i].company.bs}</td>
                <td>${data[i].company.name}</td>
                <td>${data[i].company.catchPhrase}</td>
                
            </tr>`
    }
    document.getElementById('data').innerHTML = body
}