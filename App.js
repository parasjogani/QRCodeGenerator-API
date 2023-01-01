let imgSrc = document.getElementById("img")
let inputData = document.getElementById("input")
let submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", () => {
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData.value}`
    imgSrc.src = url
    imgSrc.style.display = "block"
})
