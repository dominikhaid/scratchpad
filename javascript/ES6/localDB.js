// ==UserScript==
// @name     Local DB
// @version  1
// @grant    none
// ==/UserScript==
var $_ = document.querySelector.bind(document);
var $$_ = document.querySelectorAll.bind(document);


var selcats = $$_('#dropDownMain li >a');
//alert(selcats.length);
var catArry = [];


const dbName = "LocalDB";
const item = [
        { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
        { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

var productsArry = [];
var selproducts = $$_('.dropSubUllev1 li >a');
//alert(selproducts.length);

function createOverley() {


        var newNode = document.createElement("DIV");
        newNode.setAttribute("id", "localDBWindow");
        newNode.setAttribute("style", "position:fixed;top:100px;right:100px;background-color:white;z-index:9999;padding:20px;");

        var newNode2 = document.createElement("BUTTON");
        newNode2.setAttribute("onclick", "updateDB();");
        newNode2.innerHTML = "create/update DB";

        var newNode3 = document.createElement("BUTTON");
        newNode3.setAttribute("onclick", "");
        newNode3.innerHTML = "filter";

        newNode.appendChild(newNode2);
        newNode.appendChild(newNode3);
        $$_("body")[0].appendChild(newNode);
}

createOverley();

      
        function  lDBopen(callback) {
            var lDB = {};
  var datastore = null;     
          // Database version.
                var version = 1;
              
                // Open a connection to the datastore.
                var request = indexedDB.open(dbName, version);
              
                // Handle datastore upgrades.
                request.onupgradeneeded = function(e) {
                  var db = e.target.result;
              
                  e.target.transaction.onerror = lDB.onerror;
              
                  // Delete the old datastore.
                  if (db.objectStoreNames.contains("artikel")) {
                    db.deleteObjectStore("artikel");
                  }
              
                  // Create a new datastore.
                  var store = db.createObjectStore("artikel", {
                    keyPath: ssn
                  });
                };
              
                // Handle successful datastore access.
                request.onsuccess = function(e) {
                  // Get a reference to the DB.
                  datastore = e.target.result;
              
                  // Execute the callback.
                  callback();
                };
              
                // Handle errors when opening the datastore.
                request.onerror = lDB.onerror;
              };

              function lDBfetchArt(callback) {
                var db = datastore;
                var transaction = db.transaction(["artikel"], 'readwrite');
                var objStore = transaction.objectStore("artikel");
              
                var keyRange = IDBKeyRange.lowerBound(0);
                var cursorRequest = objStore.openCursor(keyRange);
              
                var artikel = [];
              
                transaction.oncomplete = function(e) {
                  // Execute the callback function.
                  callback(todos);
                };
              
                cursorRequest.onsuccess = function(e) {
                  var result = e.target.result;
              
                  if (!!result == false) {
                    return;
                  }
              
                  artikel.push(result.value);
              
                  result.continue();
                };
              
                cursorRequest.onerror = lDB.onerror;
              };

            function    lDBcreateArt(item, callback) {
                // Get a reference to the db.
                var db = datastore;
              
                // Initiate a new transaction.
                var transaction = db.transaction(["artikel"], 'readwrite');
              
                // Get the datastore.
                var objStore = transaction.objectStore("artikel");
              
         
                // Create the datastore request.
                var request = objStore.put(item);
              
                // Handle a successful datastore put.
                request.onsuccess = function(e) {
                  // Execute the callback function.
                  callback(item);
                };
              
                // Handle errors.
                request.onerror = lDB.onerror;
              };

              function lDBdeleteArt(id, callback) {
                var db = datastore;
                var transaction = db.transaction(["artikel"], 'readwrite');
                var objStore = transaction.objectStore("artikel");
              
                var request = objStore.delete(id);
              
                request.onsuccess = function(e) {
                  callback();
                }
              
                request.onerror = function(e) {
                  console.log(e);
                }
              };
 
        

lDBopen();