const generateQRCode = () => {
    let qrImg = document.querySelector(".qr-code img"),
        container = document.querySelector(".container"),
        textInput = document.querySelector(".content input"),
        generateBTN = document.querySelector(".container .btn"),
        saveqr = document.querySelector(".save"),
        saveimg = document.querySelector(".saved");
    generateBTN.addEventListener("click", () => {
        let textvalue = textInput.value;
        if (!textvalue) return;
        generateBTN.innerText = "generating QR code...";
        qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${textvalue}` ;
        qrImg.addEventListener("load", () => {
            container.classList.add("active");
            generateBTN.innerText = "Generate QR Code";
            textInput.value = "";
        });
        console.log(saveimg);

    });
    textInput.addEventListener("click", () => {
        if (!textInput.value) {
            container.classList.remove("active");
            textvalue = "";
        }
    });
    let file;
    saveqr.addEventListener("click", () => {
        file=getMediaSource();
        console.log(file.readyState);
        qrImg.src=URL.createObjectURL(file);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = qrImg.naturalWidth;
        canvas.height = qrImg.naturalHeight;
        context.scale(1, 1);
        // saveimg.src=URL.createObjectURL(qrImg);
        context.drawImage(qrImg, canvas.width, canvas.height);
        const link = document.createElement("a");
        link.download = "qr.jpg";
        link.href = canvas.toDataURL();
        link.click();
    });
}
generateQRCode();