const username = document.getElementById('username');
console.log(username);


const user = document.querySelector(".greeting")

const regbtn = document.querySelector('.subbtn')


regbtn.addEventListener("click", (e)=>{
    e.preventDefault()
user.innerHTML = username.value
    alert(`Finished Registering ${username.value}`)
})

const email = document.querySelector('#email');
console.log(email);



const h2 = document.querySelectorAll('input');
h2.forEach(h2 => {
    h2.style.fontSize = '1em';
    h2.style.color = 'blue';
})

const message = document.getElementById('quickText');
const alertTwo = document.createDocumentFragment();

let mess = document.createElement('p');
mess.textContent = 'Visit our sanctuary, Wanderers of the Wild';
 
alertTwo.appendChild(mess);
message.appendChild(alertTwo);

const changeStyle = document.getElementById('quickText');
changeStyle.style.textAlign = 'center';
changeStyle.style.fontSize = '1.5em';

let backg = document.getElementById('backtest');
backg.addEventListener('mouseenter', () =>{
    backg.style.background = 'red'
    backg.addEventListener('mouseleave', () =>{
        backg.style.background = 'yellow';
    })
})