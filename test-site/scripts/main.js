/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable;
myVariable = '李磊';
myVariable;
document.querySelector('html').addEventListener('click',() => {
    alert('别点，你买不起！！！');
})
*/


let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/faze.png'){
        myImage.setAttribute('src', 'images/cloud9.png');
    }else{
        myImage.setAttribute('src', 'images/faze.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你想燃的饰品');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + '开燃！！！';
    }
}

myButton.onclick = function(){
    setUserName();
}