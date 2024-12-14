
// Function to get the value of a URL parameter
function getURLParameter() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id"); // Get the value of the specified parameter
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
    
    const screenWidth = window.innerWidth;
    const success_modID = screenWidth <= 580 ? 'successmode' : 'successmode_PC';
    const error_modID = screenWidth <= 580 ? 'errormode' : 'errormode_PC';
   
    
    
    const successModal = new bootstrap.Modal(document.getElementById(success_modID));
    const errorModal = new bootstrap.Modal(document.getElementById(error_modID));
    const spin = document.getElementById('spin_btn');
    const login_btn = document.getElementById('submit_btn');

   
    


    const userID = getURLParameter();
    const url = window.location.href;
   


    if (president() === "" || vice_pres() === "" || gen_sec() === "" || organiser() === "" ){
      alert("Select at least one candidate from each section");
    }

    else if (userID === null || userID === ""){
    
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
      window.location.replace("free.html");
    }, 4000);

    }
  
  }

  







