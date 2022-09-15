let userNameInput=('Chris')
let vinInput=(123456);
let milesInput=(50000);
let emailInput=('chris@email.com');
let userPasswordInput=('Password')
let userPasswordConfirmInput=('Password')

let newUser = {name: "", vin: "", miles: "", email: "", password: "",};


function submitinfo() {

    if (userNameInput != document.getElementById("username").value) {
        console.log('New User');
        // console.log(document.getElementById("username").value);
        newUser.name = document.getElementById("username").value;
        newUser.vin = document.getElementById("vin").value;
        newUser.miles = document.getElementById("miles").value;
        newUser.email = document.getElementById("email").value;
        
        if (document.getElementById("userPassword").value != document.getElementById("userPasswordConfirm").value) {
            console.log('Passwords do not match');
        
        } else {

        newUser.name = document.getElementById("userPassword").value;
        newUser.name = document.getElementById("username").value;

        }
        
        console.log(newUser)

    }   else {
        
            console.log('User Already Exists');
            
        }
}



newUser


