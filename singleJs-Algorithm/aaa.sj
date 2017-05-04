var matrixReshape = function(nums, r, c) {
    var str = nums.join().replace(/,/g,'')
    if(str.length != r*c){
        return nums
    } else {
        str = '0'+str;
        var arr = [];
       for(let i=1;i<r+1;i++){
        var arr2 = [];
        for(let j=1;j<c+1;j++){
            arr2.push(+str[i*j])
        }
        arr.push(arr2);
    }
    console.log(arr);
    return arr
    }
    
};