function touch(event) {
    alert(event.target)
    //    let el = document.getElementById("slider");
    //   el.addEventListener("touchmove", console.log("touched"), false);
}

document.addEventListener("touchmove", touch);