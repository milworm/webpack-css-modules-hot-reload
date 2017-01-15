import Layout from 'app/layout'
 
let layout = new Layout()

layout.renderTo(document.getElementById('root'))

if(module.hot) {
	const FILE_NAME = 'bundle.css'
	let file = ''
	let el = document.querySelector(`link[href*="${FILE_NAME}"]`)
	let {href} = el

	function httpGet(url, callback) {
		let xhr = new XMLHttpRequest()

		xhr.addEventListener('load', () => callback(xhr))
		xhr.open('GET', url)
		xhr.send()
	}

	module.hot.accept()
	module.hot.dispose(() => {
		let url = `${href}?d=${new Date().getTime()}`

		httpGet(url, ({responseText}) => {
			if(responseText == file)
				window.location.reload() // js was changed
			else
				el.href = url
		})
	})

	httpGet(href, ({responseText}) => {
		file = responseText
	})
}