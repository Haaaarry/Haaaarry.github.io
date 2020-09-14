let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fire-fox.jpg') {
      myImage.setAttribute('src', 'images/fire-fox2.jpg');
    } else {
      myImage.setAttribute('src', 'images/fire-fox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
 }