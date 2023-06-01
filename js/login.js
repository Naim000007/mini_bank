//step-1 : add event handeler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2 : get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step 3: get password
    //3.a set id on the html
    //3.b get the element 
    //3.c get the value from the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //Danger : do not verify email password on the client side
    //step 4 : verify email and password 
    if (email==='naim@gmail.com' && password=='123'){
        console.log('vailed user');

    }
    else{
          alert ('vul val user ')
        
    }

    
})