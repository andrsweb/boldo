document.addEventListener( 'DOMContentLoaded', () => { 
	'use strict' 

	changeImg()
} )

const changeImg = () => {
	const buttons = document.querySelectorAll('.connect-item-wrapp')
	const destImg = document.querySelector('.connect-to-change')
	const wrapp = document.querySelector('.connect-items')
	
	if ( ! buttons.length || ! destImg ) return

	buttons.forEach( img => {
		img.addEventListener('click', () => { 
			const imgSrc = img.dataset.img

			if ( ! imgSrc || img.classList.contains( 'active' ) ) return

			wrapp.querySelector('.active').classList.remove('active')
			img.classList.add('active')

			destImg.src = imgSrc
		})
	})
}