const IMAGES = document.querySelectorAll("img");

function makeSrcset(imgSrc) {
    let markup = [],
        width = 400;
    
    for (let i = 0; i < 5; i++) {
        markup[i] = imgSrc + width + ".jpg " + width + "w";
        width += 400;
    }
    return markup.join();
}

for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src").slice(0, -7),
        type = IMAGES[i].getAttribute("data-type"),
        srcSet = makeSrcset(imgSrc);
    console.log(imgSrc, "\n", type, "\n", srcSet);
}