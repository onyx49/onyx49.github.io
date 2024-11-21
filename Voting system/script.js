function submitVote(candidate) {
    const formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"; // Replace YOUR_FORM_ID
    const formData = new FormData();
    const entryId = "entry.YOUR_ENTRY_ID"; // Replace with the Google Form's entry ID for the question.
  
    formData.append(entryId, candidate);
  
    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        alert(`Thank you for voting for ${candidate}!`);
      })
      .catch((error) => {
        console.error("Error submitting vote:", error);
        alert("There was an error submitting your vote. Please try again.");
      });
  }

// Function to handle image selection and deselection
function selectCandidate(element, role) {
    // Check if the clicked candidate is already selected
    if (element.classList.contains('selected')) {
        // Deselect the image
        element.classList.remove('selected');
        return; // Exit the function
    }

    // Otherwise, deselect all candidates in this category
    const candidates = document.querySelectorAll(`#${role}-candidates .candidate`);
    candidates.forEach(candidate => candidate.classList.remove('selected'));

    // Select the clicked candidate
    element.classList.add('selected');
}


// Function to handle image selection and deselection
function selectCandidate(element, role) {
    // Get all candidates in the specific category
    const candidates = document.querySelectorAll(`#${role}-candidates .candidate`);

    // Check if the clicked element is already selected
    const isSelected = element.classList.contains('selected');

    // Remove 'selected' class from all candidates in the category
    candidates.forEach(candidate => candidate.classList.remove('selected'));

    // If the clicked element was not already selected, select it
    if (!isSelected) {
        element.classList.add('selected');
    }
}

// Function to validate that a candidate has been selected in every category
function validateSelection() {
    // List of all category IDs
    const categories = ['president', 'vice-president', 'general-secretary', 'organiser'];
    
    // Check each category for a selected candidate
    for (const category of categories) {
        const selected = document.querySelector(`#${category}-candidates .candidate.selected`);
        if (!selected) {
            alert(`Please select a candidate for ${category.replace('_', ' ')}.`);
            return false;
        }
    }
    
    // If all categories have selections, allow submission
    alert('Vote submitted successfully!');
    return true;
}

// Attach the validateSelection function to the Submit button
document.querySelector('.submit-btn').addEventListener('click', validateSelection);

