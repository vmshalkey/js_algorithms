// function insert(val, arr) {

// arr[arr.length] = 0;

// 	for (var i = arr.length - 1; i >= 0; i--) {
// 			arr[i] = arr[i-1];
// 			if (i == 0) {
// 				arr[i] = val;
// 			}
// 	}
// 	console.log(arr);
// }

// var arr = [1, 3, 5, 7, 9];

// insert(10, arr);


// function insert(val, arr) {

// arr[arr.length] = 0;

// 	for (var i = arr.length - 1; i > 0; i--) {
// 			arr[i] = arr[i-1];
// 	}
// 	arr[0] = val;
// 	console.log(arr);
// }

// var arr = [1, 3, 5, 7, 9];

// insert(10, arr);



function remove(arr) {

	var val = arr[0];

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i+1];
	}
	arr.length -= 1;
	console.log('The value is: ' + val);
	console.log(arr);
}

arr = [1, 2, 3, 4, 5, 6, 7];
remove(arr);

