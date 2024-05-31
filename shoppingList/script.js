const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('form-input');
const itemList = document.getElementById('item-list');

const clear =document.getElementById('clear')

const login_button = document.getElementById('log-in');

const old_screen = document.querySelector('.login');

const newScreen  = document.querySelector('.container')

const fname = document.querySelector('#fanme');
const contact = document.querySelector('#telephone')

function addItem(e){
    e.preventDefault();

    const newItem = itemInput.value;
    
    if(itemInput.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Item Input cannot be Empty',
            confirmButtonText: 'Okay'
        });
    }
    // if(newItem === ''){
    //     alert('Item Input cannot be Empty');
    //     return;
    // }
    
   const li = document.createElement('li');

   li.appendChild(document.createTextNode(newItem))

   const button = createButton('remove-item btn-link text-red');
   li.appendChild(button);
   
   itemList.appendChild(li);

   itemInput.value = '';
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon)
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className =classes;
    return icon;
}


function removeItem(e){
    e.preventDefault();


}

function removeItem(e){
  if(e.target.parentElement.classList.contains('remove-item')){
       
    e.target.parentElement.parentElement.remove();
  }
   
}


function clearItems(){
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
    //itemList.innerHTML = '';
  }
}

function showNextScreen(){
  
  old_screen.remove(); const newscreenElement = document.createElement("div");
  newScreen.style.background = 'linear-gradient(to right, #fff, #432343);'
  newScreen.style.display = 'block';


}


itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clear.addEventListener('click', clearItems);

login_button.addEventListener('click', showNextScreen);
