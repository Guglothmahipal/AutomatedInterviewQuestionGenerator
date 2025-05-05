const logsign = document.getElementById('logsign');
const full = document.getElementById('fullbody');
const nav = document.getElementById('navbar');
const loginsignup = document.getElementById('login');
const signup1 = document.getElementById('signup');

let flag = 1;
let key = 1;

function login() {
  logsign.style.display = 'block';
  full.style.display = 'block';
  logsign.style.transition = 'ease-in';
  loginsignup.style.display = 'flex';
  signup1.style.display = 'none';
  document.body.style.overflow = 'hidden';
  flag = 0;
  key = 1;
}

function signup() {
  logsign.style.display = 'block';
  full.style.display = 'block';
  logsign.style.transition = 'ease-in';
  loginsignup.style.display = 'none';
  signup1.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  flag = 0;
  key = 0;
}

// Close when clicking outside
full.addEventListener("click", function (event) {
  if (!logsign.contains(event.target)) {
    full.style.display = "none";
    logsign.style.display = "none";
    document.body.style.overflow = 'auto';
    flag = 1;
    key = 1;
  }
});

// Toggle between login and signup from inside buttons
document.querySelectorAll('.createacc').forEach(button => {
  button.addEventListener("click", () => {
    if (loginsignup.style.display === 'none') {
      loginsignup.style.display = 'flex';
      signup1.style.display = 'none';
    } else {
      loginsignup.style.display = 'none';
      signup1.style.display = 'flex';
    }
  });
});
