const thumbailImages: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="thumbail-product-images"]')
const fullImage = document.querySelector('[data-open-ligthbox]') as HTMLImageElement

const nextImageButton = document.querySelector('[data-next-image]')
const previousImageButton = document.querySelector('[data-previous-image]')

const PRODUCT_IMAGES_QUANTITY: number = 4
let currentImage: number = 0
thumbailImages[0].checked = true

function autoSlide() {
  currentImage = (currentImage + 1) % PRODUCT_IMAGES_QUANTITY
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

const ligthBox = document.querySelector('[data-ligthbox]')
const fullImageLigthbox = document.querySelector('[data-full-image-ligthbox]') as HTMLImageElement
const closeLigthboxButton = document.querySelector('[data-close-ligthbox]')
const thumbailImagesLigthbox: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="thumbail-product-images-ligthbox"]')

const nextImageButtonLigthbox = document.querySelector('[data-next-image-ligthbox]')
const previousImageButtonLigthbox = document.querySelector('[data-previous-image-ligthbox]')

let currentLigthboxImage: number = 0
thumbailImagesLigthbox[0].checked = true

fullImage?.addEventListener('click', () => {
	if(window.screen.width <= 700) return
	ligthBox?.classList.remove('hide')
})

closeLigthboxButton?.addEventListener('click', () => {
  ligthBox?.classList.add('hide')
})

previousImageButtonLigthbox?.addEventListener('click', () => {
	currentLigthboxImage = (currentLigthboxImage - 1) % PRODUCT_IMAGES_QUANTITY
	thumbailImagesLigthbox[currentLigthboxImage].checked = true
	fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage)}%`
})

nextImageButtonLigthbox?.addEventListener('click', () => {
	currentLigthboxImage = (currentLigthboxImage + 1) % PRODUCT_IMAGES_QUANTITY
	thumbailImagesLigthbox[currentLigthboxImage].checked = true
	fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage)}%`
})

thumbailImagesLigthbox.forEach((thumbailImage) => {
  thumbailImage.addEventListener('click', (event) => {
    const selectedElement = event.target as HTMLInputElement
    currentLigthboxImage = parseInt(selectedElement.value) -1
    fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage)}%`
  })
})