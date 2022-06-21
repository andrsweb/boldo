document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	onHeaderButtonClick()
} )     

const onHeaderButtonClick = () => {
    const button = document.querySelector('.header-button .button')

    if (!button) return

    button.addEventListener('click', event => {
        event.preventDefault()
        console.log('huy')
    }) 
}

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY
    const header = document.querySelector('.header')

    if (scrollTop > 0) {
        if (!header.classList.contains('scrolled')) {
            header.classList.add('scrolled')
        }
    }   else {
        if (header.classList.contains('scrolled')) {
            header.classList.remove('scrolled')
        }
    }
}) 




