let some = window.prompt('Please enter your name:');
window.alert('Welcome' + " " + some)

const username = document.getElementById('username');



const user = document.querySelector(".greeting")

const regbtn = document.querySelector('.subbtn')

const footer = document.querySelector(".footer")



let heading2 = footer.firstElementChild.innerHTML +" Embark on a journey of discovery and wonder as you explore our website"
footer.innerHTML = heading2

const navarray = ["Home", "About", "Resources"]

const navDiv = document.querySelector(".navBar");

for(let i = 0; i < navarray.length; i++) {
    console.log(navarray[i])
    const navLink = document.createElement("a")
    navLink.href = '/'
    navLink.text = navarray[i]
    navDiv.append(navLink)
}
console.log(navDiv)

regbtn.addEventListener("click", (e)=>{
    e.preventDefault()
user.innerHTML = username.value
    window.alert(`Finished Registering ${username.value}`)
})

const email = document.querySelector('#email');




const h2 = document.querySelectorAll('input');

h2.forEach(h2 => {
    h2.style.fontSize = '1em';
    h2.style.color = 'blue';
})

const message = document.getElementById('quickText');
const alertTwo = document.createDocumentFragment();

let mess = document.createElement('p');
mess.textContent = 'Visiting a wolf sanctuary is a soul-stirring experience, where every step echoes with the ancient tales of the wild.';
 
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