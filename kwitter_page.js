var firebaseConfig = {
      apiKey: "AIzaSyDChCdV63M1Uubl4msmsOVeHqaEy4gq2cU",
      authDomain: "kwitter-b64e5.firebaseapp.com",
      databaseURL: "https://kwitter-b64e5-default-rtdb.firebaseio.com",
      projectId: "kwitter-b64e5",
      storageBucket: "kwitter-b64e5.appspot.com",
      messagingSenderId: "524667452104",
      appId: "1:524667452104:web:acc217f421ff56a04543fd"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

      } });  }); }
getData();
