
// Function to get the value of a URL parameter
const screenWidth = window.innerWidth;
    const success_modID = screenWidth <= 610 ? 'successmode' : 'successmode_PC';
    const error_modID = screenWidth <= 610 ? 'errormode' : 'errormode_PC';
   
    
    
    const successModal = new bootstrap.Modal(document.getElementById(success_modID));
    const errorModal = new bootstrap.Modal(document.getElementById(error_modID));
    const spin = document.getElementById('spin_btn');
    const login_btn = document.getElementById('submit_btn');
   



function getURLParameter() {
  try{
    const params = new URLSearchParams(window.location.search);
    let de_uri = decodeURIComponent(params);
    var dec_params = decryptParam("afOQWEOFHOH123fwesdsdfperoJF89FDijfeiPEFjefpjvdsf==", de_uri, 14)
    let newdec_params = new URLSearchParams(dec_params);
    const id = newdec_params.get('id');
      return id;
    
  } catch (error){
      errorModal.show();
  }
    
  }
     
function president(){
  const selection = document.getElementsByName('entry.887255675');

  for (let i = 0; i < selection.length; i++) {
    if (selection[i].checked) {
        return selection[i].value 
    }
  }
  return "";
}

function vice_pres(){
  const selection = document.getElementsByName('entry.1756394048');

  for (let i = 0; i < selection.length; i++) {
    if (selection[i].checked) {
        return selection[i].value 
    }
  }
  return "";
}

function gen_sec(){
  const selection = document.getElementsByName('entry.1071378228');

  for (let i = 0; i < selection.length; i++) {
    if (selection[i].checked) {
        return selection[i].value 
    }
  }
  return "";
}

function organiser(){
  const selection = document.getElementsByName('entry.21126119');
  for (let i = 0; i < selection.length; i++) {
    if (selection[i].checked) {
        return selection[i].value 
    }
  }

  return "";
  
}


function submitVote() {
    const formUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdEMSNrN5qNgrOr9udSXO09tTDRR4C5uwY3qjYWtVStWLdYkw/formResponse?entry.2029922935=${getURLParameter()}&entry.887255675=${president()}&entry.1756394048=${vice_pres()}&entry.1071378228=${gen_sec()}&entry.21126119=${organiser()}`; // Replace YOUR_FORM_ID


    const userID = getURLParameter();

    if (president() === "" || vice_pres() === "" || gen_sec() === "" || organiser() === "" ){
      alert("Select at least one candidate from each section");
    }

    else if (userID === null || userID === "" || userID === undefined || !userID){
      errorModal.show();
    }
    
    else
    {

      spin.style.display = "block";
      login_btn.style.display = "none";

      

      setTimeout (() => { fetch(formUrl, {
        method: "GET"
      })
        spin.style.display = "none";
        login_btn.style.display = "block";

         

          successModal.show();

    }, 2000)

    setTimeout(() => {
      location.reload();
    }, 4000);

    }
  
  }

  function stringToHex(str) {
    return Array.from(str)
        .map(char => char.charCodeAt(0).toString(16).padStart(2, '0')) // Convert each character to Hex
        .join('');
    }

    // Function to convert Hex back to a string
    function hexToString(hex) {
        return hex.match(/.{1,2}/g) // Match pairs of Hex digits
            .map(byte => String.fromCharCode(parseInt(byte, 16))) // Convert Hex pairs to characters
            .join('');
    }


    // Caesar Cipher: Decrypt by reversing the shift
    function caesarCipherDecrypt(input, shift) {
        return input
            .split('')
            .map(char => String.fromCharCode((char.charCodeAt(0) - shift + 256) % 256)) // Reverse the shift
            .join('');
    }


  function decryptParam(secretKey, encryptedValue, shift) {
    // const combinedHexShifted = atob(encryptedValue); Step 1: Decode Base64 to shifted Hex
    const combinedHex = caesarCipherDecrypt(encryptedValue, shift); // Step 2: Reverse Caesar cipher
    const keyHex = stringToHex(secretKey); // Step 3: Convert secret key to Hex
    const valueHex = combinedHex.replace(keyHex, ""); // Step 4: Remove key's Hex part
    return hexToString(valueHex); // Step 5: Convert value's Hex back to original string
}







