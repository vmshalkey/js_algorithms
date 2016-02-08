function nth_largest (arr, n) {
	var arr_max = [];
	var k = 0;
	var max = arr[0];


	for (var m = 0; m < arr.length; m++) {
		arr_max[m] = arr[0];
	}

	while (k < arr.length){
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > arr_max[i]) {
				arr_max[i] = arr[i];
			}
			if (arr[i] > arr_max[i+1] && arr[i] < arr_max[i]) {
				arr_max[i+1] = arr[i];
			}
		}
	}
	console.log(arr_max[n-1]);
}

var x = [2, 6, 7, 3, 4, 8];

nth_largest(x, 3);