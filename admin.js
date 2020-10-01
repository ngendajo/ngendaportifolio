firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login_div").style.display="none";
      
      var user = firebase.auth().currentUser;
      if(user=!null)
      {
        var email_id="Welcome user: "+user.email;
        
      }
    } else {
      // No user is signed in.
      document.getElementById("login_div").style.display="flex";
    }
  }); 
function login()
{
    
    var userEmail=document.getElementById("email_field").value;
    var userPassword=document.getElementById("password_field").value;
    firebase.auth().signInWithEmailAndPassword(userEmail,userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: "+errorMessage);  
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