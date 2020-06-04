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

