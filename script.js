// Common JS
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})
// End of Common JS

// Slideshow
const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    setInterval(() => {
        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if(a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }
    }, 10000)
}

slideshow()
// End of Slideshow

//Photo galery
Fancybox.bind('[data-fancybox="gallery"]', {
    animated: false,
    showClass: false,
    hideClass: false,
  
    Toolbar: false,
  
    closeButton: "top",
    click: false,
    dragToClose: false,
  
    Carousel: {
      // Disable content slide animation
      friction: 0,
  
      // Disable touch guestures
      Panzoom: {
        touch: false,
      },
  
      Navigation: false,
    },
  
    Image: {
      // Disable animation from/to thumbnail on start/close
      zoom: false,
  
      // Disable zoom on scroll event
      wheel: false,
  
      // Disable zoom on image click
      click: false,
  
      // Fit image horizontally only
      fit: "contain-w",
    },
  
    // Center thumbnails only if draggable
    Thumbs: {
      minScreenHeight: 0,
      Carousel: {
        center: function () {
          return this.elemDimWidth > this.wrapDimWidth;
        },
      },
    },
  });
//End of photo galery




