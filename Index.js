var loadingBar = document.getElementById("Bar");

var used = 815;
document.getElementById("used").innerHTML = used + "GB";

loadingBarLength = used / 2;

loadingBar.style.width = loadingBarLength + "px";
