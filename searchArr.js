//searches a sorted array

function searchArr(arr, num) {

	var mid = Math.floor((arr.length-1)/2);

	if (num < arr[0] || num > arr[arr.length-1]){
		return "I could not find the number " + num;
	} else if (num = arr[arr.length-1]) {
		return "I found the number " + num + " at index " + (arr.length-1);
	} else {
		while (num < arr[mid]) {
			mid = Math.floor(mid/2);
		}
		while (num > arr[mid]) {
			mid += Math.floor(mid/2);
		}
		if (num == arr[mid]) {
			return "I found the number " + num + " at index " + mid;
		} else {
			return "Sorry, I could not find the number " + num;
		}
	}
}
var x = [2, 5, 9, 11, 13, 16];
searchArr(x, 16);