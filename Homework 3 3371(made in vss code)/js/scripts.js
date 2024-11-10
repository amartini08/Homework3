/*
 Name: Alexandre Martini De Souza
    Date Created:11/1/24
    Date last updated: 11/10/24
    Purpose: Homework 3 Java Form
*/


//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;


//range slider code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};


    //name validation
    function validateFname() {
        let fname = document.getElementById("fname").value.trim();
        var namePattern = /^[a-zA-Z'-]+$/;
        //CHEKCS IF FIRST NAME FIELD IS EMPTY
        if (fname == "") {
            document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
            return false;
        } else if (!fname.match(namePattern)) {
            document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
            return false;
        } else if (fname.length < 2) { //checks if name is at least 2 characters
            document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
            return false;
        } else if (fname.length > 30) { //checks if name is more than 30 characters 
            document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
            return false;
        } else {
            document.getElementById("fname-error").innerHTML = "";
            return true;
        }
    }

    function validatelname() {
        let lname = document.getElementById("lname").value.trim();
        var namePattern = /^[a-zA-Z'-]+$/;
        //CHEKCS IF LAST NAME FIELD IS EMPTY
        if (lname == "") {
            document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
            return false;
        } else if (!lname.match(namePattern)) {
            document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
            return false;
        } else if (lname.length < 2) { //checks if name is at least 2 characters
            document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
            return false;
        } else if (lname.length > 30) { //checks if name is more than 30 characters 
            document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
            return false;
        } else {
            document.getElementById("lname-error").innerHTML = "";
            return true; 
        }
    }

    function validateminit() {
        let minit = document.getElementById("minit").value.trim();
        var namePattern = /^[A-Z]$/;

        minit = minit.toUpperCase();
        document.getElementById("minit").value = minit;
        //CHEKCS IF MIDDLE INITIAL FIELD IS EMPTY
        if (minit !== "" && !minit.match(namePattern)) {
            document.getElementById("minit-error").innerHTML = "Middle initial must be a single uppercase letter.";
            return false;
        } else {
            document.getElementById("minit-error").innerHTML = "";
            return true; 
        }
    }
    

    //DOB validation
    function validatedob() {
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future.";
        dob.value="";
        return false;
    } else if(date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago";
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true
 
    }
}
        //ssn validation js 
    function validatessn() {
        const ssn = document.getElementById("ssn").value;

        //regex for ssn 
        const ssnR =  /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
        
        if (!ssnR.test(ssn)) {
            document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number.";
            return false;
            } else {
                document.getElementById("ssn-error").innerHTML = "";
                return true;
            }
}
// address 1 validation
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (adi.length < 2) {
        document.getElementById("address1-error").innerHTML = "please enter something on address line";
        return false;
    } else {
            document.getElementById("address1-error").innerHTML = "";
            return true;
        }

    }

