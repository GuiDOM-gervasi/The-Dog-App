const parserArray = (array) => {
	let string = "";
	array.forEach(element => {
		return string += `${element.name}, `	
	});
	return string.substring(0, string.length - 2);
}

export default parserArray