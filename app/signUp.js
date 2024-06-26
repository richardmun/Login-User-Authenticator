// Start process for user to proccess their sign up.
// Event will start when user clicks on "Confirm Registration"
document.addEventListener("DOMContentLoaded", function() {
    confirmRegistration()
    

});

// Function will acknowledge email and password entered by user and will undergo a validation process.
function confirmRegistration() {
    var form = document.getElementById("signUpForm")
    form.addEventListener("submit", function(event) {
        event.preventionDefault();

    //var newEmail = document.getElementById("newEmail").value;
    var newEmail = document.getElementById("newEmail").value;
    var newPassword = document.getElementById("newPassword").value;

    emailInTxtFile(newEmail);
    passwordInTxtFile(newPassword);


    });
};

// Function to read, write, execute into txt file.

/* If newEmail includes  requiredCharacter through char then return true to print console.log "valid" else "invalid"
*/
function emailInTxtFile(newEmail) {
    let boolean = true;
    let requiredCharacter = ["@", ".", "com"]; // Required char that need to be within email
    for (let char of requiredCharacter) { // Iterate through char from requiredCharacter array
        if (!newEmail.includes(char)) { // If char from requiredCharacters are NOT included in newEmail then...
            boolean = false; // ... set boolean to false
        }
    }

    // Read & write into txt file
    if (boolean == true) { // If all char from requiredCharacters are within email then access textfile and write email into file.
        const fs = require('fs');
        fs.readFile('savedLogin.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(data);
        });
    
        // Write content into txt file
        fs.writeFile('savedLogin.txt', newEmail, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Email saved successfully.");
        });
    } else {
        alert("Invalid Email")
    }
};


// If password is less than 8 characters -> "Password needs to be more than 8 characters"
// If password does not contain at least 1 capital letter -> "Password requires at least one capital letter"
// If password does not contain at least 1 integer -> "Password requires at least one integer"
// If password does not contain at least 1 special character -> "Password requires at least one special character."

// After password is valid, store password string in txt file.

function passwordInTxtFile(newPassword) {
    if (newPassword.length >= 8) { // Checks if password is at least 8 characters.
        if (newPassword.match(/[A-Z]/g)) { // Checks if password contains at least one capital letter.
          if (newPassword.match(/[0-9]/)) { // Checks if password contains at least one integer.
            if (newPassword.match(/[!@#$%^&*()]/)) { // Checks if password contains at least one special character.
                const fs = require("fs");
                //fs.readFile( file_name, encoding, callback_function )
                fs.readFile('savedLogin.txt', 'utf-8', (err, data) => { // (Encoding: UTF-8 -> Default setting) (Callback: invoked after file is read. It returns error or data within file)
                    if (err) { // Error will produce if process is not successful.
                        console.log(err);
                        return;
                    }
                    console.log(data);
            });
                // fs.writeFile( file_name, data, options, callback )
                fs.writeFile('savedLogin.txt', newPassword, (err, data) => { // (Data: newPassword -> Data sent to file) (Options: String or object used to indicate output options.)
                    if (err) { // Error will produce if process is not successful.
                        console.log(err)
                        return
                    }
                    console.log("Password saved successfully");
                });

            } else {
              console.log("Requires at least one special character.");
            }
          } else {
            console.log("Requires at least one integer.");
          }
        } else {
          console.log("Requires at least one capital letter");
        }
      } else {
        console.log("Add more characters");
    }

}




// Problem
    // As soon as I go to sign up page, it automatically submits which produces a error message for password requirements.
    // Need to solve how to stop the page from automatically submitting.
// SOLVED***
    // Code instruction was not within the submit function.