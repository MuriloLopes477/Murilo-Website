

let right = document.getElementById("right");
let left = document.getElementById("left");
var i = 0;

let worlds = document.getElementById("worlds");
let swerve = document.getElementById("swerve");
let CAP = document.getElementById("CAPSTONE");
let Intern = document.getElementById("intern");
let GBG = document.getElementById("goBabyGo");
let kev = document.getElementById("kev");

let exit = document.getElementById("exit");

let roboticsInfo = document.getElementById("worldsInfo");
let capstoneInfo = document.getElementById("CAPInfo");
let internInfo = document.getElementById("intInfo");
let swerveInfo = document.getElementById("swerveInfo");
let GBGInfo = document.getElementById("GBGInfo");
let kevInfo = document.getElementById("kevInfo");
/*
Deactive

EXP.classList.add("deactive");
EXP.classList.remove("active");
*/

/*
Active

EXP.classList.add("active")
EXP.classList.remove("deactive")
*/

kev.addEventListener("click", function() {
    exit.classList.remove("deactiveInfo");
    exit.classList.add("activeInfo");
    kevInfo.classList.remove("deactiveInfo");
    kevInfo.classList.add("activeInfo");
})

GBG.addEventListener("click", function() {
    exit.classList.remove("deactiveInfo");
    exit.classList.add("activeInfo");
    GBGInfo.classList.remove("deactiveInfo");
    GBGInfo.classList.add("activeInfo");
})

swerve.addEventListener("click", function() {
    exit.classList.remove("deactiveInfo");
    exit.classList.add("activeInfo");
    swerveInfo.classList.remove("deactiveInfo");
    swerveInfo.classList.add("activeInfo");
})

Intern.addEventListener("click", function() {
    exit.classList.remove("deactiveInfo");
    exit.classList.add("activeInfo");
    internInfo.classList.remove("deactiveInfo");
    internInfo.classList.add("activeInfo");
})

CAP.addEventListener("click", function() {
    exit.classList.remove("deactiveInfo");
    exit.classList.add("activeInfo");
    capstoneInfo.classList.remove("deactiveInfo");
    capstoneInfo.classList.add("activeInfo");
})

worlds.addEventListener("click", function() {
    roboticsInfo.classList.remove("deactiveInfo");
    roboticsInfo.classList.add("activeInfo");
    exit.classList.remove("deactiveInfo");
    exit.classList.add("activeInfo");
})

exit.addEventListener("click", function() {
    roboticsInfo.classList.add("deactiveInfo");
    roboticsInfo.classList.remove("activeInfo");
    exit.classList.remove("activeInfo");
    exit.classList.add("deactiveInfo");
    capstoneInfo.classList.remove("activeInfo");
    capstoneInfo.classList.add("deactiveInfo"); 
    internInfo.classList.remove("activeInfo");
    internInfo.classList.add("deactiveInfo");
    swerveInfo.classList.remove("activeInfo");
    swerveInfo.classList.add("deactiveInfo");
    GBGInfo.classList.add("deactiveInfo");
    GBGInfo.classList.add("activeInfo");    
    kevInfo.classList.add("deactiveInfo");
    kevInfo.classList.add("activeInfo");    
})

right.addEventListener("click", function() {
    if (i <= 4) {
        i++;
    } else {
        i = 0;
    }  
    popUp();
})

left.addEventListener("click", function() {
    if (i >= 1 ) {
        i--;
    } else {
        i = 5;
    }
    popUp();
})

function popUp() {
    console.log(i);

    worlds.classList.remove("active");
    swerve.classList.remove("active");
    CAP.classList.remove("active");
    Intern.classList.remove("active");
    GBG.classList.remove("active");
    kev.classList.remove("active");

    worlds.classList.add("deactive");
    swerve.classList.add("deactive");
    CAP.classList.add("deactive");
    Intern.classList.add("deactive");
    GBG.classList.add("deactive");
    kev.classList.add("deactive");

    if ( i == 0 ) {
        swerve.classList.add("active");
        swerve.classList.remove("deactive");
    } else if ( i == 1) {
        worlds.classList.add("active");
        worlds.classList.remove("deactive");
    } else if ( i == 2 ) {
        CAP.classList.add("active");
        CAP.classList.remove("deactive");
    } else if ( i == 3 ) {
        Intern.classList.add("active");
        Intern.classList.remove("deactive");
    } else if ( i == 4 ) {
        GBG.classList.add("active");
        GBG.classList.remove("deactive");
    } else if ( i == 5 ) {
        kev.classList.add("active");
        kev.classList.remove("deactive");
    }
}
