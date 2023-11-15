// Function to update the last updated date

function updateLastUpdatedDate() {
    var lastUpdatedDiv = document.getElementById('last-updated');
    if (lastUpdatedDiv) { // Check if the element exists
      var today = new Date();
      var dateString = today.toLocaleDateString('en-GB', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
      lastUpdatedDiv.textContent = 'Last updated ' + dateString;
    }
  }
  
  document.addEventListener('DOMContentLoaded', updateLastUpdatedDate);

 // Function to update the copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const copyrightDiv = document.getElementById('copyright');
    copyrightDiv.textContent = `© ${currentYear} Karin Nielsen. All Rights Reserved.`; // Update the text content
  }
  
  // Update the copyright year when the document loads
  document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
  });
  