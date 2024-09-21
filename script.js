const links = document.getElementById("links")
const mediaQuery = window.matchMedia("(min-width: 885px)")

const toggleMenu = () => {
  if (links.style.display === "block") {
    links.style.display = "none"
  } else {
    links.style.display = "block"
  }
}

const setDisplay = mediaQuery => {
  if (mediaQuery.matches) {
    links.style.display = "flex"
  } else {
    links.style.display = "none"
  }
}

setDisplay(mediaQuery)

mediaQuery.addEventListener("change", function () {
  setDisplay(mediaQuery)
})