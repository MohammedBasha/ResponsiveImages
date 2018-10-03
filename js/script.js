const IMAGES = document.querySelectorAll("img"),
      SIZES = {
          showcase: "100vw",
          reason: "(max-width: 799px) 100vw, 372px",
          feature: "(max-width: 799px) 100vw, 558px",
          story: "(max-width: 799px) 100vw, 670px"
      };

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
        srcSet = makeSrcset(imgSrc),
        sizes = SIZES[type];
    
    IMAGES[i].setAttribute("srcset", srcSet);
    IMAGES[i].setAttribute("sizes", sizes);
}