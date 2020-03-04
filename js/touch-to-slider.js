function touch(event) {
    console.log(event)
    //    let el = document.getElementById("slider");
    //   el.addEventListener("touchmove", console.log("touched"), false);
}

document.getElementById("eyepass__slider").addEventListener("touchmove", touch(event));
document.addEventListener("drag", touch(event));
document.addEventListener("click", touch(event));