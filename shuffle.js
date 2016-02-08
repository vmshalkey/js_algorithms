function rand(max) {
	return Math.floor(Math.random()*max);
}

function swap(i1,i2,arr) {
	var temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;
}


function shuffle(arr) {
	var i = 0;

	while(i<arr.length) {
		swap(i,rand(arr.length),arr);
		i++;
	}
	return arr;
}
x = [1,2,3,4,5];

shuffle(x);

+++++++++++++++++

function shuffle(arr) {
	var i = 0;


	while(i<arr.length) {
		var temp = arr[i];
		arr[i] = arr[Math.floor(Math.random()*arr.length)];
		arr[Math.floor(Math.random()*arr.length)] = temp;
		i++;
	}
	return arr;
}
x = [1,2,3,4,5];

shuffle(x);