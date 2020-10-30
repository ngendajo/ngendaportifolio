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

//.................insert data..........................
CKEDITOR.replace('message2');

const adminform=document.getElementById('adform');
const errorMessage=document.getElementById('error');
adminform.addEventListener('submit',async(e)=>{
  e.preventDefault();
  console.log('clicked');
            
      try{
        var str=CKEDITOR.instances.message2.getData()
        let fd = {
          'title': adminform.arttitle.value,
          'content':str
        };
        
        const options={
        method:'POST',
        headers:{
          'Content-Type': 'application/json;charset=utf-8' 
        },
        body:JSON.stringify(fd)
      };
        const r=await fetch('https://ngendajo.herokuapp.com/post',options);
        const p = await r.json();
                console.log(p);
      
                adminform.reset();
                errorMessage.innerHTML = 'Success';
                location.href = 'profile.html';
      }
      catch (error) {
        console.log(error);
      }
        })
        document.getElementById("comm").onclick=function(){
          const allComments="allComments";
          window.alert(allComments);
         const commentsContainer = document.querySelector('.comments-container');
         let ht='';
         (async () => {
          const res = await fetch(
            `https://ngendajo.herokuapp.com/comments/${postId}/allComments`,
          );
          const comments = await res.json();
          console.log(comments);
          
          
          
          comments.data.forEach((comment) => {
              ht += `
             <div class="each-comment">
                    <div class="comment-details">
                      <p class="comment-time"> ${
                        comment.createdAt}</p>
                    </div>
                    <p class="commentPara">
                      ${comment.comment}
                    </p>
                  </div>`;
          });
          commentsContainer.innerHTML=ht;
        })();
              }