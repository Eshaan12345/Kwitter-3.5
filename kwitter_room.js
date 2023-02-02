
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
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() 
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logOut() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("remove_name");
  window.location="index.html";    
}
