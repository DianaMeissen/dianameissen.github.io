function touch(event) {
    console.log(event)
    //    let el = document.getElementById("slider");
    //   el.addEventListener("touchmove", console.log("touched"), false);
}

document.addEventListener("touchmove", touch);
document.addEventListener("drag", touch);
document.addEventListener("click", touch);