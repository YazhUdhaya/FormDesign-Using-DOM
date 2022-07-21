// Create Form using DOM 
// NavBar - Heading
const DiviT = document.createElement("div");
DiviT.setAttribute("class","conatiner")
const navBar = document.createElement("h1");
navBar.setAttribute("class","container text-center container-expand-lg");
navBar.setAttribute("id","title");
navBar.innerHTML = "<h1> DOM Manipulation with Forms </h1>"

// Para Description

const paraTag = document.createElement("p");
paraTag.setAttribute("class","container text-center container-expand-lg");
paraTag.setAttribute("id","description");
paraTag.innerHTML = "Used to Create Form and if I submit the form means It will Update on Table using DOM and CSS and Bootstrap";
// Form 
// Name

const divi1 = document.createElement("div");
divi1.setAttribute("class","container");
const formTag = document.createElement("form");
formTag.setAttribute("class"," formSubmit p-4");
formTag.setAttribute("id","form");
formTag.setAttribute("onSubmit","AddValueFromTab();return false;")
const divi2 = document.createElement("div");
divi2.setAttribute("class"," mb-3");
const divi3 = document.createElement("div");
divi3.setAttribute("class","form-group col-md-5"); 
const labTag = document.createElement("label");
labTag.setAttribute("for","first-name");
labTag.setAttribute("class","form-label");
labTag.innerHTML = "<b>First Name</b>";
const inputTag = document.createElement("input");
inputTag.setAttribute("type","text");
inputTag.setAttribute("class","form-control");
inputTag.setAttribute("id","first-name");
inputTag.setAttribute("required","required");
inputTag.setAttribute("placeholder","Enter FirstName");
divi3.append(labTag,inputTag)

const divi4 = document.createElement("div");
divi4.setAttribute("class","form-group col-md-5 mb-3"); 
const labTag1 = document.createElement("label");
labTag1.setAttribute("for","last-name");
labTag1.setAttribute("class","form-label");
labTag1.innerHTML = "<b>Last Name</b>";
const inputTag1 = document.createElement("input");
inputTag1.setAttribute("type","text");
inputTag1.setAttribute("class","form-control");
inputTag1.setAttribute("id","last-name");
inputTag1.setAttribute("required","required")
inputTag1.setAttribute("placeholder","Enter LastName");
divi4.append(labTag1,inputTag1)

// Address

const divi5 = document.createElement("div");
divi5.setAttribute("class","form-group col-md-6 mb-3"); 
const labTag2 = document.createElement("label");
labTag2.setAttribute("for","address");
labTag2.setAttribute("class","form-label");
labTag2.innerHTML = "<b>Address</b>";
const textAreaTag = document.createElement("textarea");
textAreaTag.setAttribute("type","text");
textAreaTag.setAttribute("class","form-control");
textAreaTag.setAttribute("id","address");
textAreaTag.setAttribute("required","required")
textAreaTag.setAttribute("placeholder","Enter Your Address Details");
divi5.append(labTag2,textAreaTag)

// Pincode 

const divi6 = document.createElement("div");
divi6.setAttribute("class","form-group col-md-4 mb-3"); 
const labTag3 = document.createElement("label");
labTag3.setAttribute("for","pincode");
labTag3.setAttribute("class","form-label");
labTag3.innerHTML = "<b>PinCode</b>";
const inputTag3 = document.createElement("input");
inputTag3.setAttribute("type","text");
inputTag3.setAttribute("class","form-control");
inputTag3.setAttribute("id","pincode");
inputTag3.setAttribute("pattern","[0-9]{6}");
inputTag3.setAttribute("maxlenth","6");
inputTag3.setAttribute("required","required")
inputTag3.setAttribute("placeholder","Enter PinCode");
divi6.append(labTag3,inputTag3)

// Gender

const divi7 = document.createElement("div");
divi7.setAttribute("class","genderHeading mb-3 ms-3");
const labelTag = document.createElement("label");
labelTag.setAttribute("class","head");
labelTag.innerHTML = "<b>Gender</b>"

const divi8 = document.createElement("div");
divi8.setAttribute("class","form-check");
const inputTag4 = document.createElement("input");
inputTag4.setAttribute("class","form-check-input");
inputTag4.setAttribute("type","radio");
inputTag4.setAttribute("name","gender");
inputTag4.setAttribute("value","Male");
inputTag4.setAttribute("id","male");
const labTag4 = document.createElement("label");
labTag4.setAttribute("class","form-check-label");
labTag4.setAttribute("for","male")
labTag4.innerText = "Male"
divi8.append(inputTag4,labTag4)

const divi9 = document.createElement("div");
divi9.setAttribute("class","form-check");
const inputTag5 = document.createElement("input");
inputTag5.setAttribute("class","form-check-input");
inputTag5.setAttribute("type","radio");
inputTag5.setAttribute("name","gender");
inputTag5.setAttribute("value","Female");
inputTag5.setAttribute("id","female");
const labTag5 = document.createElement("label");
labTag5.setAttribute("class","form-check-label");
labTag5.setAttribute("for","female")
labTag5.innerText = "Female"
divi9.append(inputTag5,labTag5)

