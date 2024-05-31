const username = document.getElementById('username');
console.log(username);


const email = document.querySelector('#email');
console.log(email);

//Welcome 'halima' you registered suscesfully. 
//create an h2
const para = document.createElement("h2");
para.innerText = "Welcome ${usernam} your login was successful";
document.body.appendChild(para);
// Get the container element for blog posts
const blogPostsContainer = document.getElementById('blog-posts');

// Get the first child element of the container
const firstChild = blogPostsContainer.firstChild;

// Log the first child element
console.log("First Child of Blog Posts Container:", firstChild);