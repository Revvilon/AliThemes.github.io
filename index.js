let myBoolean = false;
let myOtherBoolean = false;

console.log(myBoolean);

function navControl() {
    if (myBoolean == false) {
        document.getElementById("mySidenav").style.left = "0";
        document.getElementById("rotateMe").style = 'transform: rotate(-180deg)';
        document.getElementById("rotateMe").style.right = '24px';
        myBoolean = true;
    }
    else {
        document.getElementById("mySidenav").style.left = "-250px";
        document.getElementById("rotateMe").style = 'transform: rotate(0deg)';
        document.getElementById("rotateMe").style.right = '20px';
        document.getElementById('flyMeIn').style.left = '-280px';
        myBoolean = false;
    }
}

function myFaq() {
    if (myOtherBoolean == false) {
        document.getElementById('flyMeIn').style.left = '0';
        myOtherBoolean = true;
    }
    else {
        document.getElementById('flyMeIn').style.left = '-280px';
        myOtherBoolean = false;
    }
}

let onyx = document.getElementById('changemyhref');
let secretVariable = 0;

function myFunction(x) {
    if (secretVariable > 4) {
        secretVariable = 0;
        onyx.href="https://discordapp.com/users/173723461619810304";
        onyx.target="_blank"
    }
    secretVariable = secretVariable + x;
    console.log(secretVariable);
    if (secretVariable == 5) {
        console.log("you did it");
        onyx.href="subpages/secretpage.html";
        onyx.target="_self"
    }
}

function resetVariable() {
    secretVariable = 0;
}
