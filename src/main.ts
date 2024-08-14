const totalPrice = document.querySelector('[data-total-price]')
const quantityProductCartCounter = document.querySelector('[data-product-quantity-cart]')
const smallQuantityProductCartCounter = document.querySelector('[data-small-product-quantity-cart]')

const mobileMenu = document.querySelector('[data-mobile-menu]')
const mobileMenuOpen = document.querySelector('[data-mobile-menu-open]')
const mobileMenuClose = document.querySelector('[data-mobile-menu-close]')

mobileMenuOpen?.addEventListener('click', () => {
	mobileMenu?.classList.remove('hide')
})

mobileMenuClose?.addEventListener('click', () => {
	mobileMenu?.classList.add('hide')
})

thumbailImagesLigthbox.forEach(thumbailImage => {
	thumbailImage.addEventListener('click', () => {
		const selectedImage = document.querySelector('input[name="thumbail-product-images-ligthbox"]:checked') as HTMLInputElement
		currentLigthboxImage = parseInt(selectedImage.value)
		if(fullImageLigthbox) fullImageLigthbox.style.marginLeft = `${-100 * (currentLigthboxImage - 1)}%`
	})
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