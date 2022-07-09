import { isInScope, numberWithDots } from '../common/common'


document.addEventListener( 'DOMContentLoaded', () => {   
	'use strict'

})

const stepTime = 100

function outNum( elem) {
    let numElem = document.querySelectorAll(elem)

    numElem.forEach(elem => {
        let n = 0,
            step = parseInt(elem.dataset.step),
            limit = parseInt(elem.dataset.limit)

        let interval = setInterval(() => {
            n = n + step
    
            if (n  >= limit) {
                elem.innerHTML = numberWithDots(limit)
                clearInterval(interval)
            }   else {
                elem.innerHTML = numberWithDots(n)
            }
        }, stepTime)
    })
}

document.addEventListener( 'scroll', () => {
    const stats = document.querySelector('.statistics')

    if ( ! stats || stats.classList.contains('scrolled') ) return 

    if ( isInScope( '.statistics-title', window.scrollY ) ) {
        stats.classList.add('scrolled')
        outNum('.statistics-title span')
    } 
  } )

  

