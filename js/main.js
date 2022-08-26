const generateQRCode = () => {
    let qrImg = document.querySelector(".qr-code img"),
        container = document.querySelector(".container"),
        textInput = document.querySelector(".content input"),
        generateBTN = document.querySelector(".container .btn");
        
    generateBTN.addEventListener("click", () => {
        let textvalue = textInput.value;
        if (!textvalue) return;
        generateBTN.innerText = "generating QR code...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${textvalue}`;
        qrImg.addEventListener("load", () => {
            container.classList.add("active");
            generateBTN.innerText = "Generate QR Code";
            textInput.value = "";
        });
        console.log(textvalue);

    });

    textInput.addEventListener("click", () => {
        if (!textInput.value) {
            container.classList.remove("active");
            textvalue = "";
        }
    });
}
generateQRCode();