function mergeTwo(arr1,arr2){
	var newArr=[];
	var ct1=0;
	var ct2=0;

	while(ct1<arr1.length && ct2<arr2.length){
		console.log("ct1: "+ct1+"ct2: "+ct2);
		if(arr1[ct1] == arr2[ct2]){
			newArr.push(arr1[ct1]);
			newArr.push(arr2[ct2]);
			ct1++;
			ct2++;
		} else if(arr1[ct1]<arr2[ct2]){
			newArr.push(arr1[ct1]);
			ct1++;
		} else if(arr2[ct2]<arr1[ct1]){
			newArr.push(arr2[ct2]);
			ct2++;
		}
	}
	while(ct1<arr1.length){
		newArr.push(arr1[ct1]);
		ct1++;
	}
	while(ct2<arr2.length){
		newArr.push(arr2[ct2]);
		ct2++;
	}
	return newArr;
}
x = [2,4,6];
y = [2,3,5];
mergeTwo(x,y);