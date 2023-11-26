
// ********firebase and database********
const firebaseConfig = {
  apiKey: "AIzaSyDzuZxDgCvXfttBNtH3PLPARxtuIAafkrk",
  authDomain: "ragrebel-1f906.firebaseapp.com",
  databaseURL: "https://ragrebel-1f906-default-rtdb.firebaseio.com",
  projectId: "ragrebel-1f906",
  storageBucket: "ragrebel-1f906.appspot.com",
  messagingSenderId: "829536572796",
  appId: "1:829536572796:web:cf18e3ad25d446500000f9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// console.log(app.database);


// *****Loader *****



// ********* contact submit button ********
function submit() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var number = document.getElementById("phone");
  var address = document.getElementById("address");
  // console.log(name.value);
  // console.log(email.value);
  // console.log(number.value);
  // console.log(address.value);
  var objform = {
    name: name.value,
    email: email.value,
    number: number.value,
    address: address.value
  }
  // console.log(objform);

  // ***** Sending Data to Firebase Database ****
  firebase.database().ref('form').push(objform);
}


function girls() {
  window.location.href = 'file:///D:/usman/Faizan-Client-Project-main/shop.html'
}


