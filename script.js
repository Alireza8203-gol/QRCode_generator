const APIUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
const wrapper = document.querySelector(".wrapper");
const textInput = document.querySelector("#text");
const qrCodeImage = document.querySelector("img");
const requestBtn = document.querySelector("button");
const qrCodeImageURL = document.querySelector("#qr_code_URL");
const qrCodeImageSize = document.querySelector("#form_select");

function createQRCode() {
  let inputValue = textInput.value.trim();
  let size = qrCodeImageSize.value;

  if (inputValue) {
    qrCodeImage.setAttribute("src", `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${inputValue}`);
    requestBtn.innerHTML = "Generating QR Code ...";

    qrCodeImage.addEventListener("load", () => {

      wrapper.classList.add("active");

      requestBtn.innerHTML = "Generate QR Code";

      qrCodeImageURL.setAttribute("value", `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${inputValue}`);

      qrCodeImageURL.addEventListener("click", (e) => {
        e.target.select();
        document.execCommand('copy');
        alert("Copied Successfully!")
      });
    })
  }
}

textInput.addEventListener("keyup", () => {
  if (!textInput.value.trim()) {
    wrapper.classList.remove("active");
  }
})

requestBtn.addEventListener("click", createQRCode);