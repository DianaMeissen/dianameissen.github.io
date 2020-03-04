function touch(event) {
    let el_id = event.target.id.substring(4, event.target.id.length), number, new_elem;
    document.getElementById(el_id).removeAttribute("checked");
    number = parseInt(el_id.substring(el_id.length - 1, el_id.length));
    number == 5 ? number = 1 : number++;
    new_elem = document.getElementById("switch" + number);
    new_elem.setAttribute("checked", true);
    alert({ new_elem, number, el_id })
}

document.addEventListener("touchmove", touch);