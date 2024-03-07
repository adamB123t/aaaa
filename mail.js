@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

const firebaseConfig = {
  apiKey: "AIzaSyBm7B83x4ZQB8OMQ7k_OgOUgU_Mhc7xXOY",
  authDomain: "contatform-you.firebaseapp.com",
  databaseURL: "https://contatform-you-default-rtdb.firebaseio.com",
  projectId: "contatform-you",
  storageBucket: "contatform-you.appspot.com",
  messagingSenderId: "763714273380",
  appId: "1:763714273380:web:f5d5032a4dbe2dc91d9f71"
};


// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("cccc");

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
