const email = "info@dominikhaid.de";
const password = "dom53361.";

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
firebase
  .auth()
  .signInWithPopup(googleAuthProvider)
  .then(function (result) {
    var token = result.credential.accessToken;
    console.debug(token);
    var user = result.user;
    console.debug(user);
  })
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });

firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(function (user) {
    console.debug(user);
  })
  .catch(function (error) {
    console.debug(error.message);
    var errorCode = error.code;
    var errorMessage = error.message;
  });

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

var user = firebase.auth().currentUser;
if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
}

var user = firebase.auth().currentUser;
user
  .updateProfile({
    displayName: "Jane Q. User",
    photoURL: "https://example.com/jane-q-user/profile.jpg",
  })
  .then(function () {
    // Update successful.
  })
  .catch(function (error) {
    // An error happened.
  });

var user = firebase.auth().currentUser;

user
  .updateEmail("user@example.com")
  .then(function () {
    // Update successful.
  })
  .catch(function (error) {
    // An error happened.
  });

var user = firebase.auth().currentUser;

user
  .sendEmailVerification()
  .then(function () {
    // Email sent.
  })
  .catch(function (error) {
    // An error happened.
  });

var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();

user
  .updatePassword(newPassword)
  .then(function () {
    // Update successful.
  })
  .catch(function (error) {
    // An error happened.
  });

firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

var auth = firebase.auth();
var emailAddress = "user@example.com";

auth
  .sendPasswordResetEmail(emailAddress)
  .then(function () {
    // Email sent.
  })
  .catch(function (error) {
    // An error happened.
  });

var user = firebase.auth().currentUser;

user
  .delete()
  .then(function () {
    // User deleted.
  })
  .catch(function (error) {
    // An error happened.
  });

var user = firebase.auth().currentUser;
var credential;
// Prompt the user to re-provide their sign-in credentials

user
  .reauthenticateWithCredential(credential)
  .then(function () {
    // User re-authenticated.
  })
  .catch(function (error) {
    // An error happened.
  });

firebase
  .auth()
  .signOut()
  .then(function () {
    // Sign-out successful.
  })
  .catch(function (error) {
    // An error happened.
  });
