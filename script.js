function myFunction(event) {
    var nam = document.getElementById("fn").value;
    var age = document.getElementById("age").value;
    var edu = document.querySelector('input[name="Education"]:checked'); // Get the checked radio button
    
    if (nam == "" || age == "" || edu == null) { // Check if any field is empty
        alert("All fields are mandatory!");
        return false; // Prevent form submission
    }
    
    alert("Form submitted successfully!");
    console.log('Name:', nam);
    console.log('Age:', age);
    console.log('Education:', edu.value);
    return true; // Allow form submission
}
