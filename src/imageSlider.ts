const thumbailImages: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="thumbail-product-images"]')
// const thumbailImages = document.querySelector('.images-thumbails') as HTMLDivElement
const fullImage = document.querySelector('[data-open-ligthbox]') as HTMLImageElement

let currentImage: number = 1

thumbailImages.forEach((thumbailImage) => {
  thumbailImage.addEventListener('click', (event) => {
    const selectedElement = event.target as HTMLInputElement
    if(selectedElement) currentImage = parseInt(selectedElement.value)
    if(fullImage) fullImage.style.marginLeft = `${-100 * (currentImage - 1)}%`
  })
})

setInterval(() => {
  currentImage + 1 > 4 ? currentImage = 1 : currentImage++
  thumbailImages[currentImage - 1].checked = true
  if(fullImage) fullImage.style.marginLeft = `${-100 * (currentImage - 1)}%`
}, 5000)
