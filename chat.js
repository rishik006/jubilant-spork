var firebaseConfig = {
    apiKey: "AIzaSyCctPbdwvQxSEKnt8Ge-rqydR8OeF7FUAE",
    authDomain: "classtest-e34b7.firebaseapp.com",
    databaseURL: "https://classtest-e34b7-default-rtdb.firebaseio.com",
    projectId: "classtest-e34b7",
    storageBucket: "classtest-e34b7.appspot.com",
    messagingSenderId: "853588713260",
    appId: "1:853588713260:web:163e8149ab4adf584a5689"
};


firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name",user_name);
    window.location="page.html"
}

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "chat_room.html"
}

function redirectToRoomName(name) {
    console.log(name)
    localStorage.setItem("room_name", name)
    window.location = "chat_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - ", Room_names)
   row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
   document.getElementById("output").innerHTML += row
   //End code
   });});}
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}



