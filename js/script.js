const IMAGES = document.querySelectorAll("img");

for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src").slice(0, -8),
        type = IMAGES[i].getAttribute("data-type");
    console.log(imgSrc, "\n", type);
}