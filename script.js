let moon = document.getElementByID("Moon")

moon.addEventListener("click", () => {
  document.getElementByID("textbox").innerText = "I am the moon.";
})

let ursaMajor = document.getElementByID("Ursa Major")

ursaMajor.addEventListener("click", () => {
  document.getElementByID("textbox").innerText = "I am Ursa Major.";
})

let ursaMinor = document.getElementByID("Ursa Minor")

ursaMinor.addEventListener("click", () => {
  document.getElementByID("textbox").innerText = "I am Ursa Minor.";
})
