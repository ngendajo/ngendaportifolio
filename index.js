firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display="block";
      document.getElementById("login_div").style.display="none";
      var user = firebase.auth().currentUser;
      if(user=!null)
      {
        var email_id=user.email;
        //document.getElementById("user_para").innerHTML="Welcome user: "+email_id;
      }
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display="none";
      document.getElementById("login_div").style.display="block";
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

//..................read data...........................
var namev,commentv,idv,datev1,datev2,datev3,datev4,datev5,datev6,datev7;
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function Ready(){
    namev=document.getElementById("name2").value;
    commentv=document.getElementById("message2").value;
    idv=d.getTime(); 
    idl=d.getTime(); 
    datev1=d.getFullYear();
    datev2=months[d.getMonth()];
    datev3=d.getDate();
    datev4=d.getHours();
    datev5=d.getMinutes();
    datev6=d.getSeconds();
    datev7=datev1+" "+datev2+" "+datev3+" "+datev4+":"+datev5+":"+datev6;

}
//.................insert data..........................


document.getElementById('submit2').onclick=function(){
  Ready();
  if(namev==''|| commentv=='')
  {
    window.alert("Insert title and details");
  }
  else{
    firebase.database().ref('articles/'+idv).set({
      Names: namev,
      sign: 1,
      commentv: commentv,
      datev:datev7
  });
    window.alert("New update done!");
  }
}