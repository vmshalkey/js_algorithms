function balance(arr) {
	var tot = 0;

	for(i = 0; i<arr.length; i++) {
		tot+=arr[i];
	}

	var idx = 0;
	var sum = 0;

	while(idx<arr.length) {
		sum+=arr[idx];
		if(sum == tot/2) {
			return true;
		}else if(sum>tot/2) {
			return false;
		} else {
			idx++;
		}
	}
}

x = [1,2,3,4,10];
balance(x);