const divi10 = document.createElement("div");
divi10.setAttribute("class","form-check");
const inputTag6 = document.createElement("input");
inputTag6.setAttribute("class","form-check-input");
inputTag6.setAttribute("type","radio");
inputTag6.setAttribute("name","gender");
inputTag6.setAttribute("value","Others");
inputTag6.setAttribute("id","others");
const labTag6 = document.createElement("label");
labTag6.setAttribute("class","form-check-label");
labTag6.setAttribute("for","others")
labTag6.innerText = "Others"
divi10.append(inputTag6,labTag6)
divi7.append(labelTag,divi8,divi9,divi10)


// Food Items

const divi11 = document.createElement("div");
divi11.setAttribute("class","foodHeading mb-3 ms-3");
const labelTag1 = document.createElement("label");
labelTag1.setAttribute("class","foodItem");
labelTag1.innerHTML = "<b>Tasty Food Items</b>"

const divi12 = document.createElement("div");
divi12.setAttribute("class","form-check");
const inputTag7 = document.createElement("input");
inputTag7.setAttribute("class","form-check-input");
inputTag7.setAttribute("type","checkbox");
inputTag7.setAttribute("name","food");
inputTag7.setAttribute("value","Pizza");
inputTag7.setAttribute("id","food1");
const labTag7 = document.createElement("label");
labTag7.setAttribute("class","form-check-label");
labTag7.setAttribute("for","food1")
labTag7.innerText = "Pizza"
divi12.append(inputTag7,labTag7)

const divi13 = document.createElement("div");
divi13.setAttribute("class","form-check");
const inputTag8 = document.createElement("input");
inputTag8.setAttribute("class","form-check-input");
inputTag8.setAttribute("type","checkbox");
inputTag8.setAttribute("name","food");
inputTag8.setAttribute("value","Briyani");
inputTag8.setAttribute("id","food2");
const labTag8 = document.createElement("label");
labTag8.setAttribute("class","form-check-label");
labTag8.setAttribute("for","food2")
labTag8.innerText = "Briyani"
divi13.append(inputTag8,labTag8)

const divi14 = document.createElement("div");
divi14.setAttribute("class","form-check");
const inputTag9 = document.createElement("input");
inputTag9.setAttribute("class","form-check-input");
inputTag9.setAttribute("type","checkbox");
inputTag9.setAttribute("name","food");
inputTag9.setAttribute("value","Chicken Tandoori");
inputTag9.setAttribute("id","food3");
const labTag9 = document.createElement("label");
labTag9.setAttribute("class","form-check-label");
labTag9.setAttribute("for","food3")
labTag9.innerText = "Chicken Tandoori"
divi14.append(inputTag9,labTag9)

const divi15 = document.createElement("div");
divi15.setAttribute("class","form-check");
const inputTag10 = document.createElement("input");
inputTag10.setAttribute("class","form-check-input");
inputTag10.setAttribute("type","checkbox");
inputTag10.setAttribute("name","food");
inputTag10.setAttribute("value","Noodles");
inputTag10.setAttribute("id","food4");
const labTag10 = document.createElement("label");
labTag10.setAttribute("class","form-check-label");
labTag10.setAttribute("for","food4")
labTag10.innerText = "Noodles"
divi15.append(inputTag10,labTag10)

const divi16 = document.createElement("div");
divi16.setAttribute("class","form-check");
const inputTag11 = document.createElement("input");
inputTag11.setAttribute("class","form-check-input");
inputTag11.setAttribute("type","checkbox");
inputTag11.setAttribute("name","food");
inputTag11.setAttribute("value","Coconut Rice");
inputTag11.setAttribute("id","food5");
const labTag11 = document.createElement("label");
labTag11.setAttribute("class","form-check-label");
labTag11.setAttribute("for","food5")
labTag11.innerText = "Coconut Rice"
divi16.append(inputTag11,labTag11);

// State

const divi17 = document.createElement("div");
divi17.setAttribute("class","col-md-4 mb-3"); 
const labTag12 = document.createElement("label");
labTag12.setAttribute("for","state");
labTag12.setAttribute("class","form-label");
labTag12.innerHTML = "<b>State</b>";
const inputTag12 = document.createElement("input");
inputTag12.setAttribute("type","text");
inputTag12.setAttribute("class","form-control");
inputTag12.setAttribute("id","state");
inputTag12.setAttribute("required","required")
inputTag12.setAttribute("placeholder","Enter State");
divi17.append(labTag12,inputTag12)

// Country

const divi18= document.createElement("div");
divi18.setAttribute("class","col-md-4 mb-3"); 
const labTag13 = document.createElement("label");
labTag13.setAttribute("for","country");
labTag13.setAttribute("class","form-label");
labTag13.innerHTML = "<b>Country</b>";
const inputTag13 = document.createElement("input");
inputTag13.setAttribute("type","text");
inputTag13.setAttribute("class","form-control");
inputTag13.setAttribute("id","country");
inputTag13.setAttribute("required","required")
inputTag13.setAttribute("placeholder","Enter Country");
divi18.append(labTag13,inputTag13)
divi11.append(labelTag1,divi12,divi13,divi14,divi15,divi16)

