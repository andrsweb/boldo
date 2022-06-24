const onArrowClickTop = document.querySelector('.dropdown-question-ico-top')
const dropDownTop = document.querySelector('.dropdown-open.top')

onArrowClickTop.addEventListener('click', () => {
	if ( ! dropDownTop.classList.contains('show'))
		dropDownTop.classList.add('show')
	else 	
		dropDownTop.classList.remove('show')

	if ( ! onArrowClickTop.classList.contains('up'))
		onArrClickTop.classList.add('up')
	else
		onArrClickTop.classList.remove('up')
})

const onArrowClickBot = document.querySelector('.dropdown-question-ico-bot')
const dropDownBot = document.querySelector('.dropdown-open.bot')

onArrowClickBot.addEventListener('click', () => {
	if ( ! dropDownBot.classList.contains('show'))
		dropDownBot.classList.add('show')
	else 	
		dropDownBot.classList.remove('show')

	if ( ! onArrowClickBot.classList.contains('down'))
			onArrowClickBot.classList.add('down')
	else
		onArrowClickBot.classList.remove('down')
})