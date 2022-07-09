import { isInScope } from '../common/common'

document.addEventListener( 'DOMContentLoaded', () => {   
	'use strict'   
})

const time = 2000
const step = 100  

function outNum( num, elem) {
    let numElem = document.querySelectorAll(elem)

    numElem.forEach(elem => {
        let  n = 0

        let stepTime = Math.round( time / (num / step))
    
        let interval = setInterval(() => {
            n = n + step
    
            if (n  == num) 
                clearInterval(interval)
            elem.innerHTML = n
        }, stepTime)
    })
}

document.addEventListener( 'scroll', () => {
    if( isInScope ( '.statistics-title', window.scrollY ) ) console.log('pezda') 
  } )


