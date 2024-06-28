document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    var day = parseInt(document.getElementById('dob').value);
    var month = parseInt(document.getElementById('mob').value) - 1; // Month is zero-indexed
    var year = parseInt(document.getElementById('yob').value);

    // Create date object from user input
    var birthDate = new Date(year, month, day);

    // Validate if the input date is valid
    if (isNaN(birthDate.getTime())) {
        document.getElementById('ageResult').innerHTML = '<p>Please enter a valid date.</p>';
        return;
    }

    // Calculate age
    var ageDifMs = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDifMs); 
    var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    // Display result
    document.getElementById('ageResult').innerHTML = '<p>Your age is: ' + calculatedAge + ' years</p>';
});
