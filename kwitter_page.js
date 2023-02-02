const firebaseConfig = {
      apiKey: "AIzaSyAd6jwiGFGBxfXFqXGkZOcBfciL7MXZ14Q",
      authDomain: "chat-database-cb329.firebaseapp.com",
      databaseURL: "https://chat-database-cb329-default-rtdb.firebaseio.com",
      projectId: "chat-database-cb329",
      storageBucket: "chat-database-cb329.appspot.com",
      messagingSenderId: "657561327903",
      appId: "1:657561327903:web:3f5bbf30f8dc285951b82a",
      measurementId: "G-CSKNKERZ0S"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function send() 
{
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
  });
  document.getElementById("msg").value="";    
}
function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");    
}
function updateLike(message_id) 
{
  console.log("clicked on like button "+message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
  });
}