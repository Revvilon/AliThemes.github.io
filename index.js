function navControl() {
    document.getElementById("mySidenav").classList.toggle('activeNav');
    document.getElementById("rotateMe").classList.toggle('activeRotate');
}

function myFaq() {
    document.getElementById('flyMeIn').classList.toggle('faqActive');
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
        console.log("now click on the name");
        onyx.href="subpages/secretpage";
        onyx.target="_self"
    }
}

function resetVariable() {
    secretVariable = 0;
}
