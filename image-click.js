onload = () => {
    let images = Array.from(document.getElementsByTagName('img'));
    images.map(image => {
        image.onclick = function () {
            window.location = this.src;
        }
    })
}
