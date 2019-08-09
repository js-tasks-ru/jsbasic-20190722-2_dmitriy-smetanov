/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
	const filtered = data.filter(o => o.age <= age);
	return filtered.map(d => `${d.name}, ${d.balance}`).join('\n');
}