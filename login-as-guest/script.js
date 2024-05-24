document.addEventListener('DOMContentLoaded',function(){

const new_screen = document.getElementById('guest-user-login');

const old_screen = document.getElementById('login-page');

const guest_button = document.getElementById('guest-login');

const login_button  = document.getElementById('user-login');

const loginpage = document.getElementById('welcome-page');




  function testMail(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const email = document.getElementById('mail')
    const errorElement = document.getElementById('err3');
    
    email.addEventListener('input', function(event) {

        const emailVal = event.target.value

        if (regex.test(emailVal)) {

            errorElement.style.display = "none";

        } else {

            errorElement.style.display = "block";
            return false

        }
    });

}
testMail();

let checkfirstName = function(){
    const checkFname = document.getElementById("fname");
    const _err = document.getElementById('err1')
     
    if(checkFname.value===""){
        _err.style.display = "block"
        
    }
}





let checklastName = function(){
    const checkLname = document.getElementById('lname')
    const _err1 = document.getElementById('err2');

    if(checkLname.value===""){
        _err1.style.display ='block'
       
    }
}


login_button.addEventListener('click', function(){
   let x = checkfirstName();
   let y=  checklastName();
   
   
   if (x && y) {
    window.loginpage.style.display = 'block';
    
    old_screen.remove();
} else {
    // Handle the case where first name or last name checks fail
    console.error("First name or last name check failed");
}
})


guest_button.addEventListener('click', function(){

    old_screen.remove();

    new_screen.style.display='block'

})
})