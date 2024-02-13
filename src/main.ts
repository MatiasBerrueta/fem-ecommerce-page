const minusCounterButton = document.querySelector('[data-minus-counter]') as HTMLButtonElement
const plusCounterButton = document.querySelector('[data-plus-counter]') as HTMLButtonElement
const productQuantityCounter = document.querySelector('[data-quantity-counter]')
const fullImageLigthbox = document.querySelector('[data-full-image-ligthbox]') as HTMLImageElement
const closeLigthbox = document.querySelector('[data-close-ligthbox]')
const ligthBox = document.querySelector('[data-ligthbox]')
const thumbailImagesLigthbox: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="thumbail-product-images-ligthbox"]')
const previousImageButton = document.querySelector('[data-previous-image]')
const previousImageButtonLigthbox = document.querySelector('[data-previous-image-ligthbox]')
const nextImageButton = document.querySelector('[data-next-image]')
const nextImageButtonLigthbox = document.querySelector('[data-next-image-ligthbox]')
const removeProductButton = document.querySelector('[data-remove-product]')
const totalPrice = document.querySelector('[data-total-price]')
const quantityProductCartCounter = document.querySelector('[data-product-quantity-cart]')
const smallQuantityProductCartCounter = document.querySelector('[data-small-product-quantity-cart]')
const mobileMenu = document.querySelector('[data-mobile-menu]')
const mobileMenuOpen = document.querySelector('[data-mobile-menu-open]')
const mobileMenuClose = document.querySelector('[data-mobile-menu-close]')

let productQuantity = 1
let currentLigthboxImage = 1

minusCounterButton?.addEventListener('click', () => {
	if(productQuantity - 1 == 1) minusCounterButton.disabled = true
	productQuantity--
	if(productQuantityCounter) productQuantityCounter.textContent = productQuantity.toString()
})

plusCounterButton?.addEventListener('click', () => {
	minusCounterButton.disabled = false
	productQuantity++
	if(productQuantityCounter) productQuantityCounter.textContent = productQuantity.toString()
})

// fullImage?.addEventListener('click', () => {
// 	if(window.screen.width <= 700) return
// 	ligthBox?.classList.add('open')
// })

closeLigthbox?.addEventListener('click', () => {
	ligthBox?.classList.remove('open')
})

mobileMenuOpen?.addEventListener('click', () => {
	mobileMenu?.classList.add('open')
})

mobileMenuClose?.addEventListener('click', () => {
	mobileMenu?.classList.remove('open')
})

thumbailImagesLigthbox.forEach(thumbailImage => {
	thumbailImage.addEventListener('click', () => {
		const selectedImage = document.querySelector('input[name="thumbail-product-images-ligthbox"]:checked') as HTMLInputElement
		currentLigthboxImage = parseInt(selectedImage.value)
		if(fullImageLigthbox) fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage - 1)}%`
	})
})

previousImageButtonLigthbox?.addEventListener('click', () => {
	currentLigthboxImage--
	if(currentLigthboxImage == 0) currentLigthboxImage = 4
	thumbailImagesLigthbox[currentLigthboxImage - 1].checked = true
	fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage - 1)}%`
})

nextImageButtonLigthbox?.addEventListener('click', () => {
	currentLigthboxImage++
	if(currentLigthboxImage == 5) currentLigthboxImage = 1
	thumbailImagesLigthbox[currentLigthboxImage - 1].checked = true
	fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage - 1)}%`
})

// previousImageButton?.addEventListener('click', () => {
// 	currentImage--
// 	if(currentImage == 0) currentImage = 4
// 	thumbailImages[currentImage - 1].checked = true
// 	fullImage.style.marginLeft = `${-100 * (currentImage - 1)}%`
// })

// nextImageButton?.addEventListener('click', () => {
// 	currentImage++
// 	if(currentImage == 5) currentImage = 1
// 	thumbailImages[currentImage - 1].checked = true
// 	fullImage.style.marginLeft = `${-100 * (currentImage - 1)}%`
// })