const cartButton = document.querySelector('[data-cart-button]')
const cartMenu = document.querySelector('[data-cart-menu]')
const cartContent = document.querySelector('[data-cart-content]')
const addToCartButton = document.querySelector('[data-add-to-cart]')
const minusCounterButton = document.querySelector('[data-minus-counter]')
const plusCounterButton = document.querySelector('[data-plus-counter]')
const productQuantityCounter = document.querySelector('[data-quantity-counter]')
const fullImage = document.querySelector('[data-open-ligthbox]')
const fullImageLigthbox = document.querySelector('[data-full-image-ligthbox]')
const closeLigthbox = document.querySelector('[data-close-ligthbox]')
const ligthBox = document.querySelector('[data-ligthbox]')
const thumbailImages = document.querySelectorAll('input[name="thumbail-product-images"]')
const thumbailImagesLigthbox = document.querySelectorAll('input[name="thumbail-product-images-ligthbox"]')
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

const individualPrice = 125
let productQuantity = 1
let productQuantityCart = 0
let currentImage = 1
let currentLigthboxImage = 1

cartButton.addEventListener('click', () => {
	cartMenu.classList.toggle('open')
})

minusCounterButton.addEventListener('click', () => {
	if(productQuantity - 1 == 1) minusCounterButton.disabled = true
	productQuantity--
	productQuantityCounter.textContent = productQuantity
})

plusCounterButton.addEventListener('click', () => {
	minusCounterButton.disabled = false
	productQuantity++
	productQuantityCounter.textContent = productQuantity
})

fullImage.addEventListener('click', () => {
	if(window.screen.width <= '700') return
	ligthBox.classList.add('open')
})

closeLigthbox.addEventListener('click', () => {
	ligthBox.classList.remove('open')
})

mobileMenuOpen.addEventListener('click', () => {
	mobileMenu.classList.add('open')
})

mobileMenuClose.addEventListener('click', () => {
	mobileMenu.classList.remove('open')
})

thumbailImages.forEach(thumbailImage => {
	thumbailImage.addEventListener('click', () => {
		const selectedImage = document.querySelector('input[name="thumbail-product-images"]:checked')
		currentImage = selectedImage.value
		fullImage.style.marginLeft = `${-100 * (currentImage - 1)}%`
	})
})

thumbailImagesLigthbox.forEach(thumbailImage => {
	thumbailImage.addEventListener('click', () => {
		const selectedImage = document.querySelector('input[name="thumbail-product-images-ligthbox"]:checked')
		currentLigthboxImage = selectedImage.value
		fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage - 1)}%`
	})
})

previousImageButtonLigthbox.addEventListener('click', () => {
	currentLigthboxImage--
	if(currentLigthboxImage == 0) currentLigthboxImage = 4
	thumbailImagesLigthbox[currentLigthboxImage - 1].checked = true
	fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage - 1)}%`
})

nextImageButtonLigthbox.addEventListener('click', () => {
	currentLigthboxImage++
	if(currentLigthboxImage == 5) currentLigthboxImage = 1
	thumbailImagesLigthbox[currentLigthboxImage - 1].checked = true
	fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage - 1)}%`
})

previousImageButton.addEventListener('click', () => {
	currentImage--
	if(currentImage == 0) currentImage = 4
	thumbailImages[currentImage - 1].checked = true
	fullImage.style.marginLeft = `${-100 * (currentImage - 1)}%`
})

nextImageButton.addEventListener('click', () => {
	currentImage++
	if(currentImage == 5) currentImage = 1
	thumbailImages[currentImage - 1].currentImage = true
	fullImage.style.marginLeft = `${-100 * (currentImage - 1)}%`
})

addToCartButton.addEventListener('click', () => {
	cartContent.classList.remove('empty')
	cartButton.classList.add('products-added')
	productQuantityCart += productQuantity
	smallQuantityProductCartCounter.setAttribute('data-small-product-quantity-cart', productQuantityCart)
	quantityProductCartCounter.textContent = ` x ${productQuantityCart} `
	totalPrice.textContent = `$${individualPrice * productQuantityCart}.00`
})

removeProductButton.addEventListener('click', () => {
	cartContent.classList.add('empty')
	cartButton.classList.remove('products-added')
	productQuantityCart = 0
})