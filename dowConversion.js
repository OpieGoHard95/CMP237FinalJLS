// Coded by Jared Smith
// dow Conversion problem
// CMP237 FINAL

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var dayConvert = function(x) {
	var y = x -  1
	var answer = days[y];
	return answer;
}

console.log(dayConvert(1));
