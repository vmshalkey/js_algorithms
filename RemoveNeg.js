function removeNeg(arr) {

		var counter = 0;

		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i] < 0) {
				counter++;
			} else {
				arr[i-counter] = arr[i];
			}
		}
		arr.length - counter;
		console.log(arr);
}

x = [1, -2, 3, -4, 5, -6, 7];
removeNeg(x);