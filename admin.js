function noError(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      if(user.email=!null)
      {
        var email_id="Welcome user: "+user.email;
      window.alert(email_id);
      document.location.href='admin.html';
      }
    } else {
      // No user is signed in.
      window.alert("You do not have a user");
    }
  });
}
function login()
{
    
    var userEmail=document.getElementById("email_field").value;
    var userPassword=document.getElementById("password_field").value;
    console.log(userEmail+userPassword);
    firebase.auth().signInWithEmailAndPassword(userEmail,userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
          window.alert("Error: "+errorMessage); 
          noError();

      });    
    
}
function logout(){
  firebase.auth().signOut();
}
document.getElementById("admin_button").addEventListener('click',function(){
    document.querySelector('.admin').style.display='flex';
});
function adminClose(){
    document.querySelector('.admin').style.display='none';
}
         