// Submit Button 

const divi19 = document.createElement("div");
divi19.setAttribute("class","col-md-4 mb-3");

const buttonTag = document.createElement("button");
buttonTag.setAttribute("type","submit");
buttonTag.setAttribute("id","submit");
buttonTag.setAttribute("class","btn btn-primary btn-lg");
buttonTag.innerText = "Submit";
divi19.append(buttonTag);

divi2.append(divi3,divi4,divi5,divi6,divi7,divi11,divi17,divi18,divi19)
formTag.append(divi2)

// Tabel 
const divi20 = document.createElement("div");
divi20.setAttribute("class","row p-2");
divi20.innerHTML = "<h4>Food Form Details</h4>"
const divi21 = document.createElement("div");
divi21.setAttribute("class","col-md-10 col-sm-12 p-3")
const tabTag = document.createElement("table");
tabTag.setAttribute("class","table table-responsive border");
tabTag.setAttribute("id","tableToInsert");

const theadTag = document.createElement("thead");
theadTag.setAttribute("class","col-md-12")

const trTag = document.createElement("tr");
trTag.setAttribute("class","fw-bold")
const tdTag = document.createElement("td");
tdTag.setAttribute("id","0");
tdTag.innerText = "First Name"
const tdTag1 = document.createElement("td");
tdTag1.setAttribute("id","1");
tdTag1.innerText = "Last Name"
const tdTag2 = document.createElement("td");
tdTag2.setAttribute("id","2");
tdTag2.innerText = "Address"
const tdTag3 = document.createElement("td");
tdTag3.setAttribute("id","3");
tdTag3.innerText = "PinCode"
const tdTag4 = document.createElement("td");
tdTag4.setAttribute("id","4");
tdTag4.innerText = "Gender"
const tdTag5 = document.createElement("td");
tdTag5.setAttribute("id","5");
tdTag5.innerText = "Food Items"
const tdTag6 = document.createElement("td");
tdTag6.setAttribute("id","6");
tdTag6.innerText = "State"
const tdTag7 = document.createElement("td");
tdTag7.setAttribute("id","7");
tdTag7.innerText = "Country"

const tbodyTag = document.createElement("tbody");
tbodyTag.setAttribute("class","col-md-12");
tbodyTag.setAttribute("id","addDataInTab");

trTag.append(tdTag,tdTag1,tdTag2,tdTag3,tdTag4,tdTag5,tdTag6,tdTag7);
theadTag.append(trTag)
tabTag.append(theadTag,tbodyTag);
divi21.append(tabTag);
divi20.append(divi21);
divi1.append(formTag,divi20)
DiviT.append(navBar,paraTag,divi1);
document.body.append(DiviT);





// DOM Functionality


function AddValueFromTab(){

const tablebodyVal = document.getElementById("addDataInTab")
  var rowTag = tablebodyVal.insertRow();
  var cell1 = rowTag.insertCell();
  var cell2 = rowTag.insertCell();
  var cell3 = rowTag.insertCell();
  var cell4 = rowTag.insertCell();
  var cell5 = rowTag.insertCell();
  var cell6 = rowTag.insertCell();
  var cell7 = rowTag.insertCell();
  var cell8 = rowTag.insertCell();

  cell1.innerHTML = document.getElementById("first-name").value;
  cell2.innerHTML = document.getElementById("last-name").value;
  cell3.innerHTML = document.getElementById("address").value;
  cell4.innerHTML = document.getElementById("pincode").value;
  
  const radioBtns = document.getElementsByName("gender");
  let valueSelected="";
  for(const btn of radioBtns){
    if(btn.checked){
        valueSelected = btn.value;
        break;
    }
  }
 cell5.innerHTML = valueSelected;

  const checkBox = document.getElementsByName("food");
  
   const foodItemLi = [];

 for(const btn of checkBox){
    if(btn.checked){
     foodItemLi.push(btn.value);
        
    }
 }
  cell6.innerHTML = foodItemLi;

// const ul = document.createElement("ul");
// for(const btn of checkBox){
//          if(btn.checked){
//           var list = document.createElement("li");
//           list.innerHTML = btn.value;
//           ul.append(list);
// }

//      }
// cell6.append(ul);

if(foodItemLi.length < 2){
  alert("You must Choose atleast 2 out of 5 Options");
  cell6.innerHTML = "";
}

  cell7.innerHTML = document.getElementById("state").value;
  cell8.innerHTML = document.getElementById("country").value;


 document.getElementById("first-name").value = "";
 document.getElementById("last-name").value = "";
 document.getElementById("address").value = "";
 document.getElementById("pincode").value = "";
 for(let val of radioBtns){
 val.checked = false;
 }

for(let val of checkBox){
  val.checked = false
  }
 
 document.getElementById("others").value = "";
 document.getElementById("state").value = "";
 document.getElementById("country").value = "";

}
