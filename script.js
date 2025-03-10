//your JS code here. If required.
// Handle form submission and promise logic
document.getElementById('votingForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  
  // Get user inputs
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Validation: Check if both fields are filled
  if (!name || !age) {
    alert("Please enter valid details.");
    return; // Exit if validation fails
  }

  // Convert age to number
  const userAge = Number(age);

  // Promise logic for voting eligibility
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userAge >= 18) {
        resolve(name); // Resolve if user is 18 or older
      } else {
        reject(name); // Reject if user is under 18
      }
    }, 4000); // 4-second delay
  });

  // Handle promise resolution and rejection
  checkEligibility
    .then((userName) => {
      alert(`Welcome, ${userName}. You can vote.`);
    })
    .catch((userName) => {
      alert(`Oh sorry ${userName}. You aren't old enough.`);
    });
});