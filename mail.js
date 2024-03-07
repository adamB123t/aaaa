const firebaseConfig = {
  apiKey: "AIzaSyBm7B83x4ZQB8OMQ7k_OgOUgU_Mhc7xXOY",
  authDomain: "contatform-you.firebaseapp.com",
  databaseURL: "https://contatform-you-default-rtdb.firebaseio.com",
  projectId: "contatform-you",
  storageBucket: "contatform-you.appspot.com",
  messagingSenderId: "763714273380",
  appId: "1:763714273380:web:f5d5032a4dbe2dc91d9f71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database correctly (assuming "contacts" is the correct node name)
var contactFormDB = firebase.database().ref("contacts");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");

  saveMessages(name, emailid);

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
