const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(res => res.json())
.then(data => userInfoButton(data))

function userInfoButton(userInfo) {
    const ul = document.getElementById('list-container');
   
    
    for (const user of userInfo) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name
        ul.appendChild(li)
    }
}