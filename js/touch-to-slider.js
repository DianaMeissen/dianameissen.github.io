function touch(event) {
    alert(event.target.id)
    //    let el = document.getElementById("slider");
    //   el.addEventListener("touchmove", console.log("touched"), false);
}

document.addEventListener("touchmove", touch);