////////////////////////////////////////////////////////////////////////////
// Cómo hacer que una imagen cambie por otra al hacer click (y viceversa).//
////////////////////////////////////////////////////////////////////////////
let myImage = document.querySelector('img');
let mySrc = myImage.getAttribute('src');
    
if (mySrc === '#'){
    myImage.setAttribute('src', '450_1000.jpg');
    mySrc = myImage.getAttribute('src');
};
    
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    mySrc === '450_1000.jpg' ? myImage.setAttribute('src', 'pathetic.jpg') : myImage.setAttribute('src', '450_1000.jpg');
};
///////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Agregar un mensaje personalizado de bienvenida.//
////////////////////////////////////////////////////
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let setUserName = () => {
    let myName = prompt('Please enter your name. ');
    if (!myName || myName === null){
        setUserName();
        // myHeading.textContent = 'Please provide a name.';
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
};

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
};

myButton.onclick = () => { setUserName(); };