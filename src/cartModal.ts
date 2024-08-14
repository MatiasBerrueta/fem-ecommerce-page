const minusCounterButton = document.querySelector('[data-minus-counter]') as HTMLButtonElement
const plusCounterButton = document.querySelector('[data-plus-counter]') as HTMLButtonElement
const productQuantityCounter = document.querySelector('[data-quantity-counter]')

const addToCartButton = document.querySelector('[data-add-to-cart]')
const cartButton = document.querySelector('.cart-modal-button') 
const cartModal = document.querySelector('.cart-modal') as HTMLDialogElement
const cartModalContent = document.querySelector('.cart-modal-content')
const removeProductButton = document.querySelector('[data-remove-product]')
const cartQuantityCounter = document.querySelector('.cart-quantity-counter')

const PRODUCT_FINAL_PRICE = 125
let productQuantity = 1
let productQuantityCart = 0

minusCounterButton?.addEventListener('click', () => {
	if(productQuantity - 1 <= 1) minusCounterButton.disabled = true
	productQuantity--
	if(productQuantityCounter) productQuantityCounter.textContent = productQuantity.toString()
})

plusCounterButton?.addEventListener('click', () => {
	minusCounterButton.disabled = false
	productQuantity++
	if(productQuantityCounter) productQuantityCounter.textContent = productQuantity.toString()
})

function closeModalOnClickOutside (event: Event) {
	const targetElement = event.target as Element
	if (targetElement != addToCartButton &&
			targetElement != minusCounterButton &&
			targetElement != plusCounterButton &&
			!cartButton?.contains(targetElement) &&
		  !cartModal.contains(targetElement)) {
			cartModal.classList.add('hide')
			document.removeEventListener('click', closeModalOnClickOutside)
	}
}

cartButton?.addEventListener('click', (event) => {
	event.stopPropagation()
	cartModal.classList.toggle('hide')
	if (!cartModal.classList.contains('hide')) {
		document.addEventListener('click', closeModalOnClickOutside)
	}
})

cartModalContent?.addEventListener('click', (event) => {
	event.stopPropagation()
	const targetElement = event.target as Element;
	if(!targetElement.classList.contains('remove-product-button')) return
	productQuantityCart = 0
	if(cartQuantityCounter) cartQuantityCounter.textContent = productQuantityCart.toString()
	cartQuantityCounter?.classList.add('hide')
	if(cartModalContent) cartModalContent.innerHTML = `<div class="cart-modal-content">Your cart is empty.</div>`
})

addToCartButton?.addEventListener('click', () => {
  productQuantityCart += productQuantity
	cartQuantityCounter?.classList.remove('hide')
	if(cartQuantityCounter) cartQuantityCounter.textContent = productQuantityCart.toString()
  if(cartModalContent) cartModalContent.innerHTML = `
	<div class="cart-modal-product">
		<img src="images/image-product-1-thumbnail.jpg" alt="product image">
		<div class="cart-product-info">
			<span class="cart-product-name">Fall Limited Edition Sneakers</span>
			<p><span>${PRODUCT_FINAL_PRICE}</span><span data-product-quantity-cart> x ${productQuantityCart} </span><span class="total-price" data-total-price>$${PRODUCT_FINAL_PRICE * productQuantityCart}</span></p>
		</div>
		<button class="remove-product-button"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="d"/></defs><use fill="currentColor" fill-rule="nonzero" xlink:href="#d"/></svg></button>
	</div>
  <button class="checkout-button">Checkout</button>`
})
