// window object is the parent object of broser
    // console.log(window); 
    // window.alert("Hi")


/// Single Elemenet

// console.log(document.getElementById('my-form')); 

// // with query selector we can select any element
// const form = document.querySelector('#my-form');
// console.log(form);

// console.log(document.querySelector('.container'));

// console.log(document.querySelector('h1'));


// /// Multiple Element

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// // it is recommended to use use querySelectorAll querySelector getElementById than others
// // because, unlike nodelist , html collections cant use arrya methods, has to manually convert into arrays.


// /// looping

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));


// /// Manupilating DOM

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerHTML = 'Anuka';
// ul.lastElementChild.innerHTML = '<h1>You naughty boi</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'teal';

//-----------------------------------------------------------

/// Events
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) =>{
//     e.preventDefault(); //disable previous behaviours
//     // console.log('click');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.className);

//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('h1').textContent = 'JS For Loosers';
//     document.querySelector('.item').lastElementChild.innerHTML = '<h2>Made with Love</h2>'
// });

// const btn1 = document.querySelector('.btn');

// btn1.addEventListener('mouseover', (e) =>{
//     e.preventDefault(); 
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('h1').textContent = 'JS For Loosers';
//     document.querySelector('.items').lastElementChild.innerHTML = '<h2>Mouse Over</h2>'
// })

// check out mdn for more events....

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    
    // Validation
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = '<center>Please enter all fields ! </center>';
        setTimeout(() => msg.remove(), 3000) //3secs
    } else {
        // Insert
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        // Insert new node to user list with values
        userList.appendChild(li);

        // Clear input fields 
        nameInput.value = '';
        emailInput.value ='';
    }
}

