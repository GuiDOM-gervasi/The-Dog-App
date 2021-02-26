export const parserArray = (array) => {
	let string = "";
	array.forEach(element => {
		return string += `${element.name}, `	
	});
	return string.substring(0, string.length - 2);
}


export const cutArray = (array) => {
	/*var principal = [];
	var eight = response[0].data.splice(0,8)
	eight.forEach(element => {
		var obj = {
			id: element.id,
			name: element.name,
			img: element.image.url,
			temperament: element.temperament
		}
		principal.push(obj)
	});*/
}

export function validate(input) {
	let errors = {};
	if (!input.name) {
	  errors.name = 'Name is required';
	} else if (!/[A-Z][a-z]/.test(input.name)) {
	  errors.name = 'Name is invalid';
	}  
	if (!input.height) {
		errors.height = 'Height is required';
	}
	if (!input.weight) {
		errors.weight = 'Weight is required';
	}
	return errors;
  };
  
export const spliter = (string) => {
	
	if(string){
		string = string.split(" ")
		var peso = string[2] || string[0]
		console.log(peso)
		return peso
	}
	return 1
}