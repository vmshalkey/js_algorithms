function second_largest (arr) {
	var max = arr[0];
	var nextMax = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] > nextMax && arr[i] < max) {
			nextMax = arr[i];
		}
	}
	console.log(nextMax);
}

var x = [2, 6, 7, 3, 4, 7];

second_largest(x);