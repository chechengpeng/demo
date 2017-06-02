/**
 * @param {number[]} nums
 * @return {number[]}
 */




// 超时
var findDuplicates = function(nums) {
    var i=0;
    while(i<nums.length){
        if(nums.indexOf(nums[i],i+1) == -1){
            nums.splice(i,1)
        }else{
            nums.splice(nums.indexOf(nums[i],i+1),1)
            i++
        }
    }
    return nums
};
// 超时
var findDuplicates = function(nums) {
    var ons = [];
    for(var i=0;i<nums.length;i++){
        var ind = nums.indexOf(nums[i],i+1);
        if(ind>-1){
            nums.splice(ind,1);
            ons.push(nums[i]);
        }
    }
    return ons;
};