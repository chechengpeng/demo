/**
 * @param {number[]} nums
 * @return {number[]}
 */
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