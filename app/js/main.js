document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	onHeaderButtonClick()
} )

const onHeaderButtonClick = () => {
	const button = document.querySelector( '.header-button .button' )

	if( ! button ) return

	button.addEventListener( 'click', () => alert( 'FUCK YOU' ) )
}