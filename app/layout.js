import styles from './layout.scss'

export default class Layout {
	renderTo(node) {
		node.innerHTML = `
			<div class="${styles.component}">
				<h1>Hello from Layout</h1>
			</div>
		`
	}
}