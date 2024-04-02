const btnDarkMode = document.querySelector('.dark-mode-btn')

if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
}

// if (
// 	window.matchMedia &&
// 	window.matchMedia('(prefers-color-scheme: dark)').matches
// ) {
// 	btnDarkMode.classList.add('dark-mode-btn--active')
// 	document.body.classList.add('dark')
// 	localStorage.setItem('darkMode', 'dark')
// }

window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', event => {
		const newColorSchema = event.matches ? 'dark' : 'light'

		if (newColorSchema === 'dark') {
			btnDarkMode.classList.add('dark-mode-btn--active')
			document.body.classList.add('dark')
			localStorage.setItem('darkMode', 'dark')
		} else {
			btnDarkMode.classList.remove('dark-mode-btn--active')
			document.body.classList.remove('dark')
			localStorage.setItem('darkMode', 'light')
		}
	})
btnDarkMode.onclick = function (e) {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	document.body.classList.toggle('dark')

	const isDark = document.body.classList.contains('dark')

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
	e.preventDefault()
}
