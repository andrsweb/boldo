document.addEventListener( 'DOMContentLoaded', () => { 
	'use strict' 
    
    itemWrapp()
} )

const itemWrapp = () => {

    const connectItemWrapp = document.querySelectorAll('.connect-item')
    if ( ! connectItemWrapp.length) return
    console.log(connectItemWrapp.length)

    connectItemWrapp.forEach( itemWrapp => {
        itemWrapp.addEventListener('click', () => {
            if ( ! itemWrapp.classList.contains('active'))
                itemWrapp.classList.add('active')
            else
                itemWrapp.classList.remove('active')
        })
    })
}