//city validate js code
    function validateCity() {
        city = document.getElementById("city").value.trim();
        if (!city) {
            document.getElementById("city-error").innerHTML = "City cannot be left blank.";
            return false;
        } else {
            document.getElementById("city-error").innerHTML = "";
            return true;

        }
    }
    
    
    
    
    
    
    //zip code validation

    function validatezcode() {
        const zipInput = document.getElementById("zcode");
        let zip = zipInput.value.replace(/[^\d-]/g,"") //remove non number and non dash char

        if (!zip) { 
        document.getElementById("zcode-error").innerHTML = "Zip code cannot be left blank.";
        return false;



        }
        if (zip.length > 5) {
            zip = zip.slice(0,5); //removes all digits after first 5

        }
        zipInput.value = zip;
        document.getElementById("zcode-error").innerHTML = "";
        return true;

    
        
    }
    
    //email validation js code
    function validateemail() {
        let email = document.getElementById("email").value.trim();
        var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email

        if (email == "") {
            document.getElementById("email-error").innerHTML = "Email cannot be empty.";
            return false;
        } else if (!email.match(emailR)){
            document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
            return false;
        } else {
            document.getElementById("email-error").innerHTML = "";
            return true;
        }
    }

    
    //phone number validation js 
    function validatepnumb() {
        const phoneInput = document.getElementById("phoneNumber");
        const phone = phoneInput.value.replace(/\D/g,""); // removes all non number characters

        if (phone.length === 0) {
            document.getElementById("pnumb-error").innerHTML = "Phone number cannot be left blank.";
            return false;
        }
        
        const formattedPhone = phone.substring(0,3) + "-" + phone.substring(3,6) + "-" + phone.substring(6,10);
        phoneInput.value = formattedPhone;
        document.getElementById("pnumb-error").innerHTML = "";
        return true;
    }

    const isNumericInput = (event) => {
        const key = event.keyCode;
        return ((key >= 48 && key <= 57) || // Allow number line
            (key >= 96 && key <= 105) // Allow number pad
        );
    };
    
    const isModifierKey = (event) => {
        const key = event.keyCode;
        return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
            (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
            (key > 36 && key < 41) || // Allow left, up, right, down
            (
                // Allow Ctrl/Command + A,C,V,X,Z
                (event.ctrlKey === true || event.metaKey === true) &&
                (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
            )
    };
    
    const enforceFormat = (event) => {
        // Input must be of a valid number format or a modifier key, and not longer than ten digits
        if(!isNumericInput(event) && !isModifierKey(event)){
            event.preventDefault();
        }
    };
    
    const formatToPhone = (event) => {
        if(isModifierKey(event)) {return;}
    
        const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
        const areaCode = input.substring(0,3);
        const middle = input.substring(3,6);
        const last = input.substring(6,10);
    
        if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
        else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
        else if(input.length > 0){event.target.value = `(${areaCode}`;}
    };
    
    const inputElement = document.getElementById('phoneNumber');
    inputElement.addEventListener('keydown',enforceFormat);
    inputElement.addEventListener('keyup',formatToPhone);


    //username validation js code

    function validateUname()
    {
        let uname = document.getElementById("uname").value.trim();

        //convert uname to lowercase
        uname = uname.toLowerCase();

        //display username in lowercase
        document.getElementById("uname").value = uname;
        if (uname.length == 0) {
            document.getElementById("uname-error").innerHTML = "Username field cannot be empty.";
            return false;
        }
        //checks uname does not begin w/ number
        if (!isNaN(uname.charAt(0))) {
            document.getElementById("uname-error").innerHTML = "Username cannot begin with a number.";
            return false;
        }
        //checks that username consists of only letters, numbers, or underscores
        let regex = /^[a-zA-Z0-9_]+$/;
        if (!regex.test(uname)) {
            document.getElementById("uname-error").innerHTML = "Username can only contain letters, numbers, or underscores.";
            return false;
        } else if (uname.length < 5) {
            document.getElementById("uname-error").innerHTML = "Username must be at least 5 characters.";
            return false;
        } else if (uname.length > 20) { //checks that username does not have more than 20 characters
            document.getElementById("uname-error").innerHTML = "Username cannot exceed 20 characters.";
            return false;
        } else { // if above checks user is valid
            document.getElementById("uname-error").innerHTML = "";
            return true;
        }
    }

    //password validation js code 
    
    function validatepword() {
        const pword = document.getElementById("pword").value;
        const uname = document.getElementById("uname").value;
        
        //sets up and init array
        const errorMessage = [];

        //check for lowercase letters
        
        if (!pword.match(/[a-z]/)) {
            errorMessage.push("Enter at least one lowercase letter.");
        }

        //check for uppercase letters

        if (!pword.match(/[A-Z]/)) {
            errorMessage.push("Enter at least one uppercase letter.");
        }

        //check for numbers
        if (!pword.match(/[0-9]/)) {
            errorMessage.push("Enter at least one number.");
        }
        
        //check for special characters
        if (!pword.match(/[!@#$%^&*\-_\\.+\(\)]/)) {
            errorMessage.push("Enter at least special character.");
        }


        //check for username not in password
        if (!pword == uname || pword.includes(uname)) {
            errorMessage.push("Password cannot contain username.");
        }
    

    //displays error message if there any errors
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");

    }

    //confirm password validation js code
    function confirmPassword() {
        let pword1 = document.getElementById("pword").value;
        let pword2 = document.getElementById("cpword").value;

        if (pword1 !== pword2) {
            document.getElementById("cpword-error").innerHTML = "Passwords do not match.";
            return false;
        } else {
            document.getElementById("cpword-error").innerHTML = "";
            return true;
        }
    }
    
    function reviewInput() {
        const formcontent = document.getElementById("signup");
        let formoutput = "<table class='output'><tr><th colspan='3'>Your Information:</th></tr>";
        
        for (let i = 0; i < formcontent.elements.length; i++) {
            const element = formcontent.elements[i];
            const type = element.type;
    
            // Skip buttons and empty fields
            if (["submit", "reset", "button"].includes(type) || !element.value) continue;
    
            // Determine the label text and the value entered
            let label = element.previousElementSibling ? element.previousElementSibling.textContent : element.name;
            let value = element.value;
    
            // Check validity and set Correct/Incorrect based on validation
            let validationStatus = element.checkValidity() ? "Correct" : "Incorrect";
    
            // Checkbox and Radio display adjustments
            if (type === "checkbox" || type === "radio") {
                if (!element.checked) continue;
                value = element.nextElementSibling ? element.nextElementSibling.textContent : value;
            }
    
            // Add row with label, value, and validation status
            formoutput += `
                <tr>
                    <td align="right">${label}:</td>
                    <td class="outputdata">${value}</td>
                    <td>${validationStatus}</td>
                </tr>`;
        }
        
        formoutput += "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
    

    //show alert box when needed js code
    function showAlert() {
        var alertBox = document.getElementById("alert-box");
        var closeAlert = document.getElementById("close-alert");

        alertBox.style.display = "block";
        closeAlert.onclick = function() {
            alertBox.style.display = "none";
        }
    }

    //validate entire form js code and if valid allow submit

    function validateEverything() {
        let valid = true;

        if (!validateFname()) {
            valid = false;
        }
        if (!validatelname()) {
            valid = false;
        }
        if (!validateminit()) {
            valid = false;
        }
        if (!validatedob()) {
            valid = false;
        }
        if (!validatessn()) {
            valid = false;
        }
        if (!validateAddress1()) {
            valid = false;
        }
        if (!validateCity()) {
            valid = false;
        }
        if (!validatezcode()) {
            valid = false;
        }
        if (!validateemail()) {
            valid = false;
        }
        if (!validatepnumb()) {
            valid = false;
        }
        if (!validateUname()) {
            valid = false;
        }
        if (!validatepword()) {
            valid = false;
        }
        if (!confirmPassword()) {
            valid = false;
        }
        if (valid) {
            document.getElementById("submit").disabled = false;
        } else {
            showAlert();
        }
    }

// Ensure the validate button displays the alert box when clicked (probably redudntent but just in case)
document.getElementById("validate").addEventListener("click", validateEverything);