
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

const checkmark = document.getElementById('checkmark');
const wrongmark = socument.getElementById('wrong-checkmark');


function submitVote() {
    const formUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdEMSNrN5qNgrOr9udSXO09tTDRR4C5uwY3qjYWtVStWLdYkw/formResponse?entry.2029922935=${getURLParameter()}&entry.887255675=${president()}&entry.1756394048=${vice_pres()}&entry.1071378228=${gen_sec()}&entry.21126119=${organiser()}`; // Replace YOUR_FORM_ID
    const successModal = new bootstrap.Modal(document.getElementById('successmode'));
    const errorModal = new bootstrap.Modal(document.getElementById('errormode'));
    const spin = document.getElementById('spin_btn');
    const login_btn = document.getElementById('submit_btn');


    const userID = getURLParameter();
    const url = window.location.href;
   


    if (president() === "" || vice_pres() === "" || gen_sec() === "" || organiser() === "" ){
      alert("Select at least one candidate from each section");
    }

    else if (userID === null || userID === ""){
    
      errorModal.show();
      wrongmark.seek(0);
      wrongmark.play();
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
          checkmark.seek(0);
          checkmark.play(); 

    }, 2000)

    setTimeout(() => {
      window.location.replace("free.html");
    }, 4000);

    }
  
  }

  
//   let db;

//   // Initialize IndexedDB
// const initDB = () => {
//   const request = indexedDB.open('VotingDB', 1);

//   request.onupgradeneeded = (event) => {
//       db = event.target.result;
//       if (!db.objectStoreNames.contains('Votes')) {
//           db.createObjectStore('Votes', { keyPath: 'userID' });
//       }
//   };

//   request.onsuccess = (event) => {
//       db = event.target.result;
//       console.log('Database initialized successfully.');
//   };

//   request.onerror = (event) => {
//       console.error('Error initializing database:', event.target.errorCode);
//   };
// };

// // Check if the user ID exists in the database
// const checkVote = (userID) => {
//   return new Promise((resolve, reject) => {
//       const transaction = db.transaction(['Votes'], 'readonly');
//       const store = transaction.objectStore('Votes');
//       const request = store.get(userID);

//       request.onsuccess = () => {
//           resolve(request.result ? true : false);
//       };

//       request.onerror = () => {
//           reject('Error checking the database.');
//       };
//   });
// };

//   // Add a new vote to the database
//   const addVote = (userID) => {
//       return new Promise((resolve, reject) => {
//           const transaction = db.transaction(['Votes'], 'readwrite');
//           const store = transaction.objectStore('Votes');
//           const request = store.add({ userID });

//           request.onsuccess = () => {
//               resolve('Vote successfully recorded.');
//           };

//           request.onerror = () => {
//               reject('Error adding vote to the database.');
//           };
//       });
//   };

//         // Handle the voting process
//         document.getElementById('vote-button').addEventListener('click', async () => {
//             const userID = getURLParameter();

//             try {
//                 const hasVoted = await checkVote(userID);

//                 if (hasVoted) {
//                     message.textContent = `User ID "${userID}" has already voted.`;
//                 } else {
//                     await addVote(userID);
//                     message.textContent = `Vote recorded for User ID "${userID}". Thank you!`;
//                 }
//             } catch (error) {
//                 console.error(error);
//                 message.textContent = 'An error occurred. Please try again.';
//             }
//         });

//         // Initialize the database
//         initDB();







