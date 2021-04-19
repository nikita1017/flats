let knopkaRight = document.getElementById("knopkaRight")
let knopkaLeft = document.getElementById("knopkaLeft")
let commentLeft = document.getElementById("commentLeft")
let commentRight = document.getElementById("commentRight")
let slider = document.getElementById("slider")
let dist = 0;
let pairs = document.getElementsByClassName("pair")
knopkaRight.onclick = function () {
    dist = dist + 100;
    dist = dist % (slider.children.length * 100);
    console.log(dist);
    console.log("Go right");
    slider.style.transform = "translateX(-" + dist + "%)";
}
knopkaLeft.onclick = function () {
    dist = dist - 100;
    if (dist == -100) {
        dist = 100 * (slider.children.length - 1)
    }
    console.log(dist);
    console.log("Go Left");
    slider.style.transform = "translateX(-" + dist + "%)";
}
commentLeft.onclick = function () {
    console.log("18")                                 
    let activePair = document.getElementsByClassName("activePair")[0]
    let prevPair;
    if (activePair.previousElementSibling){
    prevPair=activePair.previousElementSibling
    }                                        
    else{
    prevPair = pairs[2]
    }
    activePair.classList.remove("activePair");
    setTimeout(function () {
        prevPair.classList.add("activePair");
        },300)
    

}
commentRight.onclick = function () {
    console.log("18")
    let activePair = document.getElementsByClassName("activePair")[0];
    console.log(activePair.nextElementSibling);
    let nextPair = activePair.nextElementSibling;
    if (activePair.nextElementSibling.classList[0] == "pair") {
        nextPair = activePair.nextElementSibling;
    }
    else {
        nextPair = pairs[0];
    }
    activePair.classList.remove("activePair");
    setTimeout(function () {
    nextPair.classList.add("activePair");
    },300)


}