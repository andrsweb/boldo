import Swiper, { Navigation } from 'swiper'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	sliderInit()
} )

const sliderInit = () => {
    const cards = document.querySelector('.enterprise-cards')

    if (!cards) return

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1, 
        navigation: {
            nextEl: '.enterprise-arrows .arrow-right',
            prevEl: '.enterprise-arrows .arrow-left'
        },
        modules: [Navigation],
        breakpoints: {
            320: {
              slidesPerView: 1
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 70
            }
        }
    })
}






