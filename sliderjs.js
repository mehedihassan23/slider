var count = 1;
function slider() {
    count++;
    let currentElement = document.querySelector(".active")
    let nextElement = currentElement.nextElementSibling;
    let lastchild = document.querySelectorAll(".slide")

    currentElement.classList.remove("active");

    if (count > lastchild.length) {
        lastchild[0].classList.add("active")
        count = 1;
    } else {

        nextElement.classList.add("active")

    }

}

setInterval(slider, 2000)


