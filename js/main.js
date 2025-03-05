const btnDarkMode = document.querySelector('.dark-mode-btn')

// Функция для обновления состояния темной темы
function updateDarkMode(isDark) {
	if (isDark) {
		btnDarkMode.classList.add('dark-mode-btn--active')
		document.body.classList.add('dark')
		localStorage.setItem('darkMode', 'dark')
	} else {
		btnDarkMode.classList.remove('dark-mode-btn--active')
		document.body.classList.remove('dark')
		localStorage.setItem('darkMode', 'light')
	}
}

if (localStorage.getItem('darkMode') === 'dark') {
	updateDarkMode(true)
}

// Обработчик события для переключения темной темы
btnDarkMode.onclick = function (e) {
	e.preventDefault()
	const isDark = document.body.classList.toggle('dark')
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	localStorage.setItem('darkMode', isDark ? 'dark' : 'light')
}

if (window.matchMedia) {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

	// Устанавливаем начальное состояние в зависимости от предпочтений пользователя
	if (mediaQuery.matches) {
		updateDarkMode(true)
	}

	mediaQuery.addEventListener('change', event => {
		updateDarkMode(event.matches)
	})
}
