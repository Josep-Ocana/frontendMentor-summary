import './styles/main.scss';

// Selectors
const areasDiv = document.querySelector('.areas');

console.log('Webpack funcionando correctamente');

document.addEventListener('DOMContentLoaded', function () {
	cargarDatos();
});

function cargarDatos() {
	const url = './data.json';
	fetch(url)
		.then(respuesta => respuesta.json())
		.then(resultado => mostrarHTML(resultado));
}

function mostrarHTML(resultado) {
	resultado.forEach(categorias => {
		console.log(categorias);
		const { category, score, icon } = categorias;

		const row = document.createElement('DIV');
		row.classList.add(`row-${category}`);

		const imageIcon = document.createElement('img');
		imageIcon.src = icon;
		const categoryName = document.createElement('p');
		categoryName.textContent = category;
		const scoreSpan = document.createElement('span');
		scoreSpan.classList.add('value');
		scoreSpan.textContent = score;
		const totalSpan = document.createElement('span');
		totalSpan.classList.add('total');
		totalSpan.textContent = ' / 100';

		row.appendChild(imageIcon);
		row.appendChild(categoryName);
		row.appendChild(scoreSpan);
		row.appendChild(totalSpan);
		areasDiv.appendChild(row);
	});
}
