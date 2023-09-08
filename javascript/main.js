"use strict";
const loadImgRed = async () => {
    const redes = document.getElementById('img-redes');
    const blobImg = await fetch('./images/redes.jpeg');
    const img = await blobImg.blob();
    const url = URL.createObjectURL(img);

    redes.src = url;
}

loadImgRed();