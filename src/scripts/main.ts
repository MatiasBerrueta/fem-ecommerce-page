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