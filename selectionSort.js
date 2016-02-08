function selectionSort(arr) {
	var temp = 0;
	var idx = 0;

	for(i = 0; i < arr.length; i++) {
		var min = arr[i];
		for(k = i; k < arr.length; k++) {
			if(min >= arr[k]) {
				min = arr[k];
				idx = k;
			}
		}
		temp = arr[i];
		arr[i] = min;
		arr[idx] = temp;
	}
}
x = [5, 4, 1, 3, 2];
console.log("This is the original array: "+x);
selectionSort(x);
console.log("This is the sorted array: "+x);