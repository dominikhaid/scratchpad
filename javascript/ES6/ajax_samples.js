//const Url='https://jsonplaceholder.typicode.com/posts';
const Url='http://localhost/Tools/mysqli_php_class/data/user.json';
function getContact(a) {
let userID = a.getAttribute("dataprop");
var sqlInput =`{"contact_id":"${btoa(encodeURIComponent(userID))}","fname":"","lname":"","org":""}`;
var query=`?getUser=${sqlInput}`;
httpRequest(query,"user");
}

function getList() {
 var sqlInput =`{"contact_id":"","fname":"","lname":"","org":""}`;
var query=`?getList=${sqlInput}`;
httpRequest(query,"list");
}
//PURE
function httpRequest(query,func) {
const Http = new XMLHttpRequest();
Http.onreadystatechange=function() {
        if(this.readyState==4 && this.status == 200) {
              //SUCCES
              if(func ==="list") {
                listall();     
              }else { 
                userInfo();
              }
              function listall() {
                let data =JSON.parse(Http.responseText);
                let sortArr =new Object();
                let nameArr =new Array();
                let dataprop ="";
                 data.forEach(function(user) {
                        let nameStr = "";
                  for (const key in user) {
                          if (user.hasOwnProperty(key)) {
                          if (key !== "contact_id"){
                                nameStr+= user[key]+" ";       
                          } else {
                             dataprop ="-!-"+user[key]+"-!-";
                          }
                        }
                          }
                          nameArr.push(nameStr+dataprop);
                          dataprop ="";
                  });
                nameArr.forEach(function(name) {
                let newKey =name.charAt(0);
                if (sortArr.hasOwnProperty(newKey)) {
                        sortArr[newKey].push(name);
                }else {
                        sortArr[newKey] = new Array();
                        sortArr[newKey].push(name);
                }
        })
        let newSort = Object.keys(sortArr);
        newSort.sort();
        var breadcrumbs =document.createElement("DIV");
        breadcrumbs.setAttribute("id","breadcrumbs");
        var userList =document.createElement("DIV");
        userList.setAttribute("id","userList");
        for (const key in newSort) {
                var newLink =document.createElement("A");
                newLink.setAttribute("href","#"+newSort[key]);
                newLink.setAttribute("class","crumb");  
                newLink.innerHTML =newSort[key];
                breadcrumbs.appendChild(newLink);
                var newUl=document.createElement("UL");
                newUl.setAttribute("id",newSort[key]);
                newUl.setAttribute("class","crumbUL");
                var newLi =document.createElement("LI");
                newLi.setAttribute("class","liPoint");
                newLi.innerHTML =newSort[key];
                newUl.appendChild(newLi);
                document.getElementById("userListDiv").appendChild(newUl);
        }
        document.getElementById("userListDiv").insertBefore(breadcrumbs,document.getElementById("userListDiv").firstChild);
        for (const key in sortArr) {
                if (sortArr.hasOwnProperty(key)) {
                        const element = sortArr[key];
                        element.sort();
                        element.forEach(name => {
                                let userid = name.slice(name.indexOf("-!-")+3,name.lastIndexOf("-!-"));
                                name = name.slice(0,name.indexOf("-!-"));
                                var newLi =document.createElement("LI");
                                var newLink =document.createElement("A");
                                newLink.setAttribute("dataprop",userid);
                                newLink.setAttribute("class","userLink");  
                                newLink.innerHTML = name;
                                newLi.appendChild(newLink)
                              document.getElementById(key).appendChild(newLi)
                        });
                }
        }
        let functolink = document.getElementsByClassName('userLink');
      for (let i = 0; i < functolink.length;i++) {
        functolink[i].addEventListener("click", function() {
                getContact(this)
        });
        }
          }
              function userInfo() {
              let data =JSON.parse(Http.responseText);
              let output = '<div class="users"><h2>User</h2>';
              var photo = ``
              data.forEach(function(user) {
                output += `<div class="con100"><div  class="userInfo con50"><p>`;
                for (const key in user) {
                        if (user.hasOwnProperty(key)) {
                                var element = user[key]+"";
                                if(key ==="photo") {
                                photo = `<div class="userImg con40 fright"><img src="${user[key]}"/></div>`
                                } else {
                                var keyOut = key.charAt(0).toUpperCase()+ key.slice(1,key.length);
                                 output += `<span><b>${keyOut.replace("_"," ")}:&nbsp;</b>${element.replace(/\\n/ig," ")}</span><br/>`;
                                }
                        }
                }
                output +=`</p></div>${photo}</div>`
              });
              output += "</div></div>";
              document.getElementById('output').innerHTML = output;
        }
        } else if (this.readyState==4 && this.status > 200) {
                //SERVER ERROR
                document.getElementById('err').innerHTML = Http.responseText;
        }
}
var url = "obj_mysqli.php";
Http.open("POST", url+query, true);
Http.setRequestHeader("Content-type", "application/json;charset=utf-8");
Http.send();
}


//JQUERAY
$(document).ready(function () {
const Data=[
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          }}];

$('#jqTest').click(function (e) { 
        $.ajax({
                type: "GET",
                url: Url,
              // data: Data, //JUST 4 POST
                dataType: "JSON", //JSON HTML XML TXT JSONP
                success: function (response) {
                        let output = '<h2>Users</h2>';
                        response.forEach(function(user) {
                        output += '<ul><li>ID:'+user.id+'</li><li>Name: '+user.name+'</li><li>Email: '+user.email+'</li></ul>'
                        });
                 $('#output').html(output);
                },
                error: function (error) {
                        $('#err').html(error);
                        }  
        });      
});
});


//FECTH ES6
function fetchReuqest()  {
        fetch(Url)
        .then((res) => res.json())
        .then((data) =>{
                let output = '<h2>Users</h2>';
                data.forEach(function(user) {
                output += `<ul><li> ID: ${user.id}</li><li>Name: ${user.name}</li><li>Email: ${user.email}</li></ul>`
                });
        document.getElementById('output').innerHTML = output;
        })
        .catch((err) => {
          document.getElementById('err').innerHTML = err;       
        });
}

function fetchAddReuqest(e)  {
        e.preventDefault();
        fetch(Url, {
        method :'POST',
        headers: {
                'Accept': 'aplication/json, text/plain, */*',
                'Content-type': 'aqplication/json'
        },
        body:JSON.stringify("data:data")
        })
        .then((res) => res.json())
        .then((data) =>{
        document.getElementById('output').innerHTML = data.id;
        })
        .catch((err) => {
          document.getElementById('err').innerHTML = err;       
        });
}