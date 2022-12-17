const pb = new PocketBase('http://127.0.0.1:8090')
let emailField, passwordField, confirmPassword, addSignUpUser;
emailField = document.querySelector(".emailField");
passwordField = document.querySelector(".passwordField");
confirmPassword = document.querySelector(".confirmPassword");
addSignUpUser = document.querySelector(".signupUser")


addSignUpUser.addEventListener("click", function (e) {
  e.preventDefault()
  let emailText = emailField.value;
  let passwordText = passwordField.value;
  let confirmpassText = confirmPassword.value;
  createAccount();
});

async function createAccount(){
    const data = {
      email: emailField.value,
      password: passwordField.value,
      passwordConfirm: confirmPassword.value,
    };

    const record = await pb.collection('users').create(data);
}
