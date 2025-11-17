function Dark() {
    document.body.classList.remove("light")
    document.body.classList.remove("neon")
    document.body.classList.remove("blurple")
}

function Light() {
    document.body.classList.add("light")
    document.body.classList.remove("neon")
    document.body.classList.remove("blurple")
}

function Neon() {
    document.body.classList.add("neon")
    document.body.classList.remove("blurple")
    document.body.classList.remove("light")
}

function Blurple() {
    document.body.classList.add("blurple")
    document.body.classList.remove("light")
    document.body.classList.remove("neon")
}

function Arial() {
    document.body.style.fontFamily = "Arial, Helvetica, sans-serif"
}

function Trebuchet() {
    document.body.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
}

function Monospace() {
    document.body.style.fontFamily = "monospace"
}