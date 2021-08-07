const reqToFirebase = require("./shared").reqToFirebase;
const fireBaseUserObj = require("./shared").fireBaseUserObj;
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT,
};

/**
 *
 * @param {'Firebase instance'} firebase
 * @param {'Firebase Config'} firebaseConfig
 */
async function firebaseDB() {
  let result = await firebase.initializeApp(firebaseConfig);
  return result;
}

module.exports.firebaseDB = firebaseDB;

async function status() {
  return firebase.app().name;
}

module.exports.status = status;

/**
 *
 * @param {'Firebase instanse'} firebase
 * @param {'req|express req object'} email
 * @param {'string|user|log'} mode
 */
async function loginWithPassword(req, mode) {
  let { email: email, pwd: pwd } = reqToFirebase(req);

  if (!pwd || !email)
    return {
      error: "No User Data Submitted",
    };

  let reqRes = await firebase
    .auth()
    .signInWithEmailAndPassword(email, pwd)
    .then((result) => {
      if (!mode || mode !== "token") return result.user;

      async function getToken(e) {
        if (!e.user.email || !e.user.uid || !e.user.displayName)
          return res
            .status(500)
            .jsonp({ error: "Invalid User Data pls update your profil" });

        resReq = await e.user.getIdTokenResult().then((idTokenResult) => {
          return idTokenResult;
        });

        if (e.mode && e.mode === "log") console.debug(resReq);
        return resReq;
      }
      return getToken({ user: result.user, mode: mode });
    })
    .catch((error) => {
      if (mode && mode === "log") console.debug(error);
      return error;
    });
  return reqRes;
}

module.exports.loginWithPassword = loginWithPassword;

/**
 *
 * @param {'Firebase Object'} user
 * @param {'OBJECT|express request'} params
 */
async function updateUser(user, req) {
  let { params: params } = reqToFirebase(req);
  if (!params || !user)
    return {
      code: "intern",
      message:
        "Bitte überprüfe deinen Eingaben oder versuche es später wieder.",
    };

  if (user.code) return user;
  return user
    .updateProfile(params)
    .then(function () {
      //console.debug('Succes', params);
      return { succes: params };
    })
    .catch(function (error) {
      //console.debug('Error', error);
      return { error: error };
    });
}

module.exports.updateUser = updateUser;

/**
 *
 * @param {'Firebase Object'} user
 * @param {'OBJECT|express request'} params
 */
async function createUser(req) {
  if (!req || !firebase)
    return {
      code: "intern",
      message:
        "Bitte überprüfe deinen Eingaben oder versuche es später wieder.",
    };

  let { params: params } = reqToFirebase(req);

  return firebase
    .auth()
    .createUserWithEmailAndPassword(params.email, params.password)
    .then(() => {
      return {
        msg: "Benutzer erstellt",
        email: params.email,
      };
    })
    .catch(function (error) {
      return { error: error };
    });
}

module.exports.createUser = createUser;
/**
 *
 * @param {'Firebase User'} user
 */
async function deleteUser(user) {
  //let user = await loginWithPassword(firebase, email, password, 'user');
  if (!user)
    return {
      code: "intern",
      message:
        "Bitte überprüfe deinen Eingaben oder versuche es später wieder.",
    };

  return user
    .delete()
    .then(function () {
      //console.debug('Succes');
      return { succes: `Benutzer ${user.email} gelöscht` };
    })
    .catch(function (error) {
      //console.debug('Error', error);
      return { error: error };
    });
}

module.exports.deleteUser = deleteUser;
