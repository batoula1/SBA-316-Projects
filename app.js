const username = document.getElementById('username');
console.log(username);


const email = document.querySelector('#email');
console.log(email);

//Welcome 'halima' you registered suscesfully. 
//create an h2
const para = document.createElement("h2");
para.innerText = "Welcome ${usernam} your login was successful";
document.body.appendChild(para);