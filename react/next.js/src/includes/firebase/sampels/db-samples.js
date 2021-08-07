//console.debug(firebase.app());

//adddata random id

db.collection("cities")
  .doc()
  .set({
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  })
  .then(function () {
    console.debug("Document successfully written!");
  })
  .catch(function (error) {
    console.error("Error writing document: ", error);
  });

//add collection / records

db.collection("users")
  .add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912,
  })
  .then(function (docRef) {
    console.debug("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });

//READ DATA

db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.debug(`${doc.id} => ${doc.data()}`);
    });
  });

//Set Data with merge

var cityRef = db.collection("cities").doc("BJ");

var setWithMerge = cityRef.set({
  capital: true,
  city: true,
});

// Set / Create Data

db.collection("cities")
  .doc("LA")
  .set({
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  })
  .then(function () {
    console.debug("Document successfully written!");
  })
  .catch(function (error) {
    console.error("Error writing document: ", error);
  });

//DATA SAMPELS

var docData = {
  stringExample: "Hello world!",
  booleanExample: true,
  numberExample: 3.14159265,
  dateExample: firebase.firestore.Timestamp.fromDate(
    new Date("December 10, 1815")
  ),
  arrayExample: [5, true, "hello"],
  nullExample: null,
  objectExample: {
    a: 5,
    b: {
      nested: "foo",
    },
  },
};
db.collection("data")
  .doc("one")
  .set(docData)
  .then(function () {
    console.debug("Document successfully written!");
  });

// Update Data

var washingtonRef = db.collection("cities").doc("DC");
washingtonRef
  .update({
    name: "Dominik",
  })
  .then(function () {
    console.debug("Document successfully updated!");
  })
  .catch(function (error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  });

//TIMESTAMP SERVER

var docRef = db.collection("data").doc("one");
// Update the timestamp field with the value from the server
var updateTimestamp = docRef.update({
  dateExample: firebase.firestore.FieldValue.serverTimestamp(),
});

// UPDATE OBJECT

var frankDocRef = db.collection("users").doc("frank");
frankDocRef.set({
  name: "Frank",
  favorites: { food: "Pizza", color: "Blue", subject: "recess" },
  age: 12,
});

// To update age and favorite color:
db.collection("users")
  .doc("frank")
  .update({
    age: 13,
    "favorites.color": "Red",
  })
  .then(function () {
    console.debug("Document successfully updated!");
  });

//UPDATE ARRYS

var washingtonRef = db.collection("cities").doc("DC");

// Atomically add a new region to the "regions" array field.
washingtonRef.update({
  regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia"),
});

// Atomically remove a region from the "regions" array field.
washingtonRef.update({
  regions: firebase.firestore.FieldValue.arrayRemove("east_coast"),
});

//INCREMENT A FIED
var washingtonRef = db.collection("cities").doc("DC");

// Atomically increment the population of the city by 50.
washingtonRef.update({
  population: firebase.firestore.FieldValue.increment(50),
});

export { firebase, db as default };
