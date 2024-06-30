document.addEventListener('DOMContentLoaded',function(){



const old_screen = document.getElementById('login-page');

const guest_button = document.getElementById('guest-login');


const login_button  = document.getElementById('user-login');

const pass = document.getElementById('pass');


const loginpage = document.getElementById('welcome-page');




  function testMailandPassword(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const email = document.getElementById('mail')
    const errorElement = document.getElementById('err3');
    
    email.addEventListener('input', function(event) {

        const emailVal = event.target.value

        if (regex.test(emailVal)) {

            errorElement.style.display = "none";

        } else {

            errorElement.style.display = "block";
           

        }
    });

    const regexPass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const errorElement_2 = document.getElementById('err4')

    pass.addEventListener('input', function(event){
        const passVal = event.target.value;
        if(regexPass.test(passVal)) {
            errorElement_2.style.display ='none'
        }
        else{
            errorElement_2.style.display = 'block'
           
        }
    })

}
testMailandPassword();

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


function displayNewScreen(){

                login_button.addEventListener('click', function () {
                    let isFirstNameValid = checkfirstName();
                    let isLastNameValid = checklastName();
    
                    if (isFirstNameValid && isLastNameValid) {
                        loginpage.style.display = 'block';
                        // old_screen.style.display = 'none';
                        old_screen.remove();
                        window.location.href = "c.html";
                    }
                });
            }  

            displayNewScreen()
guest_button.addEventListener('click', function(){

    old_screen.remove();
   
    window.location.href='guesUSer.html'

})



})    
