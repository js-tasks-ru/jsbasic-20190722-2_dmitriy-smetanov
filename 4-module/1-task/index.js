/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
	let listOfFriends = ``;
	let ul = document.createElement('ul');
	document.body.append(ul);

	for (let id of friends) {
		listOfFriends += `<li>${id.firstName} ${id.lastName}</li>`;
	}

	ul.innerHTML = `${listOfFriends}`;
	return ul;
}