function Login() {
  alert("Thank You! Your Logged In successfully Thanks!");
}

function Added() {
  alert("Thank You! Your Item is Added to Cart successfully Thanks!");
}

function openForm() {
  document.getElementById("hero");
  alert("Redirecting a user to the Login Page!");
}

function closeForm() {
  document.getElementById("signup-form");
  alert("Thank You! Your details has been successfully submitted Thanks!");
}

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(`Email: ${email}, Password: ${password}`);
});

