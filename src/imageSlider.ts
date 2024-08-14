const thumbailImages: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="thumbail-product-images"]')
const fullImage = document.querySelector('[data-open-ligthbox]') as HTMLImageElement

const nextImageButton = document.querySelector('[data-next-image]')
const previousImageButton = document.querySelector('[data-previous-image]')

const nextImageButtonLigthbox = document.querySelector('[data-next-image-ligthbox]')
const previousImageButtonLigthbox = document.querySelector('[data-previous-image-ligthbox]')

const PRODUCT_IMAGES_QUANTITY = 4
let currentImage: number = 0
thumbailImages[0].checked = true

function autoSlide() {
  currentImage === PRODUCT_IMAGES_QUANTITY - 1 ? currentImage = 0 : currentImage++
  console.log(currentImage)
  thumbailImages[currentImage].checked = true
  fullImage.style.marginLeft = `${-100 * (currentImage)}%`
}

let autoSlideInterval = setInterval(autoSlide, 10000)

function swapImages() {
  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(autoSlide, 10000)
  fullImage.style.marginLeft = `${-100 * (currentImage)}%`
}

thumbailImages.forEach((thumbailImage) => {
  thumbailImage.addEventListener('click', (event) => {
    const selectedElement = event.target as HTMLInputElement
    currentImage = parseInt(selectedElement.value) -1
    swapImages()
  })
})

nextImageButton?.addEventListener('click', () => {
  currentImage === PRODUCT_IMAGES_QUANTITY - 1 ?  currentImage = 0: currentImage++
  swapImages()
})


previousImageButton?.addEventListener('click', () => {
  currentImage === 0 ?  currentImage = PRODUCT_IMAGES_QUANTITY - 1 : currentImage--
  swapImages()
})