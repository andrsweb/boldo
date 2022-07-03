document.addEventListener( 'DOMContentLoaded', () => { 
	'use strict' 

	changeImg()
} )

const changeImg = () => {
	const changeImages = document.querySelectorAll('.connect-item-wrapp')
	const destImg = document.querySelector('.connect-to-change')
	const wrapp = document.querySelector('.connect-items')
	
	if ( ! changeImages.length || ! destImg ) return

	changeImages.forEach( (img, index, arr) => {
		img.addEventListener('click', () => { 
			console.log(arr[index + 1])
			const imgSrc = img.dataset.img

			if ( ! imgSrc || img.classList.contains( 'active' ) ) return

			wrapp.querySelector('.active').classList.remove('active')
			img.classList.add('active')

			destImg.src = imgSrc
		})
	})
}