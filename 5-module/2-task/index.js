/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.el.createTBody();

  // шапка таблицы
  this.el.insertAdjacentHTML("afterbegin",`
  <thead>
  <tr>
  <td>Name</td>
  <td>Age</td>
  <td>Salary</td>
  <td>City</td>
  </tr>
  </thead>
`);

  // тело таблицы
	for (let person of items) {
		this.el.lastElementChild.innerHTML += `
    <tr>
    <td>${person.name}</td>
    <td>${person.age}</td>
    <td>${person.salary}</td>
    <td>${person.city}</td>
    </tr>`;


  }


	/**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {

		switch(column) {
			case 0:
				let sortedByName = Array.from(this.el.rows).slice(1)
					.sort((rowA, rowB) => {
						if (rowA.cells[0].innerHTML.toLowerCase() < rowB.cells[0].innerHTML.toLowerCase()) {
							return -1;
						}
						if (rowA.cells[0].innerHTML.toLowerCase() > rowB.cells[0].innerHTML.toLowerCase()) {
							return 1;
						}
						return 0;
						});

				if (desc) {
					sortedByName.reverse();
				}

				this.el.tBodies[0].append(...sortedByName);
				break;

			case 2:
				let sortedBySalary = Array.from(this.el.rows).slice(1)
						.sort((rowA, rowB) =>
							+(rowA.cells[2].innerHTML) - +(rowB.cells[2].innerHTML));

					this.el.tBodies[0].append(...sortedBySalary);
				break;
		}
	};
}
