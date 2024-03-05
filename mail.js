const firebaseConfig = {
  apiKey: "AIzaSyBm7B83x4ZQB8OMQ7k_OgOUgU_Mhc7xXOY",
  authDomain: "contatform-you.firebaseapp.com",
  databaseURL: "https://contatform-you-default-rtdb.firebaseio.com",
  projectId: "contatform-you",
  storageBucket: "contatform-you.appspot.com",
  messagingSenderId: "763714273380",
  appId: "1:763714273380:web:f5d5032a4dbe2dc91d9f71"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("cccc");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("cccc").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
