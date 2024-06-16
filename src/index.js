import './styles/main.scss';

// Selectors
const areasDiv = document.querySelector('.areas');
const totalScore = document.querySelector('.total-score');

console.log('Webpack funcionando correctamente');

document.addEventListener('DOMContentLoaded', function () {
	cargarDatos();
});

function cargarDatos() {
	const url = './data.json';
	fetch(url)
		.then(response => response.json())
		.then(result => mostrarHTML(result));
}

function mostrarHTML(categories) {
	let total = 0;
	categories.forEach(subject => {
		const { category, score, icon } = subject;

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

		// Calculate total
		total = Math.round(total + score / categories.length);
		console.log(total);

		// Add to HTML
		row.appendChild(imageIcon);
		row.appendChild(categoryName);
		row.appendChild(scoreSpan);
		row.appendChild(totalSpan);
		areasDiv.appendChild(row);
	});

	totalScore.textContent = total;
}
