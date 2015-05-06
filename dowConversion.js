// Coded by Jared Smith
// dow Conversion problem
// CMP237 FINAL

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var numbers = [1, 2, 3, 4, 5, 6, 7];

var dayConvert = function(x) {
	if (isNaN(x) == false) {
		var y = x -  1
		var answer = days[y];
		return answer;
	}
	else if (isNaN(x) == true) {
		var y = days.indexOf(x);
		var answer = numbers[y];
		return answer; 
	}		
}

console.log(dayConvert(1));
console.log(dayConvert("Thursday"));
