/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
	const stringus = string.replace(/,/g, ' ').split(' ').filter(n => parseFloat(n));
	let minMax = {
		"max": Math.max(...stringus),
		"min": Math.min(...stringus),
	};

	return minMax;
}