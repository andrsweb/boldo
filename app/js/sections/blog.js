document.addEventListener( 'DOMContentLoaded', () => {  // Always be at start of the new page 
	'use strict'  // Hard mode))) Check for errors 

	questionsToggle()  // Name of the function under this DOM
} )

const questionsToggle = () => {

	const questions = document.querySelectorAll('.dropdown-question') // QuerySelectorAll - for all twins 

	if ( ! questions.length) return // lenght - returns number of elements  

	questions.forEach( question => { // forEach - cycle for each element in ('.dropdown-question')
		question.addEventListener('click', () => {
			if ( ! question.classList.contains('hide'))
				question.classList.add('hide')
			else
				question.classList.remove('hide')
		})
	})
	
}