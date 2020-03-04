function touch(event) {
    let el_id = event.target.id.substring(4, event.target.id.length);
    let slide = document.getElementById(el_id);
    slide.removeAttribute("checked");
    let number = parseInt(el_id.substring(el_id.length - 1, el_id.length));
    number == 5 ? number = 1 : number++;
    let new_elem = document.getElementById("switch" + number);
    new_elem.setAttribute("checked", true);
}

document.addEventListener("touchmove", touch);