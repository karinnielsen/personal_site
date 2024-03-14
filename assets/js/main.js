// Function to update the last updated date
function updateLastUpdatedDate() {
  var lastUpdatedDiv = document.getElementById('last-updated');
  if (lastUpdatedDiv) {
      // Manually set the last updated date here
      var lastUpdatedDate = "8 March 2024"; // Format: "Day Month Year"
      lastUpdatedDiv.textContent = 'Last updated ' + lastUpdatedDate;
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

  // Handcoded with emojis animation
const emojis = ["🍵", "💜", "🧘"]; 
let emojiIndex = 0;

function cycleEmojis() {
  const handcodedInfo = document.getElementById('handcoded-info');
  if (handcodedInfo) {
    handcodedInfo.textContent = `Crafted pixel by pixel with ${emojis[emojiIndex]} by me`;
    emojiIndex = (emojiIndex + 1) % emojis.length; // Cycle through the emojis
  }
}
// Update emoji every 2 seconds (2000 milliseconds)
setInterval(cycleEmojis, 2000);

// Function to reset button and link states on page reload
document.addEventListener("DOMContentLoaded", () => {
  // Select both links and buttons
  const elements = document.querySelectorAll('a, button');

  // Add blur event listeners to reset the focus state
  elements.forEach(element => {
    element.addEventListener('blur', () => {
      element.blur(); // Forces the element to lose focus
    });
  });
});


