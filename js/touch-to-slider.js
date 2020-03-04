function touch() {
    let el = document.getElementById("slider");
    el.addEventListener("touchmove", console.log("touched"), false);
}

document.getElementById("eyepass__slider").addEventListener("touchmove", alert('touch start'));
document.addEventListener("drag", alert('draaaaag'));
document.addEventListener("click", alert('click'));