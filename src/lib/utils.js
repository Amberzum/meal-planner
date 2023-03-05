export function shuffle(array) {
	let shuffledArray = array.sort(() => Math.random() - 0.5);
	return shuffledArray;
}
