import React from "react";

const PublicUserContext = React.createContext({
  userData: {
    uid: false,
    email: false,
    displayName: false,
    phoneNumber: false,
    photoURL: false,
    emailVerified: false,
    msg: {
      title: false,
      content: false,
      type: false,
    },
  },
  loginWithPassword(email, password) {
    //login method
    return false;
  },
  loginWithGoogle() {
    return false;
  },
  checkUser(e) {
    //check login state
    return false;
  },
  signOutUser() {
    //signout method
  },
  updateUserProfil() {
    //update profil
  },
  setUserMsg(title = false, content = false, type = "info") {
    console.debug("User Msg Updated", this.userData.msg);
    this.userData.msg.title = title;
    this.userData.msg.content = content;
    this.userData.msg.type = type;
    return true;
  },
  setUser(
    uid = false,
    email = false,
    displayName = false,
    phoneNumber = false,
    photoURL = false,
    emailVerified = false
  ) {
    console.debug("User Set", this.userData);
    this.userData.uid = uid;
    this.userData.email = email;
    this.userData.displayName = displayName;
    this.userData.phoneNumber = phoneNumber;
    this.userData.photoURL = photoURL;
    this.userData.emailVerified = emailVerified;
    return true;
  },
});

export { PublicUserContext as default };
