function touch() {
    let el = document.getElementById("slider");
    el.addEventListener("touchmove", console.log("touched"), false);
}