// Coded by Jared Smith
// Array problem
// CMP237 FINAL

var fruitList = [
{ "name": "banana", "color": "yellow" },
{ "name": "apple", "color": "red" },
{ "name": "strawberry", "color": "red" },
{ "name": "peach", "color": "orange" },
];

console.log(fruitList);

var filter = function(array, test) {
	var passed = [];
	for (var j = 0; j < array.length; j = j + 1) {
		if (test(array[j]))
			passed.push(array[j]);
		}
		return passed;
	}

console.log(filter(fruitList, function(fruit) {
	return fruit.color == "red";
	}));
