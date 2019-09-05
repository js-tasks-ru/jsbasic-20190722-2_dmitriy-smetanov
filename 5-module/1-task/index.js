/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
	const tab = table;

	for (let i = 1; i < tab.rows.length; i++) {
		let row = tab.rows[i];
		let age = row.firstElementChild.nextElementSibling.textContent;
		let gender = row.lastElementChild.previousElementSibling.textContent;
		let status = row.lastElementChild.dataset.available;

		status === 'true' ? row.classList.toggle('available')
			: row.classList.toggle('unavailable');

		status === undefined ? row.hidden = 'true' : status;

		age < 19 ? row.style.textDecoration = "line-through" : age;

		gender === 'm' ? row.classList.toggle('male')
			: row.classList.toggle('female');

	}

}