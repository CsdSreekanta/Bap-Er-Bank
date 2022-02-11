document.getElementById("login-submit").addEventListener('click', function(){
    // get user email
 const userEmailField = document.getElementById('user-email');
 const userEmail= userEmailField.value;
 userEmailField.value='';
//  console.log(userEmail);

//  get user password
const userPasswordField = document.getElementById("user-password");
const userPassword = userPasswordField.value;
userPasswordField.value= "";
// console.log(userPassword)
//check email and password
if(userEmail=='sreekanta5002@gmail.com' && userPassword=='11223344'){
  window.location.href = 'banking.html';
}
else{
    alert('You are not valid user')
}

})
