// function find_max(arr) {
// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			var max = arr[i];
// 			var max_i = i;
// 		}
// 	}
// 	return max, max_i;
// }


function nth_largest(arr, n) {
	var k = 0;
	var max = arr[0];
	arr_max = [];

	while (k < n) {
			for (i = 0; i < arr.length; i++) {
				if (arr[i] > max) {
					var max = arr[i];
					var max_i = k;
					arr_max[k] = max;
				}
			}
		for (x = max_i; x < arr.length; x++) {
			arr[x] = arr[x+1];
		}
		arr.length -=1;
		k++;
		max = arr[0];
		console.log(arr);
	}

	for (z = 0; z < arr.length; z++) {
				if (arr[z] > arr[z-1] && arr[z] < max) {
					final_max = arr[z];
					max_z = z;
				}
			}
	console.log(final_max)

}

var x = [2, 6, 7, 3, 4, 8];

nth_largest(x, 